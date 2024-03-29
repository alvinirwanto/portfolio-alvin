/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        // './src/app/**/*.{js,ts,jsx,tsx}',
        // './src/pages/**/*.{js,ts,jsx,tsx}',
        // './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1600px',
        },
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
            keyframes: {
                slideDown: {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                slideUp: {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
                slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
            },
    },
},
    plugins: [],
}
