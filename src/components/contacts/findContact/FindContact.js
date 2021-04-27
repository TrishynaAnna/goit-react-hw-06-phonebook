import React from "react";
import style from "./FindContact.module.css";

const FindContact = ({ getFilterValue }) => {
    return (
        <div className={style.filter}>
            <label className={style.label} htmlFor="findContact">Введіть ім'я для пошуку</label>
            <input className={style.input} id="findContact" type="text" onChange={getFilterValue} />
        </div>
    );
};

export default FindContact;
