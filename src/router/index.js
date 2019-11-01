import Vue from 'vue'
import Router from 'vue-router'
import Connexion from '../components/Connexion.vue'
import Accueil from '../components/Accueil.vue'
import NotFound from '../components/NotFound.vue'
import CrudPage from '../components/CrudPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/connexion',
      name: 'connexion',
      component: Connexion
    },
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    },
    {
      path: '/crudPage',
      name: 'crudpage',
      component: CrudPage
    }
  ]
})
