import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import ClassList from "../ClassList/ClassList";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentInfo: {}
    };
  }
  componentDidMount() {
    const studentById = `http://localhost:3005/students/${
      this.props.match.params.id
    }`;

    axios.get(studentById).then(res => {
      console.log(res);
      return this.setState({ studentInfo: res.data });
    });
  }

  render() {
    const { studentInfo } = this.state;

    return (
      <div className="box">
        <h1>Student: </h1>
        <h1>
          {studentInfo.first_name} {studentInfo.last_name}
        </h1>
        <h3>Email: {studentInfo.email}</h3>
        <h3>Grade: {studentInfo.grade}</h3>
        <button>
          <Link to={`/classlist/${studentInfo.class}`}>Back to Class List</Link>
        </button>
      </div>
    );
  }
}
