import React, { useState, useEffect } from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';

export default function StudentDisplay(props) {
    
    const [year, setYear] = useState(2022);
    const [cohort, setCohort] = useState(1);
    const [students, setStudent] = useState([]);

    function updateYearCohort(inputYear, inputCohort){
        console.log('Hello')
        setYear(inputYear);
        setCohort(inputCohort);
    }

     // Create an effect -> function to execute after every render
     useEffect(() => {
        console.log('useEffect effect callback has been called');
        fetch(`https://kekambas-bs.herokuapp.com/kekambas.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setStudent(data);
            });
    }, [year, cohort]);

    return (
        <div>
            <h1 className="text-center my-3">Student</h1>
            <StudentForm updateYearCohort={updateYearCohort} />
            <StudentTable students={students} />
        </div>
    )
}