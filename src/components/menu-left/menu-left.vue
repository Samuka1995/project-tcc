<template>
    <div class="sidebar">
        <div class="sidebar-topo">
            <div class="container">
                <div class="close-sidebar">
                    <div @click="$emit('fecharMenuLeft')">
                        <svg
                            style="background: #9146ff; color: #fff"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            class="bi bi-x"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            />
                        </svg>
                    </div>
                </div>

                <div class="icon">
                    <svg
                        style="background: #9146ff; color: #fff"
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        fill="currentColor"
                        class="bi bi-person-circle"
                        viewBox="0 0 16 16"
                    >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                    </svg>
                </div>

                <div class="title">Alunos TCC 10</div>

                <div class="subtitle">alunostcc@unimetrocamp.edu.br</div>
            </div>
        </div>

        <div class="container-body">
            <div class="container-history">
                <router-link to="historico-reservas">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            class="bi bi-book"
                            viewBox="0 0 16 16"
                        >
                        <path
                            d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
                        />
                        </svg>
                    </div>

                    <div class="menu-text-sidebar">Histórico Minhas Reservas</div>

                    <div @click="$emit('fecharMenuLeft')">
                        <svg
                            style="margin-left: 47px"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                        </svg>
                    </div>
                </router-link>
            </div>
        </div>

        <div class="container-term-information">
            <router-link to="termo-uso">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-journal-check"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                        />
                        <path
                            d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
                        />
                        <path
                            d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
                        />
                    </svg>
                </div>

                <div class="menu-text-sidebar">Termo de Uso, mais Informações</div>

                <div @click="$emit('fecharMenuLeft')">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                    </svg>
                </div>
            </router-link>
        </div>

        <div class="container-logout">
            <router-link to="/">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-door-closed"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z"
                        />
                        <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
                    </svg>
                </div>

                <div class="menu-text-sidebar">Logout</div>

                <div @click="$emit('fecharMenuLeft')">
                    <svg
                        style="margin-left: 190px"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                    </svg>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "menu-left",

        emits: ["fecharMenuLeft"],

        props: {
            closeMenu: {
                type: Boolean,
                default: false,
            },
        },
    };
</script>

<style scoped>
    .sidebar {
        position: absolute;
        width: 350px;
        height: 100%;
        background: #e5e5e5 !important;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .sidebar-topo {
        background: #9146ff;
        display: flex;
        flex-direction: column;
        padding: 10px 0 0 0;
    }
    .container {
        background: #9146ff;
        border-right: 1px solid #e5e5e5;
    }
    .close-sidebar {
        background: #9146ff;
        display: flex;
        justify-content: end;
        cursor: pointer;
        height: 0;
    }
    .icon {
        background: #9146ff;
    }
    .title {
        font-size: 24px;
        font-weight: 500;
        width: 100%;
        background: #9146ff;
        color: #fff;
    }
    .subtitle {
        font-size: 16px;
        font-weight: 500;
        background: #9146ff;
        color: #fff;
    }
    .container-body,
    a,
    svg,
    div {
        background: #e5e5e5;
        color: #000000;
    }
    .container-history {
        padding: 0 20px;
    }
    a {
        display: flex;
        align-items: center;
        gap: 7px;
        text-decoration: none;
    }
    .container-term-information {
        padding: 0 20px;
        display: flex;
        gap: 7px;
    }
    .menu-text-sidebar {
        margin-top: 12px;
        font-size: 16px;
        font-weight: 700;
    }
    .container-logout {
        display: flex;
        padding: 0 20px;
        gap: 7px;
    }
</style>