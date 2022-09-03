import React from "react";
import { Container, Grid, Box, Card, CardMedia, CardHeader, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
// import { useTranslation } from 'react-i18next';
import { useTranslation, withTranslation, Trans } from "react-i18next";

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    }
})
function Footer() {
    const { t, i18n } = useTranslation();
    const classes = useStyles();
    return (
        <Container>
            <Box ml={2}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item md={4} center>
                        <Typography className={classes.bold}>{t('BreedMe')}  </Typography>
                        <hr />
                        <Link to="/pets"><Typography>Pet Adoption</Typography></Link>
                        <Link to="/pets"><Typography>{t('petTopics')}</Typography></Link>
                        <Link to="/pets"><Typography>SiteMap</Typography></Link>
                    </Grid>
                    <Grid item md={4}>
                        <Typography className={classes.bold}>{t('about')}</Typography>
                        <hr />
                        <Link to="/pets"><Typography>{t('privacy')} </Typography></Link>
                        <Link to="/pets"><Typography>About our ADS</Typography></Link>
                        <Link to="/pets"><Typography>Shelter & secure registeration</Typography></Link>
                    </Grid>
                    <Grid item md={3}>
                        <Typography className={classes.bold}>{t('leatestNews')}</Typography>
                        <hr />
                        <Typography>{t('moreDetails')}</Typography>
                        <Button variant="contained">{t('login')}</Button>
                    </Grid>

                </Grid>
            </Box >
        </Container>
    );
}

export default Footer;