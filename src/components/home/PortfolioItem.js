import classes from "./About.module.css";
import React from "react";

export default function PortfolioItem(props) {
    const item = props.item
    return (

        <div className="col">
            <div className="card border-0">
                <img src={item.image} className="card-img" alt="..."/>

                <div className="card-img-overlay p-0 m-0 ">
                    <a rel="noreferrer" target={'_blank'} href={item.url} className={'text-decoration-none'}>
                        <div
                            className={classes.card_content +
                            ' p-2  d-flex justify-content-center align-items-center'}>
                            <div>
                                <h3 className="fw-bold text-center text-light">{item.title}</h3>
                                <p className="card-text text-light small">{item.description}</p>
                                <p className="small text-light">
                                    <strong>Technologies: </strong> {item.technologies}
                                </p>
                                <p className={'small text-light ' + classes.features}>
                                    <strong>Features: </strong> {item.features.map((feature, idx) => (
                                    <span key={idx}><span>{feature}</span> <br/></span>
                                ))}
                                </p>

                            </div>


                        </div>
                    </a>


                </div>
            </div>
        </div>
    );
}