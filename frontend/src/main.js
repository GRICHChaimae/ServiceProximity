import { createApp } from 'vue'
// import './style.css'
import router from './router'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: '677815767935-ucahjk671gju34og55gfvk6le45md4ql.apps.googleusercontent.com'
})
app.use(router)
app.mount('#app')
