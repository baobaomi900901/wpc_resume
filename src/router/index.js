import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
// createWebHistory
// createWebHashHistory, 带哈希值 #

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";

const routes = [
    {
        path: "/",
        component: Home,
        name: "Home",
    },
    {
        path: "/about",
        component: About,
        name: "About",
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
