import App from './App.vue'
import Vue from 'vue';
// store.js를 불러오는 코드
import {store} from "./store";

new Vue({
    // 뷰인스턴스의 store 속성에 연결
    store,
    render : h=>h(App),
}).$mount('#app');