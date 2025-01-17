import { createApp } from 'vue';
import App from './App.vue';

import ScrollAnimation from "./scrollA"

import './assets/main.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { MotionPlugin } from '@vueuse/motion';

import { createWebHistory, createRouter } from 'vue-router'
import PageHome from "./pages/PageHome.vue";
import PageAbout from "./pages/PageAbout.vue";
import PageGallery from "./pages/PageGallery.vue";
import PageChampionsStory from "./pages/PageChampionsStory.vue"
import PageTest from './pages/PageTest.vue';
import PageTT from "./pages/PageTechTips.vue";
import Page404 from './pages/Page404.vue';
import PageRules from './pages/PageRules.vue';


const routes = [
    { path: '/', component: PageHome },
    { path: '/about', component: PageAbout },
    { path: '/champions-story', component: PageChampionsStory },
    { path: '/technical-tips', component: PageTT },
    { path: '/gallery', component: PageGallery },
    { path: '/blogs', component: PageTest },
    // { path: '/form', component: PageForm },
    // { path: '/admin', component: PageAdmin },
    // { path: '/semi', component: Semi },
    { path: '/rules', component: PageRules },
    // { path: '/blog2', component: PageBlog2 },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: Page404 },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);

// Register the custom directive
app.directive('scroll-animation', ScrollAnimation);

app.use(vuetify);
app.use(MotionPlugin);
app.use(router);
app.mount('#app');
