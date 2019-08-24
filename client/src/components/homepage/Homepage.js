import React from 'react';
import './Homepage.css';
import img1 from '../image/girlBook.svg';
import img2 from '../image/logo.jpg';
export default () =>
    (
        <>
            <div class="headingPage">
                <div className="bannerText">
                    <h1>Find your book & lose yourself</h1>

                </div>

                <div className="bannerImage">
                    <img src={img1} className="banner" alt='book' />

                </div>
            </div>

        </>
    );