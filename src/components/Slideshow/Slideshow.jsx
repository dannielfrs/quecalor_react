import React, { useRef, useEffect, useCallback, useState } from 'react';
import styles from './styles.module.scss'
import { useSelector } from "react-redux"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"
import weatherIcons from '../../assets/jsonData/weatherIcons.json'
import CardMedium from '../CardMedium/CardMedium'

export default function Slideshow({
    controls = false,
    autoplay = true,
    transition = "1000",
    interval = "5000"
}) {
    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);
    const suggestedWeathersState = useSelector(state => state.suggestedWeathers)
    const [loading, setLoading] = useState(true)

    const icons = suggestedWeathersState.map((item) => {
        const [icon] = weatherIcons.filter((icon) => icon.icon === item.weather[0].icon)
        return icon
    })

    const next = useCallback(() => {
        // Verify that the slideshow has elements
        if (slideshow.current.children.length > 0) {
            // Get first element of slideshow
            const primerElemento = slideshow.current.children[0];
            // Set the transition for the slideshow
            slideshow.current.style.transition = `${transition}ms ease-out all`;
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            // Move the slideshow
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
            const transicion = () => {
                // Reset the position of the slideshow.
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;
                // Take first element and send it to the end
                slideshow.current.appendChild(primerElemento);
                slideshow.current.removeEventListener('transitionend', transicion);
            }
            // Eventlistener for when the animation ends
            slideshow.current.addEventListener('transitionend', transicion);
        }
    }, [transition]);

    const previous = () => {
        if (slideshow.current.children.length > 0) {
            // Get the last element of the slideshow.
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
            slideshow.current.style.transition = 'none';
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
            setTimeout(() => {
                slideshow.current.style.transition = `${transition}ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    }

    useEffect(() => {
        if (suggestedWeathersState.length) {
            setLoading(false)
        } else {
            setLoading(true)
        }
    }, [suggestedWeathersState])

    useEffect(() => {
        if (autoplay && slideshow.current) {
            intervaloSlideshow.current = setInterval(() => {
                next();
            }, interval);
            // Delete intervals
            slideshow.current.addEventListener('mouseenter', () => {
                clearInterval(intervaloSlideshow.current);
            });
            // Set the interval again when the cursor is outside the slideshow
            slideshow.current.addEventListener('mouseleave', () => {
                intervaloSlideshow.current = setInterval(() => {
                    next();
                }, interval);
            });
        }
        return () => {
            if (autoplay && slideshow.current) {
                intervaloSlideshow.current = null
                slideshow.current.removeEventListener('mouseenter', () => {
                    clearInterval(intervaloSlideshow.current);
                });
                slideshow.current.removeEventListener('mouseleave', () => {
                    intervaloSlideshow.current = setInterval(() => {
                        next();
                    }, interval);
                });
            }
        }
    }, [slideshow.current]);

    return (
        <div className={styles.slideshow}>
            {loading ? (
                <div>
                    Loading...
                </div>
            ) : (
                <>
                    <div className={styles.slideshow_container} ref={slideshow}>
                        {suggestedWeathersState.map((item, index) => {
                            return (
                                <div className={styles.slideshow_slide} key={index}>
                                    <CardMedium
                                        name={item.name}
                                        icon={icons[index].url}
                                        temp={item.main.temp.toFixed()}
                                        description={item.weather[0].description}
                                        feels_like={item.main.feels_like.toFixed()}
                                        max={item.main.temp_max.toFixed()}
                                        min={item.main.temp_min.toFixed()}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    {controls && <div className={styles.slideshow_controls}>
                        <button className={styles.slideshow_button} onClick={() => previous()}>
                            <MdArrowBackIos />
                        </button>
                        <button className={styles.slideshow_button} onClick={() => next()}>
                            <MdArrowForwardIos />
                        </button>
                    </div>
                    }
                </>
            )
            }
        </div>
    );
}