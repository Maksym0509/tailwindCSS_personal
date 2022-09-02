import components from "./config/components"

export default {
    build: {
        extractCSS: true,
    },
    buildModules: [
        '@nuxtjs/dotenv'
    ],
    css: [
        '~/assets/css/main.css'
    ],
    plugins: [
        '~/assets/js/main.js'
    ],
    head: {
        title: 'my website title',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'my website description'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: 'nuxt.webp' }]
    },
    noscript: [
        { innerHTML: 'This website requires JavaScript.' }
    ],
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        // Options
    },
    dir: 'public',
    target: 'static',
    ssr: false,
    generate: {
        fallback: true
    }
}
