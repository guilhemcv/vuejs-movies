import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import BackToTop from 'vue-backtotop'
 


const app = createApp(App);


app.use(router);
app.use(BackToTop)

app.mount('#app');
