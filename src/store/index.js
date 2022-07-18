import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isCollapse: false,
        tabsList:[
            {
                path:'/myHome',
                name:'myHome',
                label:'首页',
                url:'myHome/myHome'
            }
        ],
        currentMenu:null,
    },
    mutations: {
      collapse (state) {
        state.isCollapse = !state.isCollapse
      },
      selectMenu(state,value){
        if(value.name !== 'myHome'){
            state.currentMenu = value
            const result = state.tabsList.findIndex(item => item.name === value.name)
            if(result == -1){
                state.tabsList.push(value)
            }
        }else{
            state.currentMenu = null
        }
      },
      closeTag(state,value){
        const result =state.tabsList.findIndex(item => item.name === value.name)
            state.tabsList.splice(result,1)
        }
    }
  })