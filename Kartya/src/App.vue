<template>
  <div>
    <header>
      <div class="suicideboys-box">
        <div class="box-content">
          <h1>Kártya Projekt</h1>
          <nav class="navbar">
            <!-- Zenelejátszó és vezérlők a jobb oldalon -->
            <!-- A MusicPlayer komponens beillesztése a zenelejátszó vezérléséhez -->
            <div class="music-controls">
              <MusicPlayer />
            </div>
            <!-- Navigációs linkek -->
            <div class="navbar-links">
              <!-- A főoldal, táblázat és kártyák oldalra mutató linkek -->
              <RouterLink to="/">Home</RouterLink> |
              <RouterLink to="/tablazat">Táblázat</RouterLink> |
              <RouterLink to="/kartyak">Kártyák</RouterLink> |
            </div>

            <!-- Keresőmező, amely csak akkor látszik, ha nem a főoldalon vagyunk -->
            <div v-if="!isHomePage" class="d-flex align-items-center search-container" role="search">
              <!-- Kereső címke és beviteli mező -->
              <label for="searchQuery" class="form-label text-nowrap m-0 search-label"></label>
              <input id="searchQuery" class="form-control me-2 ms-2 search-input" type="search" aria-label="Search"
                v-model="searchQueryInput" @keyup.enter="performSearch" />
            </div>
          </nav>
        </div>
      </div>
    </header>

    <div class="my-border p-3">
      <!-- A dinamikusan betöltődő komponens helye, amely az aktuális route-nak megfelelő tartalmat jeleníti meg -->
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { computed } from "vue";
import MusicPlayer from './components/Music.vue'; // Importáljuk a MusicPlayer komponenst

export default {
  components: {
    MusicPlayer, // Hozzáadjuk a MusicPlayer komponenst
  },
  provide() {
    return {
      searchQuery: computed(() => this.searchQuery), // Keresési lekérdezés biztosítása más komponensek számára
    };
  },
  watch: {
    // Figyeljük a keresési szót, ha változik, akkor frissítjük a keresési lekérdezést
    searchWordInput(data) {
      if (!data) {
        this.searchQuery = null;
      } else {
        this.searchQuery = data;
      }
    },
    // Figyeljük a keresési bevitelt, ha változik, akkor frissítjük a lekérdezést
    searchQueryInput(newValue) {
      if (!newValue) {
        this.searchQuery = null;
      } else {
        this.searchQuery = newValue;
      }
    }
  },
  data() {
    return {
      searchQuery: null, // Keresési lekérdezés alapértéke
      searchQueryInput: null, // Keresési beviteli mező alapértéke
    };
  },
  computed: {
    // Ellenőrizzük, hogy az aktuális oldal a főoldal-e
    isHomePage() {
      return this.$route.path === "/";
    }
  },
  methods: {
    // Keresés indítása, a keresési bevitelt tároljuk a keresési lekérdezésben
    performSearch() {
      this.searchQuery = this.searchQueryInput;
    }
  }
};
</script>

<style scoped>
/* Globális stílusok */
body {
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

/* Fejléc stílusa */
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

/* Cím stílusa */
h1 {
  font-size: 2.5em;
  font-weight: bold;
  letter-spacing: 1px;
  color: #ff4757;
  text-transform: uppercase;
}

/* Navigációs sáv stílusa */
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
  color: #ff4757; /* Hover hatás, amikor az egér rámutat */
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
  color: #ff4757; /* Hover hatás a gombokon */
}

/* Hangerő vezérlő doboz */
.volume-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.volume-control input {
  width: 100px; /* A hangerő csúszka szélessége */
}

/* Reszponzív stílusok kisebb képernyőkre */
@media (max-width: 768px) {
  header {
    padding: 15px;
  }

  h1 {
    font-size: 2em; /* Cím kisebb képernyőn */
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
    width: 80px; /* Kisebb csúszka szélesség mobilon */
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 1.5em; /* Cím még kisebb képernyőn */
  }

  .navbar-links {
    font-size: 0.9em;
  }

  .music-controls button {
    font-size: 1.2rem; /* Kisebb gombok mobilon */
  }
}
</style>
