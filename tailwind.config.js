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
                'black-primary': 'var(--black-primary)',
                'white-primary': 'var(--white-primary)',
                'white-secondary': 'var(--white-secondary)',
                'purple-primary': 'var(--purple-primary)',
                'purple-secondary': 'var(--purple-secondary)',
                'blue-primary': 'var(--blue-primary)',
                'blue-secondary': 'var(--blue-secondary)',
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
