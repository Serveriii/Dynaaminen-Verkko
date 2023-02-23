import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Kello from "./Clock";
import Home from "../pages/Home";
import Drinks from "../pages/Drinks";
import Recipes from "../pages/Recipes";




export default function Navbar() {
 
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <Link class='navbar-brand' to="/" element={<Home/> }>Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav">
        <Link class='nav-link nav-item' to="/drinks" element={<Drinks/> }>Drinks</Link>
        <Link class='nav-link nav-item' to="/recipes" element={<Recipes/> }>Food</Link>
        <Kello/>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

