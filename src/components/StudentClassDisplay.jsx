import React, { Component } from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';

export default class StudentClassDisplay extends Component {
    constructor(props){
        console.log('Component Constructed')
        super(props); // Always call super(props) on the constructor
        this.state = {
            Year: "2022",
            Cohort: "September",
            students: []
        };
    }

    componentDidMount(){
        console.log('Component Mounted');
        fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                this.setState({
                    students: data
                });
            })
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Component Did Update');
        console.log(prevState, this.state);
        if (prevState.cohort !== this.state.cohort || prevState.year !== this.state.year){
            if (!this.state.year || !this.state.cohort){
                this.setState({
                    students: []
                })
            } else {
                fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    
                    this.setState({
                        students: data
                    });
                })
            }
        }
    }

    updateYearCohort = (inputYear, inputCohort) => {
        this.setState({
            year: inputYear,
            cohort: inputCohort
        })
    }

    render() {
        console.log('Component Rendered');
        return (
            <div>
                <h1 className="text-center my-3">Student's Info</h1>
                <StudentForm updateYearCohort={this.updateYearCohort} />
                <StudentTable students={this.state.students} />
            </div>
        )
    }
}