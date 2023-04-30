/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        // './src/app/**/*.{js,ts,jsx,tsx}',
        // './src/pages/**/*.{js,ts,jsx,tsx}',
        // './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'black-primary' : '#2D2A32',
                'white-primary' : '#FAFDF6',
                'white-secondary' : '#ffffff20',
                'purple-primary' : '#4949E4',
                'purple-secondary' : '#9BA2FF',
                'blue-primary' : '#61DBFB',
                'blue-secondary' : '#61dcfb30',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
