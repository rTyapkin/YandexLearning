<template>
  <!-- Заголок -->
  <TheHeader text="Почему прогерство?" />

  <!-- Текстовый контент -->
  <p class="story__text story__text-first">
    Постараюсь быть кратким. В период обуения в школе я много рассуждал о будущем. Как и куда мне идти. Не то чтобы я нашел ответы на эти вопросы, но кое-что прояснилось: <span class="text-accent">я получаю удовольствие от программирования</span>. Для меня это стало возможностью реализовать себя творчески и заработать на этом немного денюжек. Это чувство, которое ты испытываешь после решения трудной задачи - не описать.
  </p>

  <!-- Текстовый контент -->
  <p class="story__text story__text-second">
    Да, возможно это не самая "творческая" профессия или хобби, но оно развязывает руки во всех областях и применяется в совсем неожиданных местах. Например, я работал в лагере и сделал пару<span class="text-accent"> крутых штук</span>, таких как: тест кабояши (по мотивам фильмы Игра Эндера, что-то типо морского боя против ботов), онлайн таблицу рейтинга и тд
  </p>

  <!-- Карусель примеров работ-->
  <carousel class="story__examples" :items-to-show="1.5">
    <slide v-for="slide in images" :key="slide">
      <img class="story__img" :src="getUrl(slide)" alt="">
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
/** @module TheHeader - Заголовок  */
import TheHeader from '@/components/TheHeader.vue'

/** @module Carousel - Библиотека карусели  */
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import imageUrl from '@/media/images/example1.jpg'

export default {
  name: 'StoryView',

  components: {TheHeader,Carousel, Slide,Pagination, Navigation },

  data() {
    return {
      images: ['example1', 'example2','example3'],
    }
  },

  methods: {
    /** @function
     * @name getUrl - Получение ссылки на файл */
    getUrl(name) {
      return new URL(`../media/images/${name}.jpg`, import.meta.url).href
    }
  },
}
</script>

<style lang="scss" scoped>
.story {
  &__img {
    width: 100%;
    border: 1px solid var(--mainWhite);

    &:last-child {
      margin: 16px 0;
    }
  }

  &__examples {
    width: 100%;
    padding-top: 40px;
  }

  &__text {
    color: var(--mainWhite);

    &-second {
      padding-top: 16px;
    }
  }
}
</style>