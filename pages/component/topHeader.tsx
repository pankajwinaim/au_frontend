import React from "react";
const TopHeader = ()=>{
    return <>
            <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                <form className="d-none d-md-flex ms-4">
                    <input className="form-control border-0" type="search" placeholder="Search"/>
                </form>
                <div className="navbar-nav align-items-center ms-auto">

                    <div className="nav-item dropdown">

                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link" data-bs-toggle="dropdown">
                            <img className="rounded-circle" src="https://res.cloudinary.com/demo/image/upload/d_avatar.png/non_existing_id.png" alt="" style={{width:"40px", height:"40px"}}/>
                            <span className="d-none d-lg-inline-flex">Pankaj</span>
                        </a>
                    </div>
                </div>
            </nav>
    </>
}

export default TopHeader;