import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ClassList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      students: []
    };
  }
  componentDidMount() {
    const course = `http://localhost:3005/students?class=${
      this.props.match.params.class
    }`;
    axios.get(course).then(res => {
      console.log(res);
      return this.setState({ students: res.data });
    });
  }
  render() {
    const { students } = this.state;
    const course = this.props.match.params.class;

    const viewStudents = students.map((student, i) => {
      return (
        <Link to={`/student/${student.id}`} key={i}>
          <h3>
            {student.first_name} {student.last_name}
          </h3>
        </Link>
      );
    });

    return (
      <div className="box">
        <h1>{course}</h1>
        <h2>ClassList:</h2>
        {viewStudents}
        <button>
          <Link to="/">Back to Home Page</Link>
        </button>
      </div>
    );
  }
}
