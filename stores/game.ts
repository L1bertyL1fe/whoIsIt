import { defineStore } from "pinia";

// 1. Четко типизируем ответ API
interface StableDiffusionResponse {
    output: [string] | []; // Массив с одним URL или пустой
    status: string;
    message?: string;
}

// 2. Тип для знаменитости
interface Celebrity {
    name: string;
    imageUrl: string; // Гарантируем, что всегда будет string
}

export const useGameStore = defineStore('game', {
    state: () => ({
        score: 0,
        timeLeft: 30,
        celebrity: null as Celebrity | null,
        apiKey: process.env.NUXT_STABLE_DIFFUSION_API_KEY || '',
        isGameStart: false,
        isGenerating: false,
    }),

    actions: {
        // 3. Метод всегда возвращает string (никогда undefined)
        async generateImage(name: string): Promise<string> {
            this.isGenerating = true;

            try {
                const prompt = `${name} celebrity cartoon style`;
                const response = await $fetch<StableDiffusionResponse>(
                    'https://stablediffusionapi.com/api/v3/text2img',
                    {
                        method: 'POST',
                        body: {
                            key: this.apiKey,
                            prompt,
                            width: '512',
                            height: '512',
                            samples: '1'
                        }
                    }
                );

                // 4. Явная проверка с приведением типа
                if (!response.output?.length) {
                    throw new Error('No image generated');
                }

                // 5. response.output[0] точно string (благодаря интерфейсу)
                return response.output[0] || this.getDefaultImageUrl();

            } catch (error) {
                console.error('Image generation failed:', error);
                return this.getDefaultImageUrl(); // Всегда возвращает string
            } finally {
                this.isGenerating = false;
            }
        },

        // 6. Метод гарантированно возвращает string
        getDefaultImageUrl(): string {
            return '/default-celebrity.jpg';
        },

        // 7. Безопасное создание знаменитости
        async loadNewCelebrity() {
            const names = ["Tom Cruise", "Angelina Jolie"] as const;
            const randomName = names[Math.floor(Math.random() * names.length)];

            // 8. await всегда возвращает string (благодаря generateImage)
            const imageUrl = await this.generateImage(randomName);

            this.celebrity = {
                name: randomName,
                imageUrl: imageUrl // imageUrl - точно string
            };
        },

        startGame() {
            this.isGameStart = true;
        }
    }
});