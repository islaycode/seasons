import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component{
 
  state ={
      lat: null,
      errorMsg: ''
    }
    
  componentDidMount(){
    console.log("Component Mounted");

    window.navigator.geolocation.getCurrentPosition(
      position =>{ 
        this.setState({lat: position.coords.latitude})},
      err => {
        this.setState({ errorMsg: err.message })
      }
    );
  }

  componentDidUpdate(){
    console.log("Component just updated");
  }
  renderContent(){
    if(this.state.errorMsg && !this.state.lat){
      return <div>Error: {this.state.errorMsg}</div>
    }
    if(this.state.lat && !this.state.errorMsg){
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <div><Spinner message="Please Accept the location request"/></div>
  }
  render(){   
    return (
      <div className="border">{this.renderContent()}</div>
    )
     
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

