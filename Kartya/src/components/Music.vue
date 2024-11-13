<template>
  <div class="music-player">
    <!-- Audio elem -->
    <audio ref="audio" :src="audioSrc" :loop="true" :muted="muted" />

    <div class="music-controls">
      <!-- Play/Pause gomb ikon -->
      <button @click="toggleMusic">
        <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
      </button>

      <!-- Mute/Unmute gomb ikon -->
      <button @click="toggleMute">
        <i :class="muted ? 'fas fa-volume-mute' : 'fas fa-volume-up'"></i>
      </button>

      <!-- Hangerő ikonok és csúszka -->
      <div class="volume-control">
        <button @mousedown="startVolumeDecrease" @mouseup="stopVolumeChange" @mouseleave="stopVolumeChange">
          <i class="fas fa-volume-down"></i>
        </button>

        <!-- Hangerő csúszka -->
        <input id="volume" type="range" min="0" max="1" step="0.01" v-model="volume" @input="updateVolume" />

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
      isPlaying: false, // Kezdetben nem játszódik a zene
      muted: false, // Alapértelmezés szerint nem némított
      volume: 1, // Kezdeti hangerő (maximális)
      audioSrc: '/public/Zene/Genesis.mp3', // Zene fájl elérési útja
      volumeInterval: null, // Interval a hangerő folyamatos változtatásához
    };
  },
  methods: {
    // Play/Pause vezérlés
    toggleMusic() {
      if (this.isPlaying) {
        this.$refs.audio.pause();
      } else {
        this.$refs.audio.play();
      }
      this.isPlaying = !this.isPlaying;

      // Tároljuk a lejátszás állapotát a localStorage-ban
      localStorage.setItem('isPlaying', this.isPlaying ? 'true' : 'false');
    },

    // Mute/Unmute vezérlés
    toggleMute() {
      this.muted = !this.muted;
      this.$refs.audio.muted = this.muted;
      localStorage.setItem('muted', this.muted ? 'true' : 'false');
    },

    // Hangerő változtatása
    updateVolume() {
      this.$refs.audio.volume = this.volume; // Alkalmazza a hangerőt a zenére
      localStorage.setItem('volume', this.volume); // Hangerő mentése
    },

    // Hangerő változtatás kezdete (csökkentés)
    startVolumeDecrease() {
      if (this.volume > 0) {
        this.volumeInterval = setInterval(() => {
          if (this.volume > 0) {
            this.volume -= 0.01; // Csökkenti a hangerőt
            this.updateVolume();
          }
        }, 50); // 50 ms-enként csökkentjük
      }
    },

    // Hangerő változtatás kezdete (növelés)
    startVolumeIncrease() {
      if (this.volume < 1) {
        this.volumeInterval = setInterval(() => {
          if (this.volume < 1) {
            this.volume += 0.01; // Növeli a hangerőt
            this.updateVolume();
          }
        }, 50); // 50 ms-enként növeljük
      }
    },

    // Leállítja a hangerő változtatását
    stopVolumeChange() {
      clearInterval(this.volumeInterval); // Megállítja a folyamatos hangerő változtatást
      this.volumeInterval = null;
    },
  },
  mounted() {
    // Ellenőrizzük a localStorage-ban tárolt adatokat
    const isPlaying = localStorage.getItem('isPlaying') === 'true';
    const muted = localStorage.getItem('muted') === 'true';
    const volume = parseFloat(localStorage.getItem('volume')) || 1;

    this.isPlaying = isPlaying;
    this.muted = muted;
    this.volume = volume;

    // Alkalmazzuk a tárolt adatokat
    this.$refs.audio.volume = volume;
    this.$refs.audio.muted = muted;

    if (isPlaying) {
      this.$refs.audio.play();
    }
  },
  beforeDestroy() {
    // Zene megállítása a komponens törlésénél
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
  color: #ff4757;
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
  color: #ff4757;
}

.volume-control input {
  width: 100px;
  /* Csúszka szélessége */
}
</style>
