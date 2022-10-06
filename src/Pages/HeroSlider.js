import React, { memo } from 'react'
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import { Typography } from '@material-ui/core';
import Wrapper from "../components/Wrapper";
import { useTranslation } from "react-i18next";

const BasicSlider = memo(() => {
    const bogliasco = "/images/pexels-lumn-406014.jpg";
    const countyClare = "/images/pexels-daria-shevtsova-2053922.jpg";
    const craterRock = "/images/dog-banner-3.jpg";
    // const giauPass = "https://i.imgur.com/8IuucQZ.jpg";
    const { t, i18n } = useTranslation();

    return (
        <div>
            <HeroSlider
                height={"100vh"}
            >
                <Overlay>
                    <Wrapper>
                        <Typography variant='h6'>{t('BreedMe')}</Typography>
                        <Typography variant='subtitle1'>
                            The <code>backgroundAttachment</code> prop of the <code>Slide</code>{" "}
                            components set to <code>fixed</code>.
                        </Typography>
                    </Wrapper>
                </Overlay>
                {/* <Slide
                    label="Giau Pass - Italy"
                    background={{
                        backgroundImage: giauPass,
                        backgroundAttachment: "fixed"
                    }}
                /> */}

                <Slide
                    label="Bogliasco - Italy"
                    background={{
                        backgroundImage: bogliasco,
                        backgroundAttachment: "fixed"
                    }}
                />

                <Slide
                    label="County Clare - Ireland"
                    background={{
                        backgroundImage: countyClare,
                        backgroundAttachment: "fixed"
                    }}
                />

                <Slide

                    label="Crater Rock, OR - United States"
                    background={{
                        backgroundImage: craterRock,
                        backgroundAttachment: "fixed"
                    }}
                />
                <MenuNav />
            </HeroSlider>
        </div>
    )
})

export default BasicSlider