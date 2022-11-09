import React from 'react'

export default function studentTable(props) {
console.log(props)
    let tableHeaders = ['Student ID', 'First Name', 'Last Name']
    return (
        <table className='table table-primary table-striped my-3'>
            <thead>
                <tr>
                    {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.students.map(student => {return (
                    <tr key={student.id}>
                        <th>{student.id}</th>
                        <td>{student.first_name}</td>
                        <td>{student.last_name}</td>
                    </tr>
                )})}
            </tbody>
        </table>
    )
}