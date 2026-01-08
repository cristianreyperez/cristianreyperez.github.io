import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import { i18n } from './i18n'
import './assets/main.css'




import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-purple/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import Tailwind from 'primevue/passthrough/tailwind'

import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

import VueGtag from 'vue-gtag'

import { VueEmailPlugin } from 'vue-email'

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from
} from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { provideApolloClient } from '@vue/apollo-composable'

const httpLink = createHttpLink({ uri: 'https://your-api/graphql' })

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => console.error(`[GraphQL error]: ${message}`))
  }
  if (networkError) console.error(`[Network error]: ${networkError}`)
})

const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache()
})

provideApolloClient(apolloClient)


const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(i18n)
app.use(PrimeVue, { unstyled: true, pt: Tailwind })
app.use(FloatingVue)

app.use(VueGtag, {
  config: { id: 'G-XXXXXXXXXX' }, // Replace with your actual GA ID
  appName: 'CristianPortfolio',
  pageTrackerScreenviewEnabled: true
}, router)

app.use(VueEmailPlugin)


app.mount('#app')
