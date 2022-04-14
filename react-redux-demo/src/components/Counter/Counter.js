import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../../actions';

class Counter extends Component {

    renderCounter() {
        return this.props.count.map((count,i) => {
            
            return (
                <div key={i}>
                <h1> {count.value} </h1>
                <h2> {count.name} </h2>
                {/* <h2>{this.props.devideResult}</h2> */}
                <div>
                    <button onClick={() => this.props.incrementCount(i)}>
                        +
                    </button>
         
                    <button onClick={() => this.props.decrementCount(i)}>
                        -
                    </button>
                </div>
            </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderCounter()}
               {/* <p>
                    <button onClick={() => this.props.multiplyCount()}>
                        *
                    </button>
                    <button onClick={() => this.props.devideCount()}>
                        /2
                    </button>
                </p> */}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        count : state.count,
        //devideResult : state.devideResult
    }
}

const mapDispatchToProps = () => {
    return{
        incrementCount,
        decrementCount,
        //multiplyCount,
        //devideCount
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(Counter)


