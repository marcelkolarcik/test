import React from "react";
import classes from './About.module.css'
import {portfolio_details} from "../../data_info/portfolio";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
    return (

        <div id={'portfolio'} className={classes.about_bgr_dark + ' py-5 '}>
            <h1 className={'text-light fw-bold text-center display-1 portfolio ' + classes.heading}>
                Portfolio<span className={classes.blue}>.</span>
            </h1>
            <p className={'lead text-center ' + classes.text_color}>
                Latest projects.
            </p>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3">
                    {portfolio_details.map((item, idx) => (
                        <PortfolioItem key={idx} item={item}/>
                    ))}

                </div>
            </div>


        </div>

    );

}