<template>
  <div class="music-player">
    <!-- Audio elem -->
    <!-- Az audio lejátszó elem: az 'audio' tag tartalmazza a zene forrást és vezérli a lejátszást -->
    <audio ref="audio" :src="audioSrc" :loop="true" :muted="muted" autoplay />
    
    <div class="music-controls">
      <!-- Play/Pause gomb ikon -->
      <!-- Gomb a zene lejátszásának/megállításának vezérlésére -->
      <button @click="toggleMusic">
        <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
      </button>

      <!-- Mute/Unmute gomb ikon -->
      <!-- Gomb a zene némításának/újra hangosításának vezérlésére -->
      <button @click="toggleMute">
        <i :class="muted ? 'fas fa-volume-mute' : 'fas fa-volume-up'"></i>
      </button>

      <!-- Hangerő ikonok és csúszka -->
      <!-- Hangerő vezérlő rész, ami tartalmazza a hangerő csökkentő és növelő gombokat, valamint egy csúszkát -->
      <div class="volume-control">
        <!-- Hangerő csökkentése gomb -->
        <button @mousedown="startVolumeDecrease" @mouseup="stopVolumeChange" @mouseleave="stopVolumeChange">
          <i class="fas fa-volume-down"></i>
        </button>

        <!-- Hangerő csúszka a hangerő beállítására -->
        <input id="volume" type="range" min="0" max="1" step="0.01" v-model="volume" @input="updateVolume" />

        <!-- Hangerő növelése gomb -->
        <button @mousedown="startVolumeIncrease" @mouseup="stopVolumeChange" @mouseleave="stopVolumeChange">
          <i class="fas fa-volume-up"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Állapot, hogy a zene lejátszódik-e
      isPlaying: false, // Kezdetben nem játszódik a zene
      // Állapot a némításhoz
      muted: true, // Kezdetben némított
      // Állapot a hangerő szabályozásához (max 1)
      volume: 1, // Kezdeti hangerő (maximális)
      // A zene fájl elérési útja
      audioSrc: '/public/Zene/Genesis.mp3', // A zene fájl elérési útja
      // Interval a hangerő folyamatos változtatásához
      volumeInterval: null, // Interval a hangerő folyamatos változtatásához
    };
  },
  methods: {
    // Play/Pause funkciók vezérlése
    toggleMusic() {
      if (this.isPlaying) {
        // Ha a zene játszódik, megállítjuk
        this.$refs.audio.pause();
      } else {
        // Ha a zene áll, elindítjuk
        this.$refs.audio.play();
      }
      // A lejátszás állapotának váltása
      this.isPlaying = !this.isPlaying;

      // A lejátszási állapot tárolása a localStorage-ban
      localStorage.setItem('isPlaying', this.isPlaying ? 'true' : 'false');
    },

    // Mute/Unmute funkciók vezérlése
    toggleMute() {
      // A némítást váltjuk
      this.muted = !this.muted;
      // A némítás állapotának alkalmazása az audio elemre
      this.$refs.audio.muted = this.muted;
      // A némítás állapotának tárolása a localStorage-ban
      localStorage.setItem('muted', this.muted ? 'true' : 'false');
    },

    // Hangerő frissítése a csúszka értéke alapján
    updateVolume() {
      // Alkalmazza a jelenlegi hangerőt az audio elemre
      this.$refs.audio.volume = this.volume;
      // A hangerő tárolása a localStorage-ban
      localStorage.setItem('volume', this.volume);
    },

    // Hangerő csökkentésének indítása, ha a gombot nyomva tartjuk
    startVolumeDecrease() {
      if (this.volume > 0) {
        // Interval létrehozása a hangerő fokozatos csökkentésére
        this.volumeInterval = setInterval(() => {
          if (this.volume > 0) {
            this.volume -= 0.01; // A hangerő csökkentése
            this.updateVolume(); // A hangerő frissítése az audio elemre
          }
        }, 50); // Minden 50 ms-ban frissítjük
      }
    },

    // Hangerő növelésének indítása, ha a gombot nyomva tartjuk
    startVolumeIncrease() {
      if (this.volume < 1) {
        // Interval létrehozása a hangerő fokozatos növelésére
        this.volumeInterval = setInterval(() => {
          if (this.volume < 1) {
            this.volume += 0.01; // A hangerő növelése
            this.updateVolume(); // A hangerő frissítése az audio elemre
          }
        }, 50); // Minden 50 ms-ban frissítjük
      }
    },

    // Megállítja a hangerő változtatását, ha elengedjük a gombot
    stopVolumeChange() {
      // Az interval törlése és a hangerő változtatás megállítása
      clearInterval(this.volumeInterval);
      this.volumeInterval = null;
    },
  },
  mounted() {
    // A komponens betöltésekor ellenőrizzük a localStorage-ban tárolt adatokat
    const isPlaying = localStorage.getItem('isPlaying') === 'true';
    const muted = localStorage.getItem('muted') === 'true';
    const volume = parseFloat(localStorage.getItem('volume')) || 1;

    // A tárolt állapotok alkalmazása
    this.isPlaying = isPlaying;
    this.muted = muted;
    this.volume = volume;

    // A hangerő és a némítás alkalmazása az audio elemre
    this.$refs.audio.volume = volume;
    this.$refs.audio.muted = muted;

    // Ha a zene már előzőleg lejátszásra került, automatikusan elindítjuk
    if (isPlaying) {
      this.$refs.audio.play();
    } else {
      this.isPlaying = false;
    }
  },
  beforeDestroy() {
    // A komponens törlésekor leállítjuk a zenét
    this.$refs.audio.pause();
  }
};
</script>

<style scoped>
.music-player {
  display: flex;
  align-items: center;
  gap: 20px;
  color: #fff;
}

.music-controls button {
  background: none;
  border: none;
  padding: 10px;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  /* Ikonok mérete */
}

.music-controls button:hover {
  color: #ff4757; /* Hover hatás */
}

.volume-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.volume-control input {
  width: 100px;
  /* Csúszka szélessége */
}

.volume-control button {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}

.volume-control button:hover {
  color: #ff4757; /* Hover hatás */
}

.volume-control input {
  width: 100px;
  /* Csúszka szélessége */
}
</style>
