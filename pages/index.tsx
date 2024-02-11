// import node module libraries
import React,{ Fragment } from "react";
import TopHeader from "./component/topHeader";
import Filter from "./component/filter";
import Cards from "./component/cards";
import Chart from "./component/chart";
import LowerChart from "./component/lowerChart";

const Home = () => {
    return (
        <div className="container-xxl position-relative bg-white d-flex p-0">
                <div className="content">
                    <TopHeader/>
                    <Filter/>
                    <Cards/>
                    <Chart/>
                    <LowerChart/>
                </div>
        </div>
    )
}
export default Home;
