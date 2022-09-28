<template>
	<div class="container-modal-cancel-reserve">
		<div class="modal-content">
			<span class="title">Confirmar Reserva</span>

			<div class="hr" />

			<div class="container-text">
				<span class="text">
					Tem certeza que você deseja cancelar a sua reserva?
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
		name: "modal-cancel-reserve",
	};
</script>

<style scoped>
.container-modal-cancel-reserve {
	width: 500px;
	height: 200px;
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
    gap: 10px
}
.title {
	font-size: 30px;
	font-weight: 700;
	color: #fff;
	background: #1C1C1C;
}
.hr {
	width: 100%;
	border-bottom: 1px solid #F0F3F8;
	}
.container-text {
	background: #1C1C1C;
	display: flex;
	align-items: center;
	justify-content: center;
}
.text {
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
}
.button-ok,
.button-cancelar {
	width: 90px;
	background: #F0F3F8;
	border-radius: 8px;
	color: #9146FF;
	font-weight: 500;
}

</style>