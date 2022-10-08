import React, { useState, useEffect } from 'react'
import { Route, Link, Routes, useParams, NavLink } from 'react-router-dom';
import axios from "axios";
import Stack from "@mui/material/Stack";
import { Container, Grid, Card, CardActions, CardContent, Box, Typography, Button } from '@material-ui/core';
import Alert from '@mui/material/Alert';
import { useTranslation } from 'react-i18next';
import ImageGallery from 'react-image-gallery';
// import styles from '../App.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function Pet() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const BASE_URL = 'http://127.0.0.1:8000';
    const params = useParams();
    let petId = params.id;
    const { t, i18n } = useTranslation();
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',

        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];
    console.warn(images)
    useEffect(() => {
        const fetchPets = async () => {
            const url = `${BASE_URL}/api/breedme/pets/${petId}`;
            axios.get(url, {
                params: {
                }
            })
                .then(res => {
                    console.log(res.data.data);
                    setData(res.data.data);
                    setIsLoaded(true);
                });
        }
        fetchPets();
    }, [setData]);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    {/* <ImageGallery items={images} /> */}
                    <Card>
                        <Container>

                            <Box mb={5}>
                                <Typography variant="h3">
                                    {data.name}
                                </Typography>
                            </Box>
                            <NavLink
                                className="navbar-item"
                                activeClassName="is-active"
                                to="/articles/dog-breeds/siberian-husky/"
                                exact
                            >
                                {data.breed}
                            </NavLink>
                            <hr />
                            <Typography>{data.type} . {data.sex} . {data.nationality}</Typography>
                            <hr />
                            <Typography variant='h6'>About</Typography>
                            <Typography>{data.notes}</Typography>
                            <hr />
                            <Alert severity="success" color="info">
                                {t('adoptionAlert')}
                            </Alert>
                        </Container>

                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Stack spacing={4} direction="column">
                        <Card>
                            <CardContent>
                                <Box>
                                    <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                                        Considering {data.name} for adoption?
                                    </Typography>
                                </Box>
                                <Stack spacing={2} py={3}>
                                    <Button variant="outlined" style={{
                                        display: "block",
                                        width: "100%",
                                    }} >Start your inquery</Button>
                                    <Button variant="contained" style={{
                                        display: "block",
                                        width: "100%"
                                    }} >Read FAQS</Button>
                                </Stack>
                            </CardContent>
                            <CardActions>
                                <Grid container>
                                    <Grid item md={6} align="center">
                                        <Button size="small" color="primary" style={{
                                            display: "block",
                                            width: "100%",
                                        }} component={Link} to="/coming-soon"> Sponsor</Button>

                                    </Grid>
                                    <Grid item md={6} align="center">

                                        <Button size="small" style={{
                                            display: "block",
                                            width: "100%",
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                        }}><FavoriteBorderIcon fontSize="small" style={{
                                            margin: "5px",
                                            fontSize: "20"
                                        }} /> {t('favorite')}</Button>
                                    </Grid>


                                </Grid>
                            </CardActions>
                        </Card>
                        <Card>
                            <CardContent>
                                {t('location')}
                                <Typography variant='subtitle1'>Cairo, Egypt</Typography>
                            </CardContent>
                        </Card>

                    </Stack>
                </Grid>
            </Grid>
        </>
    );
}