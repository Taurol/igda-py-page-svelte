<section class=" bg-slate-100 flex justify-center">
	<div class=" max-w-6xl w-full py-5 px-6">
		<h2 class=" text-4xl font-bold mt-10 mb-6">Contacto</h2>
		<form action="https://formspree.io/f/xknlrlbp" method="POST">
			<div class="flex flex-row justify-between mb-6">
				<input
					class=" border-solid border rounded-md h-10 w-full max-w-lg p-2"
					type="text"
					name="name"
					placeholder="Nombre"
				/>
				<input
					class=" border-solid border rounded-md h-10 w-full max-w-lg p-2"
					type="email"
					name="_replyto"
					placeholder="Correo electronico"
				/>
			</div>
			<textarea rows="8" class="p-2 w-full mb-6" name="message" placeholder="Mensaje" />
			<div class="w-full flex justify-center">
				<input
					class=" w-full max-w-xs bg-emerald-500 text-white rounded-md h-8 font-semibold text-md mb-4"
					type="submit"
					value="Enviar"
				/>
			</div>
		</form>
	</div>
</section>
