/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            colors: {
                primary: '#6d4c41',
                secondary: '#a1887f',
                accent: '#ff8a65',
                'yarn-peach': '#FFF5F1',
                'yarn-rose': '#FFE4E1',
                'yarn-orange': '#F97316',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'slide-up': {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-left': {
                    '0%': { opacity: '0', transform: 'translateX(-40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'slide-right': {
                    '0%': { opacity: '0', transform: 'translateX(40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            },
            animation: {
                'fade-in': 'fade-in 1.2s ease-out forwards',
                'slide-up': 'slide-up 1.2s ease-out forwards',
                'slide-left': 'slide-left 1.2s ease-out forwards',
                'slide-right': 'slide-right 1.2s ease-out forwards',
                'float': 'float 3s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
