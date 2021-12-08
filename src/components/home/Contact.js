import React from "react";
import classes from "./About.module.css";
import img from "../../images/contact.png";

export default function Contact() {
    return (

        <div id={'contact'} className={' row g-0 ' + classes.about_bgr_light}>
            <div className="col-md-7">
                <h1 className={'display-1 text-center text-light mt-5 fw-bold contact ' + classes.heading}>
                    Hire me<span className={classes.blue}>.</span></h1>
                 <p className={'lead text-center ' + classes.text_color}>
               If you would like to hire me, I am currently looking for a new opportunity to
                     build something amazing<span className={classes.blue}>.</span>
            </p>
                <div className={'text-center'}>
                    <a rel="noreferrer" target={'_blank'} className={'btn btn-sm btn-dark'}
                       href="https://www.linkedin.com/in/marcel-kolarcik/">LinkedIn</a>
                    <a className={'btn btn-sm btn-dark'} href="mailto:marcelkolarcik@gmail.com">Mail</a>
                </div>
            </div>
            <div className="col-md-5 p-5">
                <img className={'rounded-3 img-fluid'} src={img} alt={''}/>
            </div>

        </div>

    );

}