import React, { useEffect, useState } from 'react'
import { Route, Link, Routes, useParams, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Box, Grid, Card, CardMedia, CardHeader, CardContent, CardActions, Typography, Button, CardActionArea } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import '../App.css';
function FilterPage() {
    const params = useParams();
    const BASE_URL = 'http://127.0.0.1:8000';
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const fetchPets = async () => {
            const url = `${BASE_URL}/api/breedme/pets`;
            const userId = "1";
            axios.get(url, {
                params: {
                    userId: userId,
                    type: params.petType
                }
            })
                .then(res => {
                    console.log(res.data.data.data);
                    setData(res.data.data.data);
                    setIsLoaded(true);
                });
        }
        fetchPets();
    }, [setData]);
    console.log(data);
    if (!isLoaded) {
        return <div>{t('loading')} </div>;
    } else {
        return (
            <>
                <Box p={2}>
                    <Typography align='center' variant='h3' gutterBottom style={{ color: "#FF5733" }} >
                        {params.petType}s Available for Adoption
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    {data?.slice(0, 3).map(item => (
                        <Grid item md={3} key={item.id} >
                            <Card>
                                <CardActionArea href={`/pets/${item.id}`}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500], width: 45, height: 45, marginLeft: 2 }} alt={item.userName} src={BASE_URL + item.userImage} />
                                        }
                                        title={item.userName}
                                        subheader={item.created_at}
                                    />
                                    <CardMedia
                                        component="img"
                                        height="299"
                                        image={BASE_URL + item.image}
                                        alt={item.name}
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>

                    ))}
                    <Grid item md={3}>
                        <Card>
                            <CardActionArea href="/pets">
                                <CardMedia
                                    component="img"
                                    height="270"
                                    image="/images/pawprint.png"
                                    alt='others Animales'
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CardActions>
                                        <Button style={{ display: "block", width: "100%", fontWeight: "bold", backgroundColor: '#FF5733' }}>{t('meetThem')}</Button>
                                    </CardActions>
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default FilterPage