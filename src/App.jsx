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
  }

  renderWins() {
    let arr = []
    for(let i = 0; i < 16; i++) {
      arr.push({id: i, status: false})

    }
    // for (let i = 0; i < 16; i++) {
    //   this.win.push(i)
    // }
    // let obj = {
    //   name: item,
    //   status: false
    // }
    // this.win.map((item, index) => {
    //   let obj = {
    //     name: item,
    //     status: false
    //   }
      

    // })
    this.setState({
      gameTiles: arr
    })
    console.log(this.state.gameTiles)

  }


  componentDidMount() {
    this.renderWins()

  }


  clickAction(num) {
    // let blank = this.state.gameTiles.indexOf(num)
    // if(blank === 0) {
    //   this.clickAction((blank + 1), (blank + 4))


    console.log(num)
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

          {/* {this.state.gameTiles.map((item, index) => {

            return (<div
              key={index}
              className="col-3 border border-success"
              id={item}
              onClick={() => this.clickAction(item)}
              
            >
              {item}
              </div>
              )

          })} */}

        </div>
      </div>
    );
  }
}

export default App;
