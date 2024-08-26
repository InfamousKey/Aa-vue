import './assets/main.scss'

import { createApp } from 'vue'
import MovieForm from './components/MovieForm.vue'
import type { MovieList } from './types';
//import App from './App.vue' // Could replace the contents of the #app div in index.html with a stand-alone App.vue module i.e. createApp(App).mount('#app')


(window as any)['aa'] = {
    initialize: (movies: MovieList) => {
        createApp({
            components: {
                MovieForm
            },
            data() {
                return movies
            }
        }).mount('#app');
    }
}