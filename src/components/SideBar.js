import React, { Component } from 'react';
import './../css/App.css';
import dataJson from './../data/top.json'
//import UserScreen from './UserScreen'
//
//
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      author:'',
      posts: dataJson.data.children
    }
  }

  componentDidMount() {

    console.log("POSTS",dataJson.data.children[0].data)

  }

  handleClick(e,id){
     this.setState({author:e})
     console.log('Name Div',e,"Div #",id)

  }


  openNav(){
      document.getElementById('mySidenav').style.width = "330px";
      console.log("OpenMenu")
  }

  closeNav() {
      document.getElementById("mySidenav").style.width = "0";
  }


  render() {
    return(
      <div id="container">
        <span className="openBtn" onClick={this.openNav.bind(this)} >&#9776; open</span>
        <div id="mySidenav" className="sidenav">
          <h2>Recent Posts</h2>
          <a onClick={this.closeNav.bind(this)} className="closebtn">&times;</a>
            {this.state.posts.map((item,i) =>
                <div  key={i} id={"post"+i} className="Post" onClick={this.handleClick.bind(this,item.data.author)}>
                    <div id="Title">
                      <h2>{item.data.author}</h2>
                    </div>
                    <div id="Thumbnail">
                      <img src={item.data.thumbnail} />
                    </div>
                    <div id="content">
                      <p>{item.data.title}</p>
                    </div>
                    <div id="footer">
                      <button className="btnDismiss" onClick={this.handleClick.bind(this, item.id)}>Dismiss X</button>
                      <div id="comments">Comments: {item.data.score}</div>
                    </div>
                </div>
              )
            }
        </div>
        <div id="userDataDisplay">
        <p>DATA USER</p>
        <h1>{this.state.author}</h1>
      </div>
      </div>

    )

  }
}

export default SideBar;