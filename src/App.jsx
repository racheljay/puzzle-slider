import React from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.win = Array(16).fill().map((item, index) => index)

    // this.blank = gameTiles[0]
    this.state = {
      gameTiles: [],
      blank: 0
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

    console.log(this.state.gameTiles, this.state.blank)

  }

  updateTileStatus() {
    console.log('working');
    console.log(this.state.gameTiles)
    let blank = this.state.blank
    // this.state.gameTiles.findIndex((element) => element.id === 0)


    let newArr = this.state.gameTiles.map((item, index) => {

      if (item.id === 0) {
        item.status = false

      }
      else if (index === blank + 1 || index === blank - 1 || index === blank + 4 || index === blank - 4) {
        item.status = true
      }
      else {
        item.status = false
      }
      return item
    })
    //check if new array is different from game tiles

    this.setState({
      gameTiles: newArr
    })
  }


  componentDidMount() {
    this.renderWins()



  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.blank !== prevState.blank) {
      this.updateTileStatus()
   }
  }

  // clickable(num) {
  //   console.log(num.status)
  // }
  initBoard(){
      console.log("i wrk")
      let arr = this.state.gameTiles.map((item, index) => {
        if(item.id === 1 || item.id === 4) {
          item.status = true
        }
       
       return item
      })

      console.log(arr)
      this.setState({
      gameTiles: arr
      })

  }

  clickAction(item, index) {
    if (item.status === true) {
      
      let arr = this.state.gameTiles;
      let blank = this.state.blank;
    
      [arr[index], arr[blank]] = [arr[blank], arr[index]];
    
      this.setState({ gameTiles: arr, blank: index })
      console.log("in if statement setting state", blank, index)
    } console.log(item)
    
    
    // this.state.gameTiles.map((item, index) => {

    // let arr = this.state.gameTiles
    // let target = num
    // let blank = this.state.blank
    // [arr[blank], arr[target]] = [arr[target], arr[blank]]

    // arr.num = arr.blank


    // console.log(arr)

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
            onClick={() => this.initBoard()}
          >Init Board</button>
        </h1>

        <div className="row">

          {this.state.gameTiles.map((item, index) => {

            return (<div
              key={index}
              className="col-3 border border-success"
              id={item.id}
              onClick={() => this.clickAction(item, index)}

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
