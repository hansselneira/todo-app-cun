import React, { Component} from 'react';
import './Counter.css'
//class is better for the complexity
class Counter extends Component {

    constructor (){
        super();//has to be called first
        this.state ={
            counter : 0,
        }

        this.increment = this.increment.bind(this);
        //this.decrement = this.decrement.bind(this);
    }
    render = () => {
        return (
            <div className='Counter'>
                <button onClick={this.increment}>+{this.props.by}</button>
                {/* <button onClick={this.decrement}>-1</button> */}
                <span className="count">{this.state.counter}</span>
            </div>
        )
    }
    increment (){
        //console.log('increment');
        this.setState({
            counter : this.state.counter + this.props.by
        });
    }
    // decrement (){
    //     //console.log('increment');
    //     //this.state.counter++; Bad Practise
    //     this.setState({
    //         counter : this.state.counter - 1
    //     });
    // }
}
export default Counter;