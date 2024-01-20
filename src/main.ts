import App from '@/App.vue'
import '@/assets/style/tailwind.css'
import LuxPopup from '@/components/Popups/LuxPopup.vue'
import { PopupComponentName } from '@/components/Popups/types'
import router from '@/router'
import { createApp } from 'vue'

const app = createApp(App)

app.component(PopupComponentName.LuxPopup, LuxPopup)
app.use(router)
app.mount('#app')
