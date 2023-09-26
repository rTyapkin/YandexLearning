<template>
  <nav class="menu">
    <!-- А-ля логотип -->
    <h4 class="menu__logo">ТяпоГрафия</h4>

    <!-- Меню навагиции -->
    <div class="menu-nav">
      <router-link class="menu-nav__item" v-for="(route, i) in routes" :key="i" :to="route.path">
        <span class="accent">#</span> {{route.name}}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheMenu',

  computed: {
    /** @computed
     * @name routes - Возвращает роуты */
    routes() {
      return this.$router.options.routes
    }
  }
}
</script>

<style lang="scss" scoped>
.menu{
    padding: 40px 0 70px 0;
    font-size: 16px;
    display: flex;
    justify-content: space-between;

    &__logo {
      font-weight: bold;
      font-style: italic;
    }

    &__item {
      font-size: 16px;
    }

    &-nav{
      display: flex;
      gap: 30px;
    }
  }

@media all and (max-width: 500px) {
  .menu {
    padding: 20px 0 35px;
    flex-direction: column;

    &-nav {
      padding-top: 5px;
      gap: unset;
      justify-content: space-between;
    }
  }
}
</style>