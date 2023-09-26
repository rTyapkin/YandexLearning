<template>
  <!-- Заголок -->
  <TheHeader text="Ссылка на репу" />

  <p class="link__text">А вот и <span class="text-accent">ОНА</span>, ссылочка на гит:</p>

  <!-- Ссылка на репу -->
  <a class="link__accent text-accent" href="https://github.com/CommissarTrix/YandexLearning">ТЫК</a>

  <div class="link__joke">
    <!-- Шутка -->
    <p class="link__text link__text-second">
      Да, мой гит пуст, это правда. Почти весь<span class="text-accent"> свой опыт</span> я наработал <span class="text-accent">в компании</span>, где дал честно слово, что больше <span class="text-accent">никому не дам тот код, на которым работал.</span> А те проекты, которые писал для себя - несколько стыдно показывать. Зато у меня есть вот какой котик:
    </p>

    <!-- Изображение котика-->
    <img class="link__img" src="../media/images/cat.jpg" alt="">
  </div>
</template>

<script>
/** @module TheHeader - Заголовок  */
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'LinkView',

  components: {TheHeader},
}
</script>

<style lang="scss" scoped>
.link {
  &__accent{
    padding: 12px 0;
    font-size: 32px;
    text-align: center;
    margin: auto;
    display: block;
  }

  &__img {
    padding-top: 12px;
    height: calc(100vh - 64px);
    display: block;
    margin: auto;
  }

  &__joke {
    margin-top: 24px;
    padding: 32px;
    border: 1px solid var(--mainWhite);
  }
}

@media all and (max-width: 500px) {
  .link {
    &__img {
      height: unset;
      width: 100%;
    }
  }
}
</style>