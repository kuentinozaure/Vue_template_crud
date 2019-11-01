import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
  connectedUser: {
    id: '',
    login: '',
    name:'',
    username: '',
    mail:'',
    phone:'',
    admin: true,
    connected: false,
    picture:'https://image.flaticon.com/icons/png/512/64/64572.png',
  },
  posts: []
}

const mutations = {
  ADD_POSTS:  (state, post) => {
    state.posts.push(post)
  },
  ADD_USER:  (state, data) => {
    state.connectedUser.id = data.id
    state.connectedUser.login = data.login
    state.connectedUser.name = data.name
    state.connectedUser.username = data.username
    state.connectedUser.mail = data.mail
    state.connectedUser.phone = data.phone
    state.connectedUser.connected = data.connected
    state.connectedUser.admin = data.admin
  },
  UPDATE_BODY_POST: (state, post) => {
    console.log(post)
  }
}

const getters = {
  posts: state => state.posts,
  connectedUser: state => state.connectedUser
}
const actions = {
  addUser: (store,data) => {
    store.commit('ADD_USER',data)
  },
  addPosts: (store,data) => {
    store.commit('ADD_POSTS',data)
  },
  updatePost: (store,data) => {
    console.log("rere")
    store.commit('UPDATE_BODY_POST',data)
  }
}

export default new Vuex.Store ({

  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
  strict:true

})
