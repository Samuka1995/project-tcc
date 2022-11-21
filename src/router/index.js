import Login from '@/views'
import BemVindo from '@/views/bem-vindo'
import Cadastro from '@/views/cadastro'
import EmailRecuperarSenha from '@/views/email-recuperar-senha'
import HistoricoReserva from '@/views/historico-reservas'
import MinhaReserva from '@/views/minha-reserva'
import RecuperarSenha from '@/views/recuperar-senha'
import ReservaComputador from '@/views/reserva-computador'
import SolicitacaoReserva from '@/views/solicitacao-reserva'
import TermoUso from '@/views/termo-uso'

import { createRouter, createWebHistory } from 'vue-router'

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
            },
            {
                path: 'reserva-computador',
                name: 'login.reservacomputador',
                component: ReservaComputador
            },
            {
                path: 'minha-reserva',
                name: 'login.minhareserva',
                component: MinhaReserva
            },
            {
                path: 'historico-reservas',
                name: 'login.historicoreservas',
                component: HistoricoReserva
            }
        ],
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
