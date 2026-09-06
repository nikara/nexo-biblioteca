tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#E63329',
                primaryHover: '#A31B14',
                disabled: '#6e6e6e',
                background: '#F5F0E8',
                backgroundDark: '#0F0F0F',
                text: '#F5F0E8',
                textGray: '#666666',
                textDark: '#0F0F0F',
                border: '#0F0F0F',
            },

            fontFamily: {
                display: ['"Abril Fatface"', 'serif'],
                sans: ['"Work Sans"', 'sans-serif']
            },

            keyframes: {
                marquee: {
                    '0%': {
                        transform: 'translateX(0)'
                    },
                    '100%': {
                        transform: 'translateX(-50%)'
                    }
                }
            },

            animation: {
                marquee: 'marquee 25s linear infinite'
            }
        }
    }
}