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
    mutations:{
        checkingItem(state, inputId) {
            state.li.forEach(e=>{
                if(e.id===inputId) e.checked = !e.checked;
            });
        },
        setDone(state){
            state.li.forEach(e => {
                if(e.checked) {
                    e.isdone = !e.isdone;        
                    e.checked = !e.checked;
                }
            });
        },
        addItem(state, inputVal){
            let d = new Date();
            state.li.push({
                id: d.getTime(),
                content: inputVal,
                checked:false,
                isdone:false,
            })
        },
        delItem(state){
            state.li = state.li.filter((e)=>e.checked===false);
        },
    },
    getters:{},
    actions:{},
})