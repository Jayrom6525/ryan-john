<template>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/services">Services</nuxt-link></li>
        <!-- Add more navigation links as needed -->
      </ul>
    </nav>
  </template>
  
  <style scoped>
  /* Add your CSS styling for the navigation bar here */
  nav {
    background-color: #333;
    color: #fff;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline;
    margin-right: 20px;
  }
  
  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }
  </style>
  