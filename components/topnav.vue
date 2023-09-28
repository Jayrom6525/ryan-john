<template>
  <nav>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="">Testimonials</nuxt-link></li>
      <li><nuxt-link to="/Pricing">Pricing</nuxt-link></li>
      <li class="about" style="float: right">
        <a class="active bg-green-700 hover:bg-green-900" href="#">About</a>
      </li>
    </ul>
  </nav>
</template>

<script>

</script>

<style>

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}

.about {
  background-color: green;
}
</style>
