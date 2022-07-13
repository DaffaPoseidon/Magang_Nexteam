<script>
	let firstName = 'NieR'
	let lastName = 'Yonah'
	let characterColor = 'black'

	// Reactive Value, mengubah isi data ketika datanya diubah di web
	$: fullName = `${firstName} ${lastName}`

	// Mencetak value variabel characterColor ke console.log
	$: console.log(characterColor)

	// Menggunakan reactive ke dalam reactive
	$: {
		console.log(characterColor)
		console.log(fullName)
	}
	

	const handleClick = () => {
		characterColor = 'white'
	}

	const handleInput = (e) => {
		characterColor = e.target.value
	}
</script>

<main>
	<!-- Salah -->
	<!-- <p style="color: {characterColor}">{firstName} {lastName} {characterColor} Characters color</p> -->

	<!-- Benar, dengan menggunakan reactive value -->
	<p style="color: {characterColor}">{fullName} - {characterColor} Characters color</p>

	<input type="text" bind:value={firstName}>
	<input type="text" bind:value={lastName}>
	<input type="text" bind:value={characterColor}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	/* input{
		color: black;
		font-size: 4rem;
		border: black;
		padding: 2em 5em;
	} */
</style>