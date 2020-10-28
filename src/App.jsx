import React from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.win = Array(16).fill().map((item, index) => index)

    // this.blank = gameTiles[0]
    this.state = {
      gameTiles: []
    }

    this.renderWins = this.renderWins.bind(this);
    this.clickAction = this.clickAction.bind(this);
    this.updateTileStatus = this.updateTileStatus.bind(this);
  }

  renderWins() {
    let arr = []
    for (let i = 0; i < 16; i++) {
      arr.push({ id: i, status: false })
    }
    this.setState({
      gameTiles: arr
    })

    console.log(this.state.gameTiles)

  }

  updateTileStatus() {
    let blank = this.state.gameTiles.findIndex((element) => element.id === 0)
    let newArr = this.state.gameTiles.map((item, index) => {

      // if (item.id === 0) {
      //   item.status = false

      // }
      if (index === blank + 1 || index === blank - 1 || index === blank + 4 || index === blank - 4) {
        item.status = true
      }
      else {
        item.status = false
      }
      return item
    })
    //if check if new array is different from game tiles
    this.setState({
      gameTiles: newArr
    })
  }


  componentDidMount() {
    this.renderWins()


  }

  componentDidUpdate() {
    this.updateTileStatus()
  }


  clickAction(num) {
    this.state.gameTiles.map((item, index) => {
      if (item.status === true) {
        console.log(item)
      }
    })
    // if(this.state.gameTiles.status === true) {


    // console.log(num)
    // }
  }


  render() {
    return (
      <div className="container">
        <h1>
          Puzzle Slider
       <button
            className="btn btn-warning"
            onClick={() => this.renderWins()}
          >Do stuff</button>
        </h1>

        <div className="row">

          {this.state.gameTiles.map((item, index) => {

            return (<div
              key={index}
              className="col-3 border border-success"
              id={item.id}
              onClick={() => this.clickAction(item.id)}

            >
              {item.id}
            </div>
            )

          })}

        </div>
      </div>
    );
  }
}

export default App;
