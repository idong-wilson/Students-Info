import { useState } from 'react';
import ButtonDisplay from './components/ButtonDisplay';
import Navbar from "./components/Navbar";
import StudentClassDisplay from './components/StudentClassDisplay';
//import StudentDisplay from './components/StudentDisplay';


function App() {
    const [myName, setMyName] = useState('');

    function updateUserInfo(userName){
        setMyName(userName);
    };

    return (
        <>
            <Navbar name={myName} updateUserInfo={updateUserInfo}/>
                <div className="container">
                    <ButtonDisplay />
                    {/* <StudentDisplay /> */}
                    <StudentClassDisplay />
                </div>
        </>
    )
}

export default App;