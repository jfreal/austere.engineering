module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
      ],
    theme: {
        extend: {
          colors:{
            monkblue: '#50737d',    
            darkestbrown: '#7D5A50',
            brown: ' #B4846C',
            lightbrown: '#E5B299',
            tan: '#FCDEC0',
            lighttan: '#fef2e5'            
          },
          fontFamily: {
            'roboto': ['"Roboto Slab"', 'serif'],
            'test': ['"Yuji Hentaigana Akari"', 'serif'],
          },
        },    
      },
      plugins: [require('@tailwindcss/typography'),]
}