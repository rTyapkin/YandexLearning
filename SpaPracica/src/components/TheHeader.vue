<template>
  <div class="header">
    <!-- Содеражние заголовка -->
    <h2 class="header__text"><span class="accent">#</span> {{ text }}</h2>

    <!-- Линия -->
    <div class="header__line" />
  </div>
</template>

<script>
export default {
  name: 'TheHeader',

  props: {
    /** @param {string} text - Текст заголовка */
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  gap: 16px;
  align-items: center;
  padding-bottom: 48px;

  &__line {
    width: 50%;
    height: 1px;
    background-color: var(--mainPurpul);
  }

  &__text {
    font-size: 32px;
  }
}

@media all and (max-width: 500px) {
  .header {
    padding-bottom: 24px;

    &__text {
      font-size: 20px;
    }

    &__line {
      width: 30%;
    }
  }
}
</style>