module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'textdark': '#2C2C2C',
        'textmedium': '#928F8B',
        'textlight': '#F9F9F9',
        'backgroundgray': '#F3F1EF',
        'backgroundblack': '#2C2C2C',
        'lilac': '#E8CFFC',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        yipes: ['yipes', 'sans-serif'],
        poppins: ['poppins', 'sans-serif'],
      },
    }
  },
}