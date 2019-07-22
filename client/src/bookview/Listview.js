import React, { Component } from 'react';
import './listview.css';
import img1 from '../image/book 2.jpg';
import img2 from '../image/lost.jpg';
import img3 from '../image/conn.jpg';
import img4 from '../image/hesse.jpg';
import img5 from '../image/lost.jpg';
import img6 from '../image/conn.jpg';
import img7 from '../image/darkness.jpg';
import img8 from '../image/hesse.jpg';

export default class Listview extends Component {

  render() {
    return (
      <div>
        <div class="booklist">
          <div class="bookitem">
            <img src={img1} alt='book' />
          </div>
          <div class="bookitem">
            <img src={img2} alt='book' />
          </div>
          <div class="bookitem">
            <img src={img3} alt='book' />
          </div>
          <div class="bookitem">
            <img src={img4} alt='book' />
          </div>
          <div class="bookitem">
            <img src={img4} alt='book' />
          </div>
        </div>
        <div class="booklist">
          <div class="bookitem">
            <img src={img5} alt='book' />
          </div>
          <div class="bookitem">
            <img src={img6} alt='book' />
          </div>
          <div class="bookitem">
            <img src={img7} alt='book' />
          </div>
          <div class="bookitem">
            <img src={img8} alt='book' />
          </div>
          <div class="bookitem">
            <img src={img4} alt='book' />
          </div>
        </div>
      </div>
    );
  }
}   