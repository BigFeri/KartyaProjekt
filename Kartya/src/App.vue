<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="suicideboys-box">
      <div class="box-content">
        <h1>Kártya Projekt</h1>
        <nav>
          <div class="navbar-links">
            <RouterLink to="/">Home</RouterLink> |
            <RouterLink to="/tablazat">Táblázat</RouterLink> |
            <RouterLink to="/kartyak">Kártyák</RouterLink>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <div class="my-border p-3">
    <RouterView />
  </div>
</template>


<style scoped>
/* Global styles */
body {
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

/* Header styles */
header {
  background: linear-gradient(135deg, #000000, #4b4b4b);
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #ffffff;
}

.suicideboys-box {
  max-width: 1200px;
  margin: auto;
}

h1 {
  font-size: 2.5em;
  font-weight: bold;
  letter-spacing: 1px;
  color: #ff4757;
  text-transform: uppercase;
}

/* Navbar styles */
.navbar-links {
  margin-top: 10px;
}

.navbar-links a {
  color: #ffffff;
  text-decoration: none;
  padding: 10px 15px;
  transition: color 0.3s;
}

.navbar-links a:hover {
  color: #ff4757;
}


</style>