import React from "react";
import {bindActionCreators,connect } from "react-redux";
class Add extends React.Component{
  constructor(){
    super();
this.hand=this.hand.bind(this);
  }
  hand(e){
   
 e.preventDefault()
 this.props.addPost({tit:11});
  }
render(){
  return(
  <div class="row">
    <form class="col s12">
      <div class="row">
       
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"/>
          <label for="last_name">Last Name</label>
        </div>
         <div class="row">
       
         <div class="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
          <label for="first_name">First Name</label>
          </div>
        </div>
      </div>
     
     
<button class="waves-effect waves-light btn" onClick={this.hand} >Add post</button>
     
     
    </form>
  </div>
  )
}
}
function mapToProps(posts,action){
  
return {posts:posts.posts}
}
function mapToProps2(dis,action){
  
return {addPost:(props)=>{

dis(

(dis,state)=>{
  return(
dis( {type:"ADD_POST"},props)
)

  }
)
}

};
}
Add=connect(mapToProps,mapToProps2)(Add);
export default Add;