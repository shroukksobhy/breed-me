import React, { useState, useEffect } from 'react'
import { Route, Link, Routes, useParams } from 'react-router-dom';
import axios from "axios";
import { Container, Grid, Card, CardHeader, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import Alert from '@mui/material/Alert';
import { useTranslation } from 'react-i18next';
import ImageGallery from 'react-image-gallery';
// import styles from '../App.css';

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
                            <Typography variant="h3" >
                                {data.name}
                            </Typography>
                            <Typography>Cairo . Egypt</Typography>
                            <hr />
                            <Typography>{data.type} . {data.sex} . {data.nationality}</Typography>
                            <hr />
                            <Typography variant='subtitle1'>About</Typography>
                            <Typography>{data.notes}</Typography>
                            <hr />
                            <Alert severity="success" color="info">
                                {t('adoptionAlert')}
                            </Alert>
                        </Container>

                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            {t('location')}
                            <Typography variant='subtitle1'>Cairo</Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </>
    );
}