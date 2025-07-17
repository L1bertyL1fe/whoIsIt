<template>
  <div class="min-h-screen bg-gray-900 flex flex-col items-center justify-center relative">
    <h1 class="text-fuchsia-200 text-center text-3xl font-heading mb-8
                      animate-fade-in-down animate-duration-30000">Who Is It?</h1>

    <div class="flex gap-4">
      <button class="bg-purple-500
                hover:bg-purple-600
                text-white
                font-medium
                py-3 px-8
                rounded-lg
                transition-all
                duration-300
                hover:scale-105">
        Начать игру</button>

      <button class="border-gray-600
              text-white
              py-3 px-8
              rounded-lg
              transition-all
              duration-300
              hover:scale-105
            hover:bg-gray-500">
        О игре
      </button>

    </div>
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-2"></div>
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent mb-2"></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
</style>
