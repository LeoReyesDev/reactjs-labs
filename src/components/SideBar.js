import React, { Component } from 'react';
//import logo from './logo.svg';
import './../css/App.css';
import putoJson from './../data/top.json'
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
      name:''
    }

    //this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    //fetch('https://github.com/deviget/Front-end/blob/master/top.json')
    fetch('https://randomuser.me/api/?results=50')
      .then((response) => {
        return response.json()
      })
      .then((posts) => {
        this.setState({ items: posts.results })

      })
      .catch(function(err){
        console.log('ERROR', err)
      })
    //console.log("POSTS",putoJson.data.children)
  }

  handleClick(id,e){
     console.log('this is:',id.name)
     this.setState({name:id.name})
  }


  openNav(){
      document.getElementById('mySidenav').style.width = "318px";
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
            {this.state.items.map((item,i) =>
                // <li className='list-group-item' key={i} data-id={i}>{item.name.first}
                //     <button onClick={this.handleClick.bind(this, item.id)}>{"Button "+i} X</button>
                // </li>
                <div  key={i} id={"post"+i} className="Post" onClick={this.handleClick.bind(this, item.id)}>
                    <div id="Title">
                      <h2>{item.name.last} {item.name.first}</h2>
                    </div>
                    <div id="Thumbnail">
                      <img src={item.picture.large} />
                    </div>
                    <div id="content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis turpis erat, </p>
                    </div>
                    <div id="footer">
                      <button className="btnDismiss" onClick={this.handleClick.bind(this, item.id)}>{i + "X"}</button>
                      <div id="comments">{item.email}</div>
                    </div>
                </div>
              )
            }
        </div>
        <div id="userDataDisplay">
        <p>DATA USER</p>
        <h1>{this.state.name}</h1>
      </div>
      </div>

    )

  }
}

export default SideBar;