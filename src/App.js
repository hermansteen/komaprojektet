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
    fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16/lat/58/data.json')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded:true,
          items: json,
        })
      })
  }
  render() {
    let {isLoaded, items} = this.state;
    console.log(items.length)
    if(!isLoaded) {
      return <div>Loading...</div>
    } else {

      return (
        <div className="App">
            <ul>
              {/* {arrayofItems.map(item => (
                <li key={item.timeSeries.validTime}>
                  Name: {item.timeSeries[0].parameters} | Email: {item.email}
                </li>
              ))} */}
            </ul>
        </div>
    )
  }
  }

}
export default App;