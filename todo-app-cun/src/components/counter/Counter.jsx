import React, { Component} from 'react';
import './Counter.css'
import PropTypes from 'prop-types'


class Counter extends Component {

    constructor (){
        super();
        this.state ={
            counter : 0,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
          <div className="counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
            <span className="count">{this.state.counter}</span> 
            <div><button className='reset' onClick={this.reset}>RESET</button></div>
          </div>
        );
      }
      increment (by){
         this.setState(
            (PrevState) => {
            return{counter : PrevState.counter + by} 
            }
         );
        }
      decrement (by){
         this.setState(
          (PrevState) => {
           return{counter : PrevState.counter - by} 
            }
        );
     }

       reset (){
         this.setState(
          (PrevState) => {
            return{counter : 0} 
            }
         );
        }
}
class CounterButton extends Component {

    constructor (){
        super();
        // this.state ={
        //     counter : 0,
        // }
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }
    render = () => {
        return (
            <div className='counter'>
                <button onClick={() =>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() =>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        )
    }
    // increment (){
        
    //     this.setState(
    //     (PrevState) => {
    //         return {counter : PrevState.counter + this.props.by}
    //     }
        
    //     );
    //     this.props.incrementMethod(this.props.by)
    // }

    
    // decrement (){

    //     this.setState(
    //     (PrevState) =>{
    //         return {counter : PrevState.counter - this.props.by}
    //     }
    //     );
    //     this.props.decrementMethod(this.props.by)

    // }
}
// class ResetButton extends Component {
//     constructor (){ 
//         super();
//         this.state ={
//             counter : 0,
//         }
//         this.reset = this.reset.bind(this);
//     }
//     render = () => {
//         return (
//             <div className='counter'>
//                 <button onClick={this.reset}>RESET</button>
//             </div>
//         )
//     }
//     reset (){
        
//         this.setState(
//         (PrevState) => {
//             return {counter : PrevState.counter * 0}
//         }
        
//         );
//         this.props.resetMethod(0)
//     }
// }
CounterButton.defaultProps = {
    by : 1,
}
CounterButton.propTypes = {
   by : PropTypes.number
}
// ResetButton.defaultProps = {
//     by : 0,
// }
// ResetButton.propTypes = {
//     by : PropTypes.number
//  }
export default Counter;