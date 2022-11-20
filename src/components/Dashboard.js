import React from 'react';
import {Link} from 'react-router-dom';

function About(props) {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center m-5">
                <div>
                    <h1 className='h1'>Welcome the DashBoard page.</h1>
                    <div className="d-flex justify-content-center m-5">
                        <Link to="/">Back</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;