import React from "react";
import classes from "./About.module.css";

export default function Hero() {
    return (
        <div id={'home'} className={'home text-light d-flex justify-content-end align-items-center pe-5 w-100'}>
            <div>
                <p className={'text-end mt-5'}>
                   HI THERE,

                </p>
                <h1 className={'display-5 text-end fw-bold'}>
                    I’m Marcel <br/>
                    Reactjs/Full Stack <br/> Developer, <br/>
                    based Ireland<span className={classes.blue}>.</span>
                </h1>
            </div>
        </div>
            );
            }