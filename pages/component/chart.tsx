import React from "react";
import BarChart from "./barchart"

const Chart = ()=>{
    return <>
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0">Worldwide Sales</h6>
                                <a href="">Show All</a>
                            </div>
                            <BarChart />
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0">Salse & Revenue</h6>
                                <a href="">Show All</a>
                            </div>
                            <BarChart />
                        </div>
                    </div>
                </div>
            </div>
    </>
}

export default Chart;