<script>
import { RouterLink, RouterView } from "vue-router";
import { computed } from "vue";

export default {
  provide() {
    return {
      searchQuery: computed(() => this.searchQuery),
    };
  },
  watch: {
    searchWordInput(data) {
      if (!data) {
        this.searchQuery = null;
      } else {
        this.searchQuery = data;
      }
    },
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
      searchQuery: null,
      searchQueryInput: null,
    };
  },
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    }
  },
  methods: {
    performSearch() {
      this.searchQuery = this.searchQueryInput;
    }
  }
};
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

          <div v-if="!isHomePage" class="d-flex align-items-center search-container" role="search">
            <label for="searchQuery" class="form-label text-nowrap m-0 search-label"></label>
            <input id="searchQuery" class="form-control me-2 ms-2 search-input" type="search" aria-label="Search"
              v-model="searchQueryInput" @keyup.enter="performSearch" />
            <button class="btn btn-outline-danger search-button" type="submit" @click="performSearch">Search</button>
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

/* Keresősáv és header reszponzív megjelenítés */
.search-container {
  margin-top: 20px;
}

.search-input {
  width: 250px;
}

.search-button {
  padding: 6px 12px;
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

  .search-container {
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
  }

  .search-input {
    width: 100%;
    margin-bottom: 10px;
  }

  .search-button {
    width: 100%;
  }
}

/* Reszponzív stílusok nagyon kis képernyőkre */
@media (max-width: 576px) {
  h1 {
    font-size: 1.5em;
  }

  .navbar-links {
    font-size: 0.9em;
  }

  .search-input {
    width: 100%;
  }

  .search-button {
    width: 100%;
    padding: 8px;
  }
}
</style>