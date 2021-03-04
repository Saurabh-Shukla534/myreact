import React from 'react';
import ReactDOM from 'react-dom';
import styles from './mystyle.module.css';

class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      username:"",
      familyname:"",
      age: null,
      errmsg:"",
      description:"",
      country:"India"};
  }
  mySubmit=(event)=>{
    event.preventDefault();
    alert("You are Submitting "+ this.state.username + " " + this.state.familyname);
  }
  myChange=(event)=> {
    let un=event.target.name;
    let fn=event.target.value;
    let ag=event.target.value;
    let des=event.target.value;
    let coun=event.target.value;
    let err="";
    if(un==="age") {
      if(ag!="" && !Number(ag)){
        err=<strong>Age must be a number.</strong>;
      }
    }
    this.setState({[un]: fn,ag,des,coun});
    this.setState({errmsg: err});
  }
  render() {
    let header = '';
    if (this.state.username) {
      header = <h1 className={styles.hello}>Hello {this.state.username} {this.state.familyname} {this.state.age}!</h1>;
    } else {
      header = '';
    }
    return(
      <form onSubmit={this.mySubmit}>
        <div className={styles.rest}>
          {header}
          <h4>Enter your name:</h4>
          <input type="text" name="username" onChange={this.myChange}/>
          <h4>Enter your family name:</h4>
          <input type="text" name="familyname" onChange={this.myChange}/>
          <h4>Enter your age, and submit:</h4>
          <input type="text" name="age" onChange={this.myChange}/>
          {this.state.errmsg}
          <h4>About yourself:</h4>
          <textarea onChange={this.myChange}/>
          <h4>Country:</h4>
          <select onChange={this.myChange}>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
          </select>
          <br/><br/>
          <input type="submit" />
        </div>
      </form>
    );
  }
}

ReactDOM.render(<MyForm />,document.getElementById('root'));
