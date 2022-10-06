import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// Languages
const languages = [
    { name: "English", code: "en" },
    { name: "日本語", code: "ja" },
    { name: "Français", code: "fr" },
    { name: "العربية", code: "ar", dir: "rtl" },
];
function Header() {
    const { t, i18n } = useTranslation();
    document.body.dir = i18n.dir();
    const handleChangeLocale = (e) => {
        const lang = e.target.value;
        alert(lang)
        i18n.changeLanguage(lang)
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "#6504B5" }} >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/pets">{t('BreedMe')} </Link>
                    </Typography>
                    <Typography variant="h6" component="div" >
                        <Link to="/">{t('Home')} </Link>
                    </Typography>
                    <Link to="/login" className="nav-link">
                        <Button color="secondary" variant="contained"> {t('login')}</Button>
                    </Link>
                    <Button color="inherit"> {t('sign-up')}</Button>
                    <Button color="inherit" onClick={() => { i18n.changeLanguage('ar') }}> عربي</Button>
                    <Button color="inherit" onClick={() => { i18n.changeLanguage('en') }}> English</Button>

                </Toolbar>
            </AppBar>
        </Box >
    );
}
export default Header;
