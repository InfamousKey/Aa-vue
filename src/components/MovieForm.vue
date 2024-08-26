<template>
  <div>
    <form @submit.prevent="addMovie">
      <div>
        <label for="title">Title:</label>
        <input v-model="newMovie.title" type="text" id="title" required />
      </div>

      <div>
        <label for="director">Director:</label>
        <input v-model="newMovie.director" type="text" id="director" required />
      </div>

      <div>
        <label for="imdbLink">IMDB Link:</label>
        <input v-model="newMovie.imdbLink" type="url" id="imdbLink" required />
      </div>

      <div>
        <label for="releaseDateUK">Release Date (UK):</label>
        <input v-model="newMovie.releaseDateUK" type="date" id="releaseDateUK" required />
      </div>

      <div>
        <label for="synopsis">Synopsis:</label>
        <textarea v-model="newMovie.synopsis" id="synopsis" required></textarea>
      </div>

      <button type="submit">Add</button>
    </form>

    <div>
      <label for="sortOptions">Sort by:</label>
      <select id="sortOptions" v-model="sortBy">
        <option value="title">Title</option>
        <option value="releaseDateUK">Release Date</option>
        <option value="director">Director</option>
      </select>
    </div>

    <div v-if="sortMovies.length">
      <h2>Movie List</h2>
      <div v-for="(movie, index) in sortMovies" :key="index">
        <h3>{{ movie.title }}</h3> - {{ movie.releaseDateUK }} 
        <p>directed by {{ movie.director }}</p>
        <p>See more on <a :href="movie.imdbLink" target="_blank" rel="noopener noreferrer">
            IMDB
          </a>
        </p>
        <button @click="deleteMovie(index)">Delete Movie</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieForm',
  data() {
    return {
      // Existing array to store movies
      movies: [],
      // Object to hold form input values
      newMovie: {
        title: '',
        director: '',
        imdbLink: '',
        releaseDateUK: '',
        synopsis: ''
      },
      // Selected sorting option
      sortBy: 'title' // Default sorting by title
    };
  },
  computed: {
    sortMovies() {
      return [...this.movies].sort((a, b) => {
        if (this.sortBy === 'title') {
          return a.title.localeCompare(b.title);
        } else if (this.sortBy === 'releaseDateUK') {
          return new Date(a.releaseDateUK) - new Date(b.releaseDateUK);
        } else if (this.sortBy === 'director') {
          return a.director.localeCompare(b.director);
        }
        return 0; // If sortBy doesn't match any case
      });
    }
  },
  methods: {
    addMovie() {
      this.movies.push({ ...this.newMovie });

      // Reset the form
      this.newMovie = {
        title: '',
        director: '',
        imdbLink: '',
        releaseDateUK: '',
        synopsis: ''
      };
    },
    deleteMovie(index) {
      this.movies.splice(index, 1);
    },
  }
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}
div {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}
button {
  padding: 8px 12px;
}
</style>
