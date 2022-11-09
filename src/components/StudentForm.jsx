import React from 'react'

export default function StudentForm(props) {

    function handleFormSubmit(e){
        e.preventDefault();
        console.log(e);
        let year = e.target.year.value;
        let cohort = e.target.cohort.value;
        props.updateSeasonRound(year, cohort);
    }

    return (
        <form className='row my-3' onSubmit={handleFormSubmit}>
            <div className="col-12 col-sm-5">
                <input type="text" name="year" placeholder="Enter Year" className="form-control" />
            </div>
            <div className="col-12 col-sm-5">
                <input type="text" name="cohort" placeholder="Enter Cohort" className="form-control" />
            </div>
            <div className="col">
                <input type="submit" value="Search" className="btn btn-success w-100" />
            </div>
        </form>
    )
}