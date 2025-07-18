import {defineStore} from "pinia";

export const useGameStore = defineStore('game', {
    state: () => ({
        score: 0,
        timeLeft: 30,
        celebrity: null as string | null,
        isGameStart: false,
    }),
    actions:{
        startGame() {
            this.isGameStart = true
        }
    }
})