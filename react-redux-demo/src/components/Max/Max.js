import React, { Component } from 'react'
import { connect } from 'react-redux'


class Max extends Component {

    
    render(){
        const values = this.props.count.map((count) => count.value)
        return(
            <div>
                <h1>
                    Max : {Math.max(...values)}
                </h1>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        count:state.count
    }
}

export default connect(mapStateToProps)(Max)