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
    }

    render() {
        return (
          <div className="counter">
            <CounterButton by={1} incrementMethod={this.increment}/>
            <CounterButton by={5} incrementMethod={this.increment}/>
            <CounterButton by={10} incrementMethod={this.increment}/>
            <span className="count">{this.state.counter}</span>
          </div>
        );
      }
      increment (by){
          console.log("increment from parent")
         this.setState({
             counter : this.state.counter + by
         });
    }
}
class CounterButton extends Component {

    constructor (){
        super();
        this.state ={
            counter : 0,
        }
        this.increment = this.increment.bind(this);
    }
    render = () => {
        return (
            <div className='counter'>
                <button onClick={this.increment}>+{this.props.by}</button>
            </div>
        )
    }
    increment (){
        console.log("increment from children")
        this.setState({
            counter : this.state.counter + this.props.by
        });
        this.props.incrementMethod(this.props.by)
    }

    
    // decrement (){
    //     //console.log('increment');
    //     //this.state.counter++; Bad Practise
    //     this.setState({
    //         counter : this.state.counter - 1
    //     });
    // }
}
CounterButton.defaultProps = {
    by : 1,
}
CounterButton.propTypes = {
   by : PropTypes.number
}
export default Counter;