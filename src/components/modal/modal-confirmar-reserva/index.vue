<template>
	<div class="container-modal">
		<div class="modal-content">
			<span class="title">Confirmar Reserva</span>

			<div class="hr" />

			<div class="container-text">
				<span class="text">
					Ao confirmar você compromete a comparecer na data e hora selecionado.
					Caso tenha algum imprevisto, favor cancelar sua reserva com
					antecedência.
				</span>
			</div>

			<div class="button">
				<button @click="minhaReserva" class="button-ok">Confirmar</button>

				<button @click="$emit('closeModal')" class="button-cancelar">Cancelar</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "modal-confirmar-reserva",
	};
</script>

<style scoped>
.container-modal {
	width: 550px;
	height: 250px;
	background: #1C1C1C;
	border: 1px solid #fff;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 6px;
}
.modal-content {
	padding: 20px 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #1C1C1C;
	height: 100%;
}
.title {
	font-size: 30px;
	font-weight: 700;
	color: #fff;
	background: #1C1C1C;
	margin-bottom: 10px;
}
.hr {
	width: 100%;
	border-bottom: 1px solid #F0F3F8;
	}
.container-text {
	background: #1C1C1C;
	margin-top:  15px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.text {
	margin-top: 10px;
	color: #F0F3F8;
	font-weight: 500;
	font-size: 16px;
	background: #1C1C1C;
	letter-spacing: 1.5px;
	}
.button {
	width: 100%;
	display: flex;
	justify-content: end;
	background: #1C1C1C;
	margin-top: 10px;
}
.button-ok,
.button-cancelar {
	margin-top: 10px;
	width: 90px;
	background: #F0F3F8;
	border-radius: 8px;
	color: #9146FF;
	font-weight: 500;
}

</style>