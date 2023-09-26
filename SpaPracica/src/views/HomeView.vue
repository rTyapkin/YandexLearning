<template>
  <!-- Описание -->
  <div class="desc">
    <!-- Текстовый контент -->
    <div class="desc__content">
      <!-- Подзаголовок -->
      <h3 class="desc__subtitle">Рома - <span class="accent">front-end разработчик</span></h3>

      <!-- Текст-->
      <p class="desc__text">Но он не всегда был таким. <span class="text-accent">Нажми на картинку</span> и узри, каким он был всего 2 года назад</p>

      <!-- Текст-->
      <p :class="{ 'desc__joke-active': showPast }" class="desc__joke">Да, не так много изменилось. Зато глянь, какая стиралка!</p>
    </div>

    <!-- Фото -->
    <div class="desc__imgs" @click="setVisiblePast">
      <!-- Фото нынешнее-->
      <img :class="{'desc__img-active': !showPast}" class="desc__img" src="../media/images/fest.jpg" alt="Сейчас" >

      <!-- Фото старое -->
      <img :class="{'desc__img-active': showPast}" class="desc__img" src=../media/images/past.jpg alt="2 года назад">
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',

  data() {
    return {
      showPast: false,
    }
  },

  methods: {
    /** @function
     * @name setVisiblePast - Установка отображения прошлого */
    setVisiblePast() {
      this.showPast = !this.showPast
    }
  }
}
</script>

<style lang="scss" scoped>
.desc {
  color: var(--mainWhite);
  display: flex;
  justify-content: space-between;
  gap: 32px;

  &__joke {
    opacity: 0;
    height: 0;
    border: 1px solid var(--mainWhite);
    width: fit-content;
    font-size: 16px;
    font-weight: bold;
    transition: all .15s ease-in-out;

    &-active {
      padding: 32px;
      margin-top: 100px;
      height: unset;
      opacity: 1;
    }
  }

  &__imgs {
    cursor: pointer;
    width: 50%;
  }

  &__img {
    opacity: 0;
    transition: opacity .15s ease-in-out;
    width: 0;

    &-active {
      opacity: 1;
      width: 100%;
      border: 1px solid var(--mainWhite);
    }
  }

  &__content {
    width: 50%;
  }

  &__subtitle {
    font-size: 32px;
    font-weight: bold;
    padding-bottom: 32px;
  }
}

@media all and (max-width: 500px) {
  .desc {
    display: flex;
    flex-direction: column;

    &__content {
      width: 100%;
      height: fit-content;
    }

    &__joke {
      &-active {
        margin-top: 12px;
      }
    }

    &__imgs {
      width: 100%;
    }
  }
}
</style>