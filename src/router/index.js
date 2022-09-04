import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import BemVindo from '../components/BemVindo.vue'
import Cadastro from '../components/Cadastro.vue'
import TermoUso from '../components/TermoUso'
import EmailRecuperarSenha from '../components/EmailRecuperarSenha'
import RecuperarSenha from '../components/RecuperarSenha'
import SolicitacaoReserva from '../components/SolicitacaoReserva'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    redirect: '/bem-vindo',
    children: [
      {
        path: 'bem-vindo',
        name: 'login.bemvindo',
        component: BemVindo
      },
      {
        path: 'cadastro',
        name: 'login.cadastro',
        component: Cadastro,
      },
      {
        path: 'termo-uso',
        name: 'login.termouso',
        component: TermoUso
      },
      {
        path: 'email-recuperar-senha',
        name: 'login.emailrecuperarsenha',
        component: EmailRecuperarSenha
      },
      {
        path: 'recuperar-senha',
        name: 'login.recuperarsenha',
        component: RecuperarSenha
      },

      {
        path: 'solicitacao-reserva',
        name: 'login.solicitacaoreserva',
        component: SolicitacaoReserva
      }

    ],
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
