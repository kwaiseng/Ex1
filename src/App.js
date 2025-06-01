import "./styles.css";
import React, { Component } from "react";
import Card from "./card";
import Button from "./button";

let taco_url_list = [
  "https://hips.hearstapps.com/hmg-prod/images/index1-6839ed689b8fa.jpg?crop=0.502xw:1.00xh;0.291xw,0&resize=640:*",
  "https://drop.ndtv.com/video/images/vod/medium/2025-05/945971_maxresdefault.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ6iMJIw3K_ymxeu4YntX3GdxPoLMQ4uYetQ&s",
  "https://i.ytimg.com/vi/tZ4Z-F1xaP0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDQi2EMibv7PnxWxRef0rELe42h6g",
  "https://images.news18.com/ibnlive/uploads/2025/05/news18-1-24-2025-05-dea275f64cdc20eb5fb8450fb606887e.png?impolicy=website&width=640&height=360",
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: (this.state.clicks + 1) % 5 });
  };

  DecreaseItem = () => {
    this.setState({ clicks: (this.state.clicks - 1 + 5) % 5 });
  };

  render() {
    return (
      <div>
        <Card
          title="Trump"
          content="This is my TRUMP card."
          imageUrl={taco_url_list[this.state.clicks]}
        />

        <Button text="Forward" onClick={this} />
        <Button text="Backward" onClick={this} />
      </div>
    );
  }
}

export default App;
