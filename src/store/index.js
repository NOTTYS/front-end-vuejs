import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { list } from 'postcss'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    users: [],
    profile: [],
    isLogin: false,
    token:window.sessionStorage.getItem('token'),
    product: [],
  },
  getters: {
    count: (state) => state.count
  },
  mutations: {
    setIncrement(state) {
      return state.count++
    },
    setDecrement(state) {
      return state.count--;
    },
    setUsers(state, data) {
      return state.users = data;
    },

    setProducts(state, data) {
      return state.users = data;
    },
    setCounter(state, dt) {
      state.count = dt
    },
    setToken(state,tk){
      state.token = tk;
      window.sessionStorage.setItem('token',tk)
    },
    setProfile(state, profile) {
      state.profile = profile,
      isLogin = true
    }
  },
  actions: {
    getCounter(ctx, item) {
      ctx.commit('setCounter', item)
    },
    async getUsers(ctx) {
      const data = [];
        axios.get('http://localhost:3750/api/test/admin')
        .then(res=>{
          data.push(...res.data)
        })
        .catch(e=>console.log(e))
        ctx.commit("setUsers", data)
    },

    async getProducts(ctx) {
      const data = [];
        axios.get('http://localhost:3750/api/product/get')
        .then(res=>{
          data.push(...res.data)
        })
        .catch(e=>console.log(e))
        ctx.commit("setProducts", data)
    },
    async createUser(ctx, data) {
      return await axios.post('', data)
    },
    
    getProfile(username, password, ctx) {
      const profile = [];
      axios.post('http://localhost:3750/api/auth/login', {
        username: username,
        password: password
      })
        .then(res=> {
          let token = res.data.accessToken
          profile.push(...res.data.accessToken)
          window.sessionStorage.setItem('token', token)
          if(token) {
            window.location = "/"
          }
          
        }).catch(error => console.log(error))
        ctx.commit("setProfile", profile)
    }
  },
  modules: {
  }
})
