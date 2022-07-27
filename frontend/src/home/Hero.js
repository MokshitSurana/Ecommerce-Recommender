import React, { useEffect, useRef, useState } from 'react'
import './hero.css'
import Images from "../images/Images"
import data from './trending.json'
import Item1 from "../images/Item1.png"
import Item2 from "../images/home-shoe-2.png"
import Item3 from "../images/Item3.png"
import { Link } from 'react-router-dom'
// import Shoe from '../images/home-shoe-1.png'
const Hero = () => {
    const [slides, setSlides] = useState()
    // let slides = document.querySelectorAll(".slide-container");
    let index = 0;

    function next() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    function prev() {
        slides[index].classList.remove("active");
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add("active");
    }

    const slidesHandler = () => {
        setSlides(document.querySelectorAll(".slide-container"));
    }
    useEffect(() => {
        slidesHandler();
        window.scrollTo(0, 0);
    }, [])
    return (
        <div class="home" id="home">

            <div class="slide-container active">
                <div class="slide">
                    <div class="content">
                        <span>Men's T-Shirt</span>
                        <h3>nike metcon shoes</h3>
                        <p>Our tee is cut from a sustainable modal and recycled polyester knit with enhanced elasticity and an activewear feel, this lightweight wardrobe staple layers comfortable under sweaters and jackets alike.</p>
                    </div>
                    <div class="image">
                        <img width="200px" src={Item1} class="shoe" alt="" />
                    </div>
                </div>
            </div>

            <div class="slide-container">
                <div class="slide">
                    <div class="content">
                        <span>nike blue shoes</span>
                        <h3>nike metcon shoes</h3>
                        <p>Our latest version includes foam cushioning that's softer than ever, and abrasion-resistant rubber for extra durability on rocky roads. With updates like these, you'll be able to stay focused as you push towards the finishing line.</p>
                    </div>
                    <div class="image">
                        <img src={Item2} class="shoe" alt="" />
                    </div>
                </div>
            </div>

            <div class="slide-container">
                <div class="slide">
                    <div class="content">
                        <span>{data[3].articleType}</span>
                        <h3>{data[3].productDisplayName}</h3>
                        <p>The Fastrack watches are a popular choice of accessories for the youth, as they feature trendy and edgy designs that give off a modern look. These portable fashion accessories can give your look a lift with their stylish and eye-catching designs.</p>
                    </div>
                    <div class="image">
                        <img src={data[3].image} class="shoe" alt="" />
                    </div>
                </div>
            </div>

            <div id="prev" class="fas fa-chevron-left" onClick={prev}></div>
            <div id="next" class="fas fa-chevron-right" onClick={next}></div>
        </div>
    )
}

export default Hero