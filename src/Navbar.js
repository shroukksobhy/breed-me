import React from "react";
import "./Navbar.css";
import Button from "@material-ui/core/Button";
// import "./uber-iosreel.mp4";
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="TopArea">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "0vh",
                        padding: "3%"
                    }}
                >
                    <div style={{ marginLeft: "2vw" }}>
                        <strong style={{ fontSize: "1.8rem" }}>{t('BreedMe')}</strong>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-around"
                        }}
                    >
                        <a className="underLine2 hide_on_responsive">
                            <Button variant="text" color="default">
                                SERVICES
                            </Button>
                        </a>
                        <a className="underLine2 hide_on_responsive" href="">
                            <Button variant="text" color="default">
                                CLIENTS
                            </Button>
                        </a>
                        <a className="underLine2 hide_on_responsive" href="">
                            <Button variant="text" color="default">
                                CAREERS
                            </Button>
                        </a>
                        <a className="underLine2 hide_on_responsive" href="">
                            <Button variant="text" color="default">
                                ABOUT
                            </Button>
                        </a>
                        <a className="underLine2">
                            <Button variant="outlined" color="secondary">
                                CONTACT
                            </Button>
                        </a>
                    </div>
                </div>

            </div>

        </>
    );
};

export default NavBar;
