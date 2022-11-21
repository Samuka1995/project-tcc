<template>
    <div style="background: #ffffff; border-radius: 10px 10px 0 0">
        <div class="container">
            <div class="termo-uso">
                <h1>TERMO DE USO DO APLICATIVO</h1>
            </div>

            <ol>
                <li>ACEITAÇÃO</li>

                <p>
                    Este é um contrato firmado entre você, de agora em diante denominado
                    como usuário, e a Wyden UniMetrocamp, empresa cadastrada no CNPJ sob
                    n° 00.000.000/0000-00 com sede no município de Campinas - SP, a Av.
                    Sales de Oliveira, 1661 - e de agora em diante denominada simplesmente
                    de Wyden. Este "Termo de Uso de Aplicativo" rege o uso de todos os
                    aplicativos disponibilizado gratuitamente pela Wyden sejam para
                    dispositivos móveis (Android, IOS, Windows Mobile), servidores,
                    computadores pessoais (desktops) ou serviços web. Se você não
                    concordar com estes termos não use este aplicativo. Você reconhece
                    ainda que analisou e aceitou as condições de uso. Leia-as atentamente
                    pois o uso deste aplicativo significa que você aceitou todos os termos
                    e concorda em cumpri-los. Se você, usuário, for menor de idade ou
                    declarado incapaz em quaisquer aspectos, precisará da permissão de
                    seus pais ou responsáveis que também deverão concordar com estes
                    mesmos termos e condições.
                </p>

                <li>LICENÇA LIMITADA</li>

                <p>
                    Você recebeu uma licença limitada, não transferível, não exclusiva, de
                    royalties e revogável para baixar, instalar, executar e utilizar este
                    aplicativo em seu dispositivo. Você reconhece e concorda que a Wyden
                    concede ao usuário uma licença exclusiva para uso e desta forma não
                    lhe transfere os direitos sobre o produto. O aplicativo deverá ser
                    utilizado por você, usuário. A venda, transferência, modificação,
                    engenharia reversa ou distribuição bem como a cópia de textos, imagens
                    ou quaisquer partes nelecontido é expressamente proibida.
                </p>

                <li>ALTERAÇÕES, MODIFICAÇÕES E RESCISÃO</li>

                <p>
                    A Wyden reserva-se no direito de, a qualquer tempo, modificar estes
                    termos seja incluindo, removendo ou alterando quaisquer de suas
                    cláusulas. Tais modificações terão efeito imediato. Após publicadas
                    tais alterações, ao continuar com o uso do aplicativo, você terá
                    aceitado e concordado em cumprir os termos modificados. A Wyden pode,
                    de tempos em tempos, modificar ou descontinuar (temporária ou
                    permanentemente) a distribuição ou a atualização deste aplicativo. A
                    Wyden não é obrigada a fornecer nenhum serviço de suporte para este
                    aplicativo. O usuário não poderá responsabilizar a Wyden nem seus
                    diretores executivos funcionários. afiliados
                </p>
            </ol>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'termo-uso'
    };
</script>

<style scoped>
    .container {
        background: #ffffff;
        color: #ffffff;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .termo-uso {
        background: #ffffff;
        width: 100%;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .header-logo {
        position: absolute;
        color: white;
        margin: -5% 45%;
        z-index: 2;
    }
    a {
        position: absolute;
        margin-right: 100%;
        margin-top: -5%;
    }
    .termo-uso h1 {
        background: #ffffff;
    }
    ol,
    p {
        font-size: 18px;
        background: #ffffff;
        color: black;
    }
    li {
        font-weight: 700;
        color: black;
        background: #ffffff;
        margin: 8px;
    }
</style>
