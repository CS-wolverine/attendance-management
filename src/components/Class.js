import React, { Component } from 'react';
import Student from './Student';
import PropTypes from 'prop-types';

class Class extends Component {
    render() {
        return this.props.students.map((student) => (
            <Student key={student.id} student={student} studentPresent={this.props.studentPresent} />
        ));
    }
}
    
// Prop types
Class.propTypes = {
    students: PropTypes.array.isRequired
}

export default Class;