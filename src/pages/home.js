import React from "react";
import {connect} from "react-redux";
class Home extends React.Component{
render(){
  let items=this.props.posts;
  return(
    
    <ul class="collection">
    {items&&items.map(()=>{
      return(  <li class="collection-item">
  <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div></li>)
    })}
    
      

    </ul>
  )
}
}
function mapToProps(state,action){
  
return {posts:state.posts};
}
Home=connect(mapToProps)(Home);
export default Home;