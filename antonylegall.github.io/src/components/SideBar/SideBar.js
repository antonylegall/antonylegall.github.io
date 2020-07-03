import React from 'react';
import {Divider} from '@material-ui/core';
import styles from './SideBar.module.css';

const SideBar = (props) => (
    <div className={props.open ? styles.SideBar.Open : styles.SideBar}>
        <h2 className={styles.Heading}>Menu</h2>
        <p className={styles.LinkText}>Home</p>
        <Divider variant="middle"/>
        <p className={styles.LinkText}>Projects</p>
        <Divider variant="middle"/>
        <p className={styles.LinkText}>Blog</p>
        <Divider variant="middle"/>
        <h2 className={styles.Heading}>Contact</h2>
    </div>
);

export default SideBar;