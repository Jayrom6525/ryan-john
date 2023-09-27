<template>
  <h1>John Romgno Personal Training</h1>
  <nav>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="">Testimonials</nuxt-link></li>
      <li><nuxt-link to="/Pricing">Pricing</nuxt-link></li>
      <li class="about" style="float: right">
        <a class="active" href="#">About</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted() {
    this.Hello();
  },
  methods: {
    Hello() {
      console.log("yes");
    },
  },
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

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

/* this doesnt work right, changes to grey over hover instead of dark green
.about:hover {
  background-color: rgb(0, 37, 0);
}
*/
</style>
