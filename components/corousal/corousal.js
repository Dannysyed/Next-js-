import React from 'react'
import { Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, UncontrolledCarousel } from 'reactstrap'
import styles from './carousel.module.css'
const Corousal = () => {
    return (
        <div className={styles.car} >

            <UncontrolledCarousel
                items={[
                    {
                        altText: 'Slide 1',
                        caption: 'The Batman movie box office',
                        key: 1,
                        src: 'https://static-01.daraz.lk/p/b09a7de484e46a8dbe7b86644b2fb883.jpg'
                    },
                    {
                        altText: 'Animie that will blow your mind',
                        caption: 'Animie that will blow your mind',
                        key: 2,
                        src: 'https://cutewallpaper.org/21/4k-resolution-anime-wallpapers/Anime-wallpapers-4k-ultra-hd-1610-desktop-backgrounds-hd-.jpg'
                    },
                    {
                        altText: 'New technology in 2022',
                        caption: 'New technology in 2022',
                        key: 3,
                        src: 'https://wallpapercave.com/wp/wp7808909.jpg'
                    }
                ]}
            />
        </div>
    )
}

export default Corousal