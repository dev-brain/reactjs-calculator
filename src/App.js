import React, { Component } from 'react';
import './App.css';
import Keypad from './components/Keypad';
import ResultComponents from './components/ResultComponents'
// import { render } from '@testing-library/react';

class App extends Component{
  constructor(){
    super();

    this.state={
      result:""
    }
  }

  onClick = button =>{
    if(button==='='){
      this.calculate()
    }
    else if(button==='C'){
      this.reset()
    }
    else if (button==='del'){
      this.backspace();
    }
    else{
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate= () =>{
    var myresult=''
    if(this.state.result.includes('--')){
      myresult=this.state.result.replace('--','+')
    }
    else {
      myresult= this.state.result
    }
    try{
      this.setState({
        result:(eval(myresult)|| "") + ""
      })
    }catch(e){
      this.setState({
        result:"error"
      })
    }
  };

  reset = () =>{
    this.setState({
      result: ""
    })
  }

  backspace = () =>{
    this.setState({
      result: this.state.result.slice(0,-1)
    })
  };


  render() {
    return (
      <div>
        <div className='calci'>
          <h1>CALCULATOR</h1>
          <ResultComponents result={this.state.result}/>
          <Keypad onClick={this.onClick}/>

        </div>
      </div>
    )
  }

}

export default App;
