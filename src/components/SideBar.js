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
      posts: dataJson.data.children,
      singlePost:{
        id:'',
        title:'',
        author:'',
        url:'',
        score:'',
        link:'',
      }
    }
  }

  componentDidMount() {

    console.log("POSTS",dataJson.data.children[0].data.title)

  }

  handleClick(e,t,a,u,s,l){
     this.setState({
        singlePost: {
          id:e,
          title:e,t,
          author:a,
          url:u,
          score:s,
          link:l        }
      })
     console.log(" [----- POST -----] ", this.state.singlePost)
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

                <div  key={i} id={"post"+i} className="Post"
                      onClick={
                        this.handleClick.bind(
                          this,
                          item.data.title,
                          item.data.name,
                          item.data.url,
                          item.data.score,
                          item.data.link
                          )
                      }>

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
        <h1>Title: {this.state.singlePost.title}</h1>
        <h2>Author: {this.state.singlePost.name}</h2>
        <h3>Url: {this.state.singlePost.url}</h3>
        <h4>Score: {this.state.singlePost.score}</h4>
       {/* <h5>Link: {this.state.singlePost.link}</h5>*/}




      </div>
      </div>

    )

  }
}

export default SideBar;