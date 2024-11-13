<template>
  <div>
    <header>
      <div class="suicideboys-box">
        <div class="box-content">
          <h1>Kártya Projekt</h1>
          <nav class="navbar">
            <!-- Navigációs linkek -->
            <div class="navbar-links">
              <RouterLink to="/">Home</RouterLink> |
              <RouterLink to="/tablazat">Táblázat</RouterLink> |
              <RouterLink to="/kartyak">Kártyák</RouterLink> |
            </div>

            <!-- Zenelejátszó és vezérlők a jobb oldalon -->
            <div class="music-controls">
              <MusicPlayer />
            </div>
          </nav>
        </div>
      </div>
    </header>

    <div class="my-border p-3">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import MusicPlayer from './components/Music.vue'; // Importáljuk a MusicPlayer komponenst

export default {
  components: {
    MusicPlayer,
  },
};
</script>

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
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-links {
  display: flex;
  gap: 20px;
  align-items: center;
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

/* Zenelejátszó vezérlők elhelyezése a jobb oldalon */
.music-controls {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Zenelejátszó vezérlő gombok */
.music-controls button {
  background: none;
  border: none;
  padding: 10px;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
}

.music-controls button:hover {
  color: #ff4757;
}

.volume-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.volume-control input {
  width: 100px;
}

/* Reszponzív stílusok kisebb képernyőkre */
@media (max-width: 768px) {
  header {
    padding: 15px;
  }

  h1 {
    font-size: 2em;
  }

  .navbar-links {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navbar-links a {
    padding: 8px 0;
  }

  .music-controls {
    gap: 10px;
  }

  .volume-control input {
    width: 80px;
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 1.5em;
  }

  .navbar-links {
    font-size: 0.9em;
  }

  .music-controls button {
    font-size: 1.2rem;
    /* Kisebb ikonok mobilon */
  }
}
</style>
