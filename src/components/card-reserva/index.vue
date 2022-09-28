<template>
    <div class="container-card-reserva">
        <div class="container-card-reserva-title">
            Minha Reserva
        </div>

        <div class="hr" />

        <div class="container-laboratory">
            <div class="text">Laboratório</div>

            <div class="container-row">
                <svg xmlns="http://www.w3.org/2000/svg" style="background: #F0F3F8" width="16" height="16" fill="#8698AB" class="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                {{ contents.local_laboratory}}

            </div>
        </div>

        <div class="container-laboratory">
            <div class="text">Data</div>

            <div class="container-row">
                <svg xmlns="http://www.w3.org/2000/svg" style="background: #F0F3F8" width="16" height="16" fill="#8698AB" class="bi bi-calendar" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>

                {{ contents.date }}
            </div>
        </div>

                <div class="container-laboratory">
            <div class="text">Hora Inicial</div>

            <div class="container-row">
                <svg xmlns="http://www.w3.org/2000/svg" style="background: #F0F3F8" width="16" height="16" fill="#8698AB" class="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                </svg>

                {{ contents.start_hour }}
            </div>
        </div>

        <div class="container-laboratory">
            <div class="text">Hora Final</div>

            <div class="container-row">
                <svg xmlns="http://www.w3.org/2000/svg" style="background: #F0F3F8" width="16" height="16" fill="#8698AB" class="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                </svg>

                {{ contents.final_hour }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'card-reserva',

        props: {
            contents: {
                type: [Array, Object]
            }
        },
    }
</script>

<style>
.container-row {
    width: 140px;
    background: #F0F3F8;
    border-radius: 10px;
    color: #8698AB;
    font-weight: 500;
    display: flex;
    align-items: center;
    padding: 0 15px;
    gap: 5px;
}
.text {
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    background: #292929;

}
.container-laboratory {
    display: flex;
    justify-content: space-between;
    background: #292929;
}
.container-card-reserva {
    width: 700px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 20px 50px;
    gap: 20px;
    display: flex;
    flex-direction: column;
}
.container-card-reserva-title {
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    background: rgba(255, 255, 255, 0.0);
    display: flex;
    justify-content: center;
}
.hr {
    height: 1px;
    background: rgba(240, 243, 248, 0.3)
}
</style>