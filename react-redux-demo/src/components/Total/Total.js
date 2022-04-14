import React, {Component} from 'react'
import { connect } from 'react-redux'


class Total extends Component{

    render(){
        const Total = this.props.count.reduce((acc, obj) => acc + obj.value, 0)
        return(
            <div>
                <h1>
                   Total : {Total}
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

export default connect(mapStateToProps)(Total)