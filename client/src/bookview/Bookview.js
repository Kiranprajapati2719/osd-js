import React, { Component } from 'react';
import './bookview.css';
import img from '../image/spell.jpg';

export default class Bookview extends Component {

  render() {
    return (
      <div class="row">
        <div class="column1">
          <img src={img} alt='book' />
          {/* <h2>Column 1</h2>
          <p>Some text..</p> */}
        </div>
        <div class="column2">
          <h1 class="title">Dragon Spell</h1>
          <h3>Jane is a normal orphan with unusual grandparents. She doesn’t realize how unusual until she returns on holiday from college to discover that her grandmother has been kidnapped. Her grandfather reveals that her kidnappers are a new foe from an old world however, has its familiar handsome men. One of them is Caius, a dragon shifter with a sly smile and a glint in his eyes. He joins their search for her missing grandmother, but Jane isn't so sure it isn’t another member of her family that he’s interested in.</h3>
          {/* <p>1." To Kill a Mockingbird " by Harper Lee </p> */}
        </div>
      </div>
    );
  }
}   