<template>
  <!-- Заголок -->
  <TheHeader text="Задание JS" />

  <!-- Текстовый контент -->
  <p class="task__text">
    Хочешь <span class="text-accent">прокачаться в JS</span> но не знаешь, чего поделать? Вот тогда тебе задание! Сделай маленькую игру, смысл которой - нажимать на <span class="text-accent">появляющиеся разноцветные кружки</span>. Начни с системы генерации кружков, потом клика по ним, а потом уже системы очков и таймера. Я уверен, <span class="text-accent">тебе понравится!</span>
  </p>

  <!-- Подзаголовок -->
  <h3 class="task__subtitle">Вот тебе пример, как это вижу я: </h3>

  <!-- Кнопка начать -->
  <button class="task__button" @click="startGame">Начать!</button>

  <!-- Поле игры-->
  <div ref="gameField" class="game">
    <div v-if="started" class="game__counter">Очки: {{ points }}</div>
    <div v-show="started" ref="ball" class="game__ball" @click="generateBall(false)" />
  </div>
</template>

<script>
/** @module TheHeader - Заголовок  */
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'TaskView',
  
  components: {TheHeader},

  data() {
    return {
      points: 0,
      started: false,
      sizes: { max: 48, min: 12 },
    }
  },

  methods: {
    /** @function
     * @name random - Рандомное число в промежутке */
    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },

    /** @function
     * @name startGame - Начать игру */
    startGame() {
      if (this.started) return

      this.generateBall(true)
      this.started = true
    },

    /** @function
     * @name generateBall - Генерация шарика */
    generateBall(fromStart = false) {
      if(!fromStart) this.points++

      let size, x ,y
      size = this.random(this.sizes.min, this.sizes.max)

      const { offsetLeft, clientWidth, offsetTop, clientHeight } = this.$refs.gameField

      x = this.random(offsetTop + size, offsetTop + clientHeight- size)
      y = this.random(offsetLeft + size, offsetLeft + clientWidth - size)

      const { ball } = this.$refs

      ball.style.backgroundColor = `rgb(${this.random(1,255)}, ${this.random(1,255)}, ${this.random(1,255)})`
      ball.style.width = ball.style.height = `${size}px`
      ball.style.left = `${y}px`
      ball.style.top = `${x}px`
    },
  },
}
</script>

<style lang="scss" scoped>
.task {
  &__subtitle {
    padding: 24px 0;
  }

  &__button {
    background-color: transparent;
    border: 1px solid var(--mainPurpul);
    padding: 8px 16px;
    color: var(--mainWhite);
    cursor: pointer;
    margin: 8px;
  }
}

.game {
  border: 1px solid var(--mainWhite);
  width: 100%;
  height: calc(100vh / 2);
  background-color: var(--mainGray);

  &__ball {
    position: absolute;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid var(--mainWhite)
  }

  &__counter {
    font-weight: bold;
    margin: 8px;
  }
}
</style>