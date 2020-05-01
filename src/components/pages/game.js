import React, { Component } from "react";
import Card from "../pages/cards/cards";
import images from "../../images.json";
import "./game.css";

class Game extends Component {
  state = {
    images,
    message: "Click on one of the pictures to begin!",
    score: 0,
    topScore: 0,
  };

  handleClick = (id, clicked) => {
    const imageOrder = this.state.images;

    if (clicked) {
      imageOrder.forEach((image, index) => {
        imageOrder[index].clicked = false;
      });
      return this.setState({
        image: imageOrder.sort(() => Math.random() - 0.5),
        message: "You guessed Incorrectly!",
        score: 0,
      });
    } else {
      imageOrder.forEach((image, index) => {
        if (id === image.id) {
          imageOrder[index].clicked = true;
        }
      });
      const { topScore, score } = this.state;
      const newScore = score + 1;
      const newTopScore = newScore > topScore ? newScore : topScore;

      return this.setState({
        image: imageOrder.sort(() => Math.random() - 0.5),
        message: "You guessed correctly!",
        score: newScore,
        topScore: newTopScore,
      });
    }
  };

  render() {
    return (
      <div className="container-fluid cardContainer">
        <div className="gameMessage text-center">
          <p>{this.state.message}</p>
        </div>
        <div className="gameScores text-center">
          <p>
            Score: {this.state.score} | Top Score: {this.state.topScore}
          </p>
        </div>
        <div className="container">
          <div className="row">
            {this.state.images.map((image) => (
              <Card
                key={image.id}
                id={image.id}
                name={image.name}
                clicked={image.clicked}
                image={image.image}
                handleClick={this.handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
