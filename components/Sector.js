import React, { useState } from "react";

import Modal from './Modal';
import styles from '../styles/Card.module.css';
import 'material-icons/iconfont/material-icons.css';

const Sector = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.contentBlock} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <span className={['material-icons-outlined', styles.icon].join(" ")}>
                {props.icon}
            </span>
            <h3>{props.name}</h3>
            <Modal open={isOpen} type={props.name}/>
        </div>
    );
};

export default Sector;