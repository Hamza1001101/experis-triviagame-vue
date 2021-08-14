import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
//import QuestionsPage from  "@/views/QuestionsPage.vue"


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/questions-page",
        name: "QuestionsPage",
        props: true,
        component: () => import('@/views/QuestionsPage.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;