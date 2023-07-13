import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Home = () => {
  return (
<>
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://source.unsplash.com/random/1920x1080/?education,education" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/random/1920x1080/?educatio,education" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/random/1920x1080/?education,education" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</>


  );
};

export default Home;
