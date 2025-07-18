<template>
  <main class="min-h-screen bg-gray-900 flex flex-col items-center justify-center relative p-4">
    <section class="w-full max-w-2xl bg-purple-600 rounded-lg shadow-2xl overflow-hidden">
      <header class="bg-gradient-to-r from-purple-400 to-violet-700 p-4">
        <h1 class="text-center text-white font-heading font-extrabold text-2xl">Правила игры</h1>
      </header>

      <article class="p-6 space-y-6">
        <div v-for="(rule, index) in rules" :key="index" class="flex items-start gap-3">
          <div
              class="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center text-white font-bold transition-all hover:scale-110"
              :class="rule.color"
          >
            {{ index + 1 }}
          </div>
          <p class="text-white font-heading">{{ rule.text }}</p>
        </div>
      </article>
    </section>

    <button
        @click="navigateToHome"
        class="bg-purple-500 hover:bg-purple-600 text-white mt-10 font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 shadow-lg flex items-center"
    >
      Назад
    </button>

    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-700 to-transparent"></div>
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-800 to-transparent"></div>
  </main>
</template>

<script setup lang="ts">
interface GameRule {
  text: string
  color: string
}

const rules: GameRule[] = [
  {
    text: 'ИИ генерирует изображение знаменитости в необычном стиле, месте.🤖',
    color: 'bg-green-500'
  },
  {
    text: 'Вам нужно будет отгадать кто на картинке и лутать за это очки.💯',
    color: 'bg-yellow-400'
  },
  {
    text: 'Игра на время, поторопись! Чем больше проходишь, тем сложнее уровень 🤫',
    color: 'bg-red-400'
  }
]

const navigateToHome = () => {
  navigateTo('/')
}
</script>