import React from 'react';

import styles from './Layout.module.css'
import SideBar from '../SideBar/SideBar';
import Hoc from '../../hoc/Hoc';

import { Toolbar, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import MediumIcon from '../../assets/mediumIcon.png';

const Layout = () => {
    const [open, setOpen] = React.useState(false);
    const ToggleDrawer = () => {
      setOpen(!open);
    };

    return(
        <Hoc>
            <Toolbar className={styles.Toolbar}>
                <IconButton
                    className={open ? styles.MenuButtonOpen : styles.MenuButtonClosed}
                    edge="start"
                    aria-label="open drawer"
                    onClick={ToggleDrawer}>
                        <MenuIcon style={{ fontSize: 45 }}/>
                </IconButton>
                <div>
                    <IconButton href="https://www.linkedin.com/in/antonylegall/">
                        <LinkedInIcon style={{ fontSize: 45 }} />
                    </IconButton>
                    <IconButton href="https://github.com/antonylegall">
                        <GitHubIcon style={{ fontSize: 45 }}/>
                    </IconButton>
                    <IconButton href="https://medium.com/@antonylegall">
                        <img src={MediumIcon} height="45" width="45" color="inherit" alt="Medium Icon"/>
                    </IconButton>
                </div>
            </Toolbar>
            <SideBar open={open}/>
      </Hoc>
    );
};

export default Layout;