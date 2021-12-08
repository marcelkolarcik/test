import React from "react";
import classes from './Welcome.module.css'

export default function Welcome(props) {
    return (
        <div id={'home'} className={classes.welcome_hero} >
            {props.children}
        </div>
    );
}