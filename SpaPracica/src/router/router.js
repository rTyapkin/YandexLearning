import { createWebHistory, createRouter } from 'vue-router'

/** @module HomeView - Домашняя страница */
import HomeView from '@/views/HomeView.vue'

/** @module StoryView - Страница истории */
import StoryView from '@/views/StoryView.vue'

/** @module LinkView - Страница ссылки */
import LinkView from '@/views/LinkView.vue'

/** @module VideoView - Страница видео */
import VideoView from '@/views/VideoView.vue'

/** @module TaskView - Страница задания */
import TaskView from '@/views/TaskView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/story',
        name: 'story',
        component: StoryView,
    },
    {
        path: '/link',
        name: 'link',
        component: LinkView,
    },
    {
        path: '/video',
        name: 'video',
        component: VideoView,
    },
    {
        path: '/task',
        name: 'task',
        component: TaskView,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
