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

    <div v-if="movies.length">
      <h2>Movie List</h2>
        <div v-for="(movie, index) in movies" :key="index">
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
  data() {
    name: 'MovieForm'
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
      }
    };
  },
  methods: {
    addMovie() {
      // Add the new movie object to the movies array
      this.movies.push({ ...this.newMovie });

      // Reset the form fields
      this.newMovie = {
        title: '',
        director: '',
        imdbLink: '',
        releaseDateUK: '',
        synopsis: ''
      };
    },
    deleteMovie(index) {
        // Remove the movie at the given index from the movies array
        this.movies.splice(index, 1);
    }
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
