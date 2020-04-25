import React from 'react'
import {connect} from "react-redux"
import {buyBook}  from "../redux"

 function bookContainer(props) {
    return (
        <div>
            <h1>Book Container Store -{props.numberofBook}</h1>
            <button onClick={props.buyBook}>Buy Book</button>
            
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        numberofBook :state.numberofBook
    }
}

const mapDispatchtoProps =(dispatch)=>{
    return{
        buyBook : function(){
            dispatch(buyBook())
        }
    }


}


export default  connect(mapStateToProps,mapDispatchtoProps)(bookContainer) 