import React, { Component } from 'react';
import './../css/App.css';
import dataJson from './../data/top.json'
//import UserScreen from './UserScreen'


class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      author:'',
      erasePost:'',
      posts: dataJson.data.children,
      firstPost: dataJson.data.children[0],
      singlePost:{
        id:'',
        title:'',
        authorPost:'',
        thumbnail:''
      }
    }
  }

  componentDidMount() {
    //load Last
    this.loadFirstPost()
    this.closeNav()
  }

  /* [Load first Post in div ========================================== ♛ */

  loadFirstPost(){

    let title = this.state.firstPost.data.title
    let author = this.state.firstPost.data.author
    let thumbnail = this.state.firstPost.data.thumbnail

    this.setState({
       singlePost: {
         id:'',
         title:title,
         authorPost:author,
         thumbnail:thumbnail
       }
     })

  }

  /* [Click for load post inother div ================================== ♛ */

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

  /* [Delete Posts in SideBar ========================================= ♛ */

  dismissClick(id,e){
    console.log("ID: ",e.target.value,"ERASE: ", this.state.erasePost)
    let myDiv = "post" + e.target.value
    document.getElementById(myDiv).style.display="none"
    this.clearPost()
  }

  /* [Delete Posts in SideBar ========================================= ♛ */

  clearPost(){
    console.log('clear')
    this.setState({
       singlePost: {
         id:'',
         title:'',
         authorPost:'',
         thumbnail:''
       }
     })
  }


  /* [OPEN SIDE BAR  ================================================== ♛ */

  openNav(){
      document.getElementById('mySidenav').style.width = "330px";
      console.log("OpenMenu")
      document.getElementById("barTitle").style.display = "block";
  }

  closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("barTitle").style.display = "none";
  }
  /* [OPEN SIDE BAR  ================================================== ♛ */

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
          <div id="barTitle">
          <h2>Recent Posts</h2>
          <a onClick={this.closeNav.bind(this)} className="closebtn">&times;</a>
          </div>
            <div id="allContent">
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
                        <button className="btnDismiss" value={i} onClick={this.dismissClick.bind(this, item.value)}>Dismiss X</button>
                        <div id="comments">Comments: {item.data.score}</div>
                      </div>
                  </div>
                )
              }
            </div>
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