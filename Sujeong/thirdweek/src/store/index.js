import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state :{
        li : [
            {
                id: 0,
                content:"뷰강의 듣기",
                checked : false,
                isdone:false,
            },
            {
                id: 1,
                content:"자바스크립트 강의듣기",
                checked : false,
                isdone:false,
            },
            {
                id: 2,
                content:"리액트 강의듣기",
                checked : false,
                isdone:false,
            },
        ]
    
    },
    getters:{},
    mutations:{},
    actions:{},
})