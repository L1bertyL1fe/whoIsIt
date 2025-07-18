<template>
  <main class="min-h-screen bg-gray-900 flex justify-center items-center flex-col gap-y-6 relative ">
    <header class="bg-gradient-to-r from-purple-400 to-violet-700 p-4 w-30 mt-5 w-full max-w-md mx-auto rounded-lg">
      <h1 class="text-center text-white font-heading font-extrabold text-xl">Who Is It?</h1>
    </header>


    <div class="w-full max-w-xs flex justify-center mb-4">
      <img src= 'https://avatars.mds.yandex.net/i?id=b8f2a99fa7701586a6311b1093c92cb980b3f1ff-5707320-images-thumbs&n=13' class="max-h-64" alt="Загаданная знаменитость">
    </div>

    <input class="w-full max-w-xs px-4 py-2 rounded-lg text-center mb-4">

    <button class="w-full max-w-xs px-6 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-700 transition-colors"
            :disabled="!gameStore.isGameStart"
    >
      {{ gameStore.isGameStart ? 'Отправить' : 'Начать игру' }}
    </button>

    <div class="flex gap-x-8 justify-center mt-4 text-white">
      <p>Очки: {{gameStore.score}}</p>
      <p>Время: </p>
    </div>
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-700 to-transparent"></div>
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-800 to-transparent"></div>
  </main>
</template>

<script setup lang="ts">
import {useGameStore} from "~/stores/game";
import {reactive, ref} from "vue";

const gameStore = useGameStore();
const userAnswer = ref('');
</script>