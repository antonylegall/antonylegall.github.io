import React from 'react';
import BannerImage from '../../../assets/mountaineer.jpg';
import { Container, Grid, Button } from '@material-ui/core';
import styles from './Banner.module.css';

const Banner = () => (
    <div>
        <Container maxWidth="xl" className={styles.Container} disableGutters>
            <Grid container style={{paddingLeft:'8em'} } alignContent="space-between">
                <Grid item sm={12} m={3} lg={5}>
                    <h1 className={styles.Title}>Antony LeGall</h1>
                    <p className={styles.p}>Software Developer @ RAC Insurance</p>
                    <p className={styles.p}>Perth, Australia</p>
                    <Button variant="contained" size="large" color="primary">Resume</Button>
                </Grid>
                <Grid item s={12} m={3} lg={6}>
                    <img src={BannerImage} className={styles.MainImage} alt=""></img>
                </Grid>
            </Grid>
        </Container>
    </div>
);

export default Banner;