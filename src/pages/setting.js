import React from "react";
import {connect} from "react-redux";
class Setting extends React.Component{
render(){
  return(
    
    <ul class="collection">
      <li class="collection-item">Name:{this.props.userinfo.name}</li>
      <li class="collection-item">email:{this.props.userinfo.email}</li>
  

    </ul>
  )
}
}
function mapToProps(state,action){
  
return {userinfo:state.userinfo};
}
Setting=connect(mapToProps)(Setting);
export default Setting;