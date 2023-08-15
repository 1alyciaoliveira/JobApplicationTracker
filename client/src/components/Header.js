import React from 'react';
import UserProfile from './UserProfile';
function Header(props) {

    return (
        <div className="container-fluid bg-dheader text-white">
            <div className="row py-3">
                <div className="col-12 text-center">
                    <h1 className="mb-4">JobJourney</h1>
                </div>
            </div>
            
            <div className="row pb-3">
                <div className="col-4">
                    <button className="btn btn-secondary me-2">Dashboard</button>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <UserProfile />
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <button className="btn btn-secondary">Logout</button>
                </div>
            </div>
        </div>
    );
};
export default Header;