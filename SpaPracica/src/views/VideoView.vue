<template>
  <!-- Заголок -->
  <TheHeader text="Фишечка CSS" />

  <!-- Текстовый контент -->
  <p class="video__text">Хочешь узнать маленькую <span class="text-accent">CSS фишку?</span> Знаю, хочешь. Тогда <span class="text-accent">кликай</span> по видосу ниже! Хоть я и не блоггер, снимать особо не умею, но новому научу!</p>

  <!-- Видео -->
  <video class="player" controls>
    <source src="../media/videos/fishka.mp4">
  </video>
</template>

<script>
/** @module TheHeader - Заголовок  */
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'VideoView',

  components: {TheHeader},
}
</script>

<style lang="scss" scoped>
.player {
  width: 100%;
  cursor: pointer;
  border: 1px solid var(--mainWhite);
  margin-bottom: 12px;
}

.accent {
  font-weight: bold;
}

.video {
  &__text {
    padding-bottom: 12px;
  }
}
</style>