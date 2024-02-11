import React from "react";
import '../css/bootstrap.min.css';
import '../css/style.css';
import SidebarComponent from "./component/sidebar";
const MyApp = (props)=>{
    const { Component, pageProps } = props
    return (
        <React.Fragment>
            <SidebarComponent/>
           <Component {...pageProps} />
        </React.Fragment>
      )
    }


export default MyApp;