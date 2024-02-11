import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const Filter = ()=>{
    const [state, setState] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    function changeState(e){
        console.log(e.target.value)

        var event = new Date(startDate);
        let date = JSON.stringify(event).slice(1,11);
        console.log("Start Date", date)
    }


    useEffect(()=>{
        axios.get("http://localhost:4004/getstate").then((data)=>{
            console.log("data", data.data.result);
            setState(data.data.result);
         }).catch((err)=>{
            console.log("err", err);
         })
    },[])



    return <>
            <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                <form className="d-none d-md-flex ms-4">
                </form>
                <div className="navbar-nav align-items-center ms-auto">
                <div className="row g-4">
                    <div className="col-sm-6 col-xl-3">

                   <div className="ms-3">
                                <p className="mb-2">Select State</p>
                                <select className="mb-0" name="state" onChange={changeState}>
                                    {
                                        state.map((item,index)=>{
                                            return <><option key={index} value={item}>{item}</option></>
                                        })
                                    }
                                </select>
                    </div>
                    </div>
                    <div className="col-sm-6 col-xl-3 ">

                    <div className="ms-3 px-4">
                        <p className="mb-2">Start Date:</p>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    </div>
                    <div className="col-sm-6 col-xl-3 px-4">
                    <div className="ms-3 px-4" >
                        <p className="mb-2">End Date:</p>
                        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div>
                   </div>
                   </div>
                </div>
            </nav>
    </>
}

export default Filter;