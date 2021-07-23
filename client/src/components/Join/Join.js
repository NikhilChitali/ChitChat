import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';
 
const Join = () => {

    const [name, setName] = useState('');
    const ROOM = 'support';


    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)}/>
                </div>
                <Link onClick={(event) => !name ? event.preventDefault() : null} to={`/chat?name=${name}&room=${ROOM}`}>
                    <button className={'button mt-20'} type="submit">Sign In</button>
                </Link>
            </div>

        </div>
    );
}

export default Join;