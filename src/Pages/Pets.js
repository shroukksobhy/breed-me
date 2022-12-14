import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import { Grid, Card, CardMedia, CardHeader, CardContent, Typography, CardActionArea } from '@material-ui/core';
import Box from '@mui/material/Box';
import axios from "axios";
import { useTranslation } from 'react-i18next';
function Cards() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const BASE_URL = 'http://127.0.0.1:8000';
    const { t } = useTranslation();

    useEffect(() => {
        const fetchPets = async () => {
            const url = `${BASE_URL}/api/breedme/pets`;
            const userId = "2";
            axios.get(url, {
                params: {
                    userId: userId
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
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>{t('loading')} </div>;
    } else {
        return (
            <>
                <Typography align='center' variant='h3' gutterBottom style={{ color: "#6504B5" }} >
                    {t('pets')}
                </Typography>
                <Grid container spacing={3}>
                    {data?.map(item => (
                        <Grid item md={4} key={item.id} >
                            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                                <CardActionArea href={`/pets/${item.id}`}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} alt={item.userName} src={BASE_URL + item.userImage} />
                                        }
                                        action={
                                            <IconButton aria-label="settings">
                                            </IconButton>
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
                                    <CardContent>
                                        <Typography variant="subtitle1" align='center' style={{ color: "#FF5733" }} >
                                            {item.name}
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <Link to={`/`} >
                                        <IconButton size="small" color="primary">
                                            ????????????
                                        </IconButton>
                                    </Link>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </CardActions> */}
                                </CardActionArea>
                            </Card>
                        </Grid>

                    ))
                    }
                </Grid >
            </>
        );
    }

}
export default function Pets() {
    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <Cards />
            </Box>
        </React.Fragment>

    );
}
