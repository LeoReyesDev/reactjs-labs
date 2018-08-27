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
        authorPost:'',
        thumbnail:''
      }
    }
  }

  componentDidMount() {

    console.log("POSTS",dataJson.data.children)

  }

  handleClick(e,t,a,divId){
     this.setState({
        singlePost: {
          id:divId,
          title:e,
          authorPost:t,
          thumbnail:a
        }
      })
     console.log(" [----- POST -----] ", this.state.singlePost)
  }

  dismissClick(e,id){
    console.log("name div:",e.target,"ID: ",id)
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
        <div id="openCont">
          <ul>
            <li><span onClick={this.openNav.bind(this)} >&#9776;</span></li>
            <li><span onClick={this.openNav.bind(this)} >Open</span></li>
          </ul>
        </div>
        <div id="mySidenav" className="sidenav">
          <h2>Recent Posts</h2>
          <a onClick={this.closeNav.bind(this)} className="closebtn">&times;</a>
            {this.state.posts.map((item,i) =>
                <div  key={i} id={"post"+i} className="Post"
                      onClick={
                        this.handleClick.bind(
                          this,
                          item.data.title,
                          item.data.author,
                          item.data.thumbnail
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
                      <button className="btnDismiss" onClick={this.dismissClick.bind(this, item.id)}>Dismiss X</button>
                      <div id="comments">Comments: {item.data.score}</div>
                    </div>
                </div>
              )
            }
        </div>
        <div id="userDataDisplay">
        <div id="Thumbnail">
            <img src= {this.state.singlePost.thumbnail} />
            <div id="authorName">
               <h3>{this.state.singlePost.authorPost}</h3>
            </div>
        </div>
        <div id="TitleWindow">
          <h2>{this.state.singlePost.title}</h2>
        </div>




      </div>
      </div>

    )

  }
}

export default SideBar;