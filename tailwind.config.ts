import type { Config } from 'tailwindcss'

export default <Config> {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue'
    ],
    theme: {
        extend: {
            fontFamily:{
                sans: ['Inter', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif']
            },
            animation:{
                'fade-in-down': 'fadeInDown 2s ease-out'
            },
            keyframes:{
                fadeInDown:{
                    '0%': {opacity: '0', transForm: 'translateY(-20px)'},
                    '50%': {opacity: '0', transForm: 'translateY(-10px)'},
                    '100%': {opacity: '1', transForm: 'translateY(0)'}
                },
            }
        },
    },

    plugins: [],
}