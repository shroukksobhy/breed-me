import React from 'react';
import { Typography, Grid, Card, CardMedia, CardActionArea, Button } from '@material-ui/core'
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

import { useTranslation } from 'react-i18next';
import PetsList from './PetsList';
import Box from '@mui/material/Box';
import BasicSlider from './HeroSlider';
import { CardContent } from '@mui/material';
export default function LandinPage() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Box jsustifyContent="center">
                {/* <BasicSlider /> */}
                {/* <Typography>Find your new best friend</Typography>
                <Typography>Browse pets from our network of over 11,500 shelters and rescues.</Typography> */}
            </Box>
            <Box px={10}>
                <Grid container spacing={1}>
                    <Grid item sm={3}>
                        <Card>
                            <CardActionArea href={`/search/Dog`}>
                                <CardMedia
                                    component="img"
                                    height="80"
                                    width="80"
                                    image="./images/dog.png"
                                    alt="Dogs"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item sm={3}>
                        <Card>
                            <CardActionArea href={`/search/Cat`}>
                                <CardMedia
                                    component="img"
                                    height="80"
                                    width="80"
                                    image="./images/cat.png"
                                    alt="Cats"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item sm={3}>
                        <Card>
                            <CardActionArea href={`/search/Cat`}>
                                <CardMedia
                                    component="img"
                                    height="80"
                                    width="80"
                                    image="./images/pawprint.png"
                                    alt="Other animals"
                                    color="#FF5733"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item sm={3}>
                        <Card>
                            <CardActionArea href={`/animals-shelters`}>
                                <CardMedia
                                    component="img"
                                    height="80"
                                    width="80"
                                    image="./images/pet-house.png"
                                    alt="Shelters"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Box p={2}>
                <Typography align='center' variant='h3' gutterBottom style={{ color: "#6504B5" }} >
                    {t('pets')}
                </Typography>
            </Box>
            <section>
                <Grid>
                    <PetsList />
                </Grid>
            </section>
            <section>
                <Box p={5} m={2}>
                    < Grid container spacing={5} justifyContent="center" alignItems="center">
                        <Grid item md={4} >
                            <Box>
                                <Typography style={{ fontWeight: "bold" }}>{t('Checklist for New Adopters')}  </Typography>
                                <Typography>Help make the transition, as smooth as possible.</Typography>
                                <Button variant="contained">{t('learnMore')}</Button>

                                {/* <Typography style={{ fontWeight: "bold" }}>{t('COVID-19 Resources')}</Typography>
                                <Typography>{t('Get the latest on adoption processes, learn how local shelters and rescue groups are adapting and find out what you can do to help dogs and cats in need right now.')} </Typography> */}
                            </Box>
                        </Grid>
                        <Grid item md={4}>
                            <Box>
                                <Typography style={{ fontWeight: "bold" }}>{t('COVID-19 Resources')}</Typography>
                                <Typography>{t('Get the latest on adoption processes, learn how local shelters and rescue groups are adapting and find out what you can do to help dogs and cats in need right now.')} </Typography>
                                <Button variant="contained">{t('learnMore')}</Button>

                            </Box>

                        </Grid>
                        <Grid item md={4}>
                            <Box>
                                {/* <Typography style={{ fontWeight: "bold" }}>{t('COVID-19 Resources')}</Typography>
                                <Typography>{t('Get the latest on adoption processes, learn how local shelters and rescue groups are adapting and find out what you can do to help dogs and cats in need right now.')} </Typography> */}

                                <Typography style={{ fontWeight: "bold" }} >{t('Pet Adoption FAQs')}</Typography>
                                <Typography>{t('Get answers to questions you haven\'t thought of.')}</Typography>
                                <Button variant="contained">{t('learnMore')}</Button>

                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </section>
        </>
    )
}

