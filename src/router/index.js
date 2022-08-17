import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Cadastro from '../components/Cadastro.vue'
import TermoUso from '../components/TermoUso'
import EmailRecuperarSenha from '../components/EmailRecuperarSenha'
import RecuperarSenha from '../components/RecuperarSenha'
import SolicitacaoReserva from '../components/SolicitacaoReserva'

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
    path: '/email-recuperar-senha',
    name: 'emailRecuperarSenha',
    component: EmailRecuperarSenha
  },
  {
    path: '/recuperar-senha',
    name: 'recuperarSenha',
    component: RecuperarSenha
  },
  {
    path: '/solicitacao-reserva',
    name: 'solicitacaoReserva',
    component: SolicitacaoReserva
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
