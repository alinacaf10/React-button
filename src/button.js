import React,{Component} from "react";

class ExButton extends Component{
clickHandler(){
  console.log("Button Click")
}
render(){
  return(
    <>
    <button type="button" onClick={this.clickHandler}>
      Subscribe
      </button>
    </>
  )
}
}
export default ExButton