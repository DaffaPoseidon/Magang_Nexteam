<script>
	let name = '2B'
	let characterColor = 'black'

	const handleClick = () => {
		characterColor = 'white'
	}

	const handleInput = (e) => {
		characterColor = e.target.value
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p style="color: {characterColor}">The color is {characterColor}.</p>

	<!-- on:click fungsinya seperti IF, kode di bawah berjalan dinamis dan 
		akan mengubah isi variabel apa pun yang ditentukan dalam function handleClick  -->
	<button on:click={handleClick}>Update Color</button>

	<!-- One way data binding -->
	<!-- <input type="text" on:input={handleInput} value={characterColor}> -->

	<!-- Two way data binding -->
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