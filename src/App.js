import React, {Component} from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items:[],
      isLoaded: false,
    }
  }
  componentDidMount() {
    let testString;
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      testString = "https://api.openweathermap.org/data/2.5/forecast?lat="+ position.coords.latitude + "&lon="+ position.coords.longitude+"&appid="+process.env.REACT_APP_API_KEY + "&units=metric"
      console.log(testString)
      fetch(testString)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded:true,
          items: json,
        })
      })
      console.log(this.state.items)
    });
  }
  render() {
    let {isLoaded, items} = this.state;
    console.log("AAAAAAAAAAAAAAAA")
    console.log(items.length)
    if(!isLoaded) {
      return <div>Loading...</div>
    } else {

      return (
        <div className="App">
            <ul>
            </ul>
        </div>
    )
  }
  }

}
export default App;