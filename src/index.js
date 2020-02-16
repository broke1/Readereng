


window.Vue = require('vue') // подключаем Vue sdfsdf

import store from './store/index.js' // подключаем файл с натсройками хранилища Vuex

Vue.component('main-page', require('./components/mainPage.vue').default)





// создаем экземпляр vue где подключаем самое главное переадрасицию, визуализацию элемнетов и хранилище
new Vue({
    store,
    el: "#app"
})