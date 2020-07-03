import React from 'react';

import styles from './Layout.css'
import SideBar from './SideBar/SideBar';
import Aux from '../../hoc/Hoc';

import { Toolbar, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import MediumIcon from './mediumrecol.png';

const Layout = () => {
    const [open, setOpen] = React.useState(false);
    const ToggleDrawer = () => {
      setOpen(!open);
    };

    return(
        <Aux>
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
                    <IconButton >
                        <GitHubIcon style={{ fontSize: 45 }}/>
                    </IconButton>
                    <IconButton>
                        <img src={MediumIcon} height="45" width="45" color="inherit"/>
                    </IconButton>
                </div>
            </Toolbar>
            <SideBar open={open}/>
      </Aux>
    );
};

export default Layout;