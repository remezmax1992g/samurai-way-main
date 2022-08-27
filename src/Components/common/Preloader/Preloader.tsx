import React from 'react';
import preloader from "../../../assets/images/preloader.svg";
import style from "./Preloader.module.css"

const Preloader = () => {
    return (
        <span className={style.preloader}>
            <img src={preloader}/>
        </span>
    );
};

export default Preloader;