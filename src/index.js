import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component{
 state = { latitude: null, errorMessage: "" }
  //to update state we call setState
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }
  //React says we have to define render
  renderContent(){
    if (this.state.latitude && !this.state.errorMessage) {
      return <SeasonDisplay latitude={this.state.latitide}/>;
    } else if (!this.state.latitude && this.state.errorMessage) {
      return <div>Error : {this.state.errorMessage} </div>;
    } else {
      return < Spinner message="Please accept location request"/>
    }
  }
  render() {
    return (<div style={{'border': "red 5px solid"}}>
      {this.renderContent()}
    </div>
    )
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
