import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Student extends Component {
    getStyle = () => {
        return {
            backgroundColor: this.props.student.present ? '#49B66E' : '#fff',
            color: this.props.student.present ? '#fff' : '#3b3b3b'
        }
    }

    render() {
        const { id, name } = this.props.student;

        return (
            <div style={this.getStyle()} className="contain">
                <table>
                    <tr>
                        <td>{id}</td>
                        <td className="nameCol">{name}</td>
                        <td className="switchCol">
                            {this.props.student.present ? 'Present ' : 'Absent '}
                            <label class="switch">
                                <input type="checkbox" onChange={this.props.studentPresent.bind(this, id)} defaultChecked={this.props.student.present} />
                                <span class="slider round"></span>
                            </label>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

// Prop types
Student.propTypes = {
    student: PropTypes.object.isRequired
}

export default Student
