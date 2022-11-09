import React from 'react';

export default function Navbar(props) {

    function handleFormSubmit(event){
        event.preventDefault();
        let name = event.target.username.value;
        props.updateUserInfo(name);
        event.target.username.value = '';
    };

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Kekambas</a>
                <form className="row" onSubmit={handleFormSubmit}>
                    <div className="col">
                        <input type="submit" className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        </nav>
    )
}