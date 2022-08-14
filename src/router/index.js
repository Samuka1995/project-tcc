import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Cadastro from '../components/Cadastro.vue'
import TermoUso from '../components/TermoUso'
import RecuperarSenha from '../components/RecuperarSenha'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/termo-uso',
    name: 'termoUso',
    component: TermoUso
  },
  {
    path: '/recuperar-senha',
    name: 'recuperarSenha',
    component: RecuperarSenha
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
