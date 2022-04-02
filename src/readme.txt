import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// const App =()=>{

//     window.navigator.geolocation.getCurrentPosition(position=>console.log(position),
//     err=>console.log(err));
//     return (
//         <div>
//             I am here
//         </div>
//     )
// }

class App extends React.Component {
  //Initializing state
  //!st way to define constructor and initialize our state
  // constructor(props){
  //     super(props);
  //     //this is only time we do direct assignment to this.state. If we want to render manipulatr update we should call setState
  //     this.state={latitude: null,errorMessage:''};

  //       // we cant do this.state.lat in react.
  // }

  //2nd way to use State

  state = { latitude: null, errorMessage: "" };
  //to update state we call setState
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  //React says we have to define render
  render() {
    if (this.state.latitude !== null && this.state.errorMessage === "") {
      return <div>Latitude : {this.state.latitude} </div>;
    } else if (this.state.latitude === null && this.state.errorMessage !== "") {
      return <div>Error : {this.state.errorMessage} </div>;
    } else {
      return <div>Loading</div>;
    }
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
