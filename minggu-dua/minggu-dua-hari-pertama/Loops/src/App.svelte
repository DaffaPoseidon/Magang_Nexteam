<script>
	// Loop bernama people
	let people = [
		{ name: '2B', characterColor: 'white', age: 700, id: 1},
		{ name: 'A2', characterColor: 'red', age: 800, id: 2},
		{ name: '9S', characterColor: 'black', age: 700, id: 3},
	]
</script>

<main>
	<!-- Bisa menampilkan data dari loop dengan cara ini, kelemahannya adalah tidak efektif jika datanya banyak -->
	<!-- <div>
		<h4>{people[0].name}</h4>
		<p>{people[0].characterColor}</p>
	</div>
	<div>
		<h4>{people[1].name}</h4>
		<p>{people[1].characterColor}</p>
	</div>
	<div>
		<h4>{people[2].name}</h4>
		<p>{people[2].characterColor}</p>
	</div> -->

	<!-- Mendefinisikan children dari parent people sebagai "person" kemudian mengambil id person dan ditaruh dalam parameter -->
	{#each people as person (person.id)}
		<div>
			<!-- Mencetak karakteristik-karakteristik dalam tiap-tiap person || children -->
			<h4>{person.name}</h4>
			<p>{person.age} years old, {person.characterColor} color</p>
		</div>
		<!-- Jika tidak ada children || data || person, maka pernyataan di bawha "else" yang dicetak, dalam hal ini tag <p> -->
		{:else}
			<p>There are no androids remain ....</p>
	{/each}
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