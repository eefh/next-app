import React from 'react';

import 'material-icons/iconfont/material-icons.css';
import styles from '../styles/Header.module.css';

const Header = (props) => {
    return (
        <div className={styles.header}>
                <a className={styles.link}href="/">
                <h1 className={styles.title}>zerl<span className={['material-icons-outlined', styles.globe].join(" ")}>public</span>g</h1>
                </a>
        </div>
       
    );
}

export default Header;