import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { Button, Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from "axios";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        paddingBottom: "50px"
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

function Login(props) {
    const { classes } = props;
    const { t, i18n } = useTranslation();
    const BASE_API_URL = 'http://127.0.0.1:8000';
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [values, setValues] = useState({
        email: "",
        emailValidationError: null,
        password: "",
        passwordValidationError: null,
        error: null,
        rememberMe: false,
        showPassword: false,
        isLoading: false,
    });
    const handleEmail = (event) => {
        setValues({
            ...values,
            email: event.target.value,
            emailValidationError: null,
        });
    };
    const handlePassword = (event) => {
        setValues({
            ...values,
            password: event.target.value,
            passwordValidationError: null
        })
    }
    const submit = async (e) => {
        e.preventDefault();
        setValues({
            ...values,
            isLoading: true,
        });
        try {
            let response = await axios.post(`${BASE_API_URL}/api/login`, {
                email: values.email,
                password: values.password,
                accessType: "token",
                appType: "mobile",
            });
            console.log("RESPONSE");
            console.log(response)
            let user = response.data.data.user;
            let profile = response.data.data.profile;
            let accessToken = response.data.data.token;
            let expiryDate = response.data.data.expiryDate;
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("profile", JSON.stringify(profile));
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("expiryDate", expiryDate);
            setValues({
                ...values,
                isLoading: false,
            });
            navigate('/');

        } catch (error) {
            console.log(error.response);
            setValues({
                ...values,
                isLoading: false,
                error: error.response
                    ? error.response.data["Err_Desc"]
                    : "Something Went Wrong",
                password: "",
            }
            );
        }
    };

    return (
        <>
            <Box>
                <main className={classes.main}>
                    <CssBaseline />
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            {t('login')}
                        </Typography>
                        <form className={classes.form} onSubmit={submit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus onChange={handleEmail} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input name="password" type="password" id="password" onChange={handlePassword} autoComplete="current-password" />
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                {t('login')}
                            </Button>
                        </form>
                    </Paper>
                </main>
            </Box>
        </>

    );


}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);