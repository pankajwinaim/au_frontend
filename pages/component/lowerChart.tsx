import React from "react";
import PieChart from "./pie";
const LowerChart = ()=>{

    return <>
            <div className="container-fluid pt-3 px-3">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-4">
                        <div className="bg-light text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0">Sales by category</h6>
                            </div>
                            <PieChart/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-4">
                        <div className="bg-light text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0">Sales by sub category</h6>
                            </div>
                            <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-dark">
                                    <th scope="col">Sub Category</th>
                                    <th scope="col">Sales in $</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01 Jan 2045</td>
                                    <td>$123</td>
                                </tr>
                                <tr>
                                    <td>01 Jan 2045</td>
                                    <td>$123</td>
                                </tr>
                                <tr>
                                    <td>01 Jan 2045</td>
                                    <td>$123</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-4">
                        <div className="bg-light text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0">Sales by segment</h6>
                                <a href="">Show All</a>
                            </div>
                            <PieChart/>
                        </div>
                    </div>
                </div>
            </div>
    </>
}

export default LowerChart;