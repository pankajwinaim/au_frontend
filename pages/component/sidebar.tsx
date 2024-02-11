import React from "react";

const SidebarComponent = ()=>{

    return <>
           <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-light navbar-light">
                <a href="index.html" className="navbar-brand mx-4 mb-3">
                    <h6 className="text-primary"><i className="fa fa-hashtag me-2"></i>Sales Dashboard</h6>
                </a>
                <div className="navbar-nav w-100">
                    <a href="index.html" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Sales Overview</a>

                    <a href="widget.html" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Store</a>
                    <a href="form.html" className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Notification</a>
                    <a href="table.html" className="nav-item nav-link"><i className="fa fa-table me-2"></i>Setting</a>
                    <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Theme</a>
                    </div>
            </nav>
        </div>
    </>

}

export default SidebarComponent;