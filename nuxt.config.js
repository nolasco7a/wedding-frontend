import colors from 'vuetify/es5/util/colors'

export default {
    // server: {
    //   host: '192.168.0.199',
    //   port: 3000// default: localhost
    // },
    env: {
        imageURL: process.env.IMAGE_URL || 'https://lopezchavezwedding.website/storage/'
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - Lopez & Chavez',
        title: 'wedding',
        htmlAttrs: {
            lang: 'es'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon-wedding.png' },
            {rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css'},
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['hooper/dist/hooper.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/vee-validate.js', ssr: true },
        { src: '~/plugins/vue-carousel.js', mode: 'client' },
        { src: '~/plugins/nuxt-leaflet.js', mode: 'client'},
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308

        //dev API
        baseURL: process.env.IMAGE_URL || 'https://lopezchavezwedding.website/api/'

        //productive API
        //baseURL: 'http://wedding.test/api/',

    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['vee-validate']
    }
}
