<script>
	// Memasukkan kelas Modal.svelte dengan nama Modal
	import Modal from './Modal.svelte'
	// Pembuatan variabel showModal untuk men-toggle Modal
	let showModal = false
	// PENTING! function untuk men-toggle Modal, jika keadaan Modal dalam web adalah "true" maka jika diklik akan
	// berubah menjadi "false" yang mana akan menutup modalnya, dan juga sebaliknya
	const toggleModal = () => {
		showModal = !showModal
	}
	// Loop bernama people
	let people = [
		{ name: '2B', characterColor: 'white', age: 700, id: 1},
		{ name: 'A2', characterColor: 'red', age: 800, id: 2},
		{ name: '9S', characterColor: 'black', age: 700, id: 3},
	]
	const handleClick = (e, id) => {
		// delete person dari people
		people = people.filter((person) => person.id != id)
		console.log(e)
	}
	let num = 3
</script>

<!-- Mencetak kelas Modal ke web  -->
<!-- Memberikan nilai props message yang asalnya dari Modal.svelte, nilai props akan meng-override || menggantikan
	 nilai message yang telah diberikan di Modal.svelte, berlaku persis sama pada isPromo, bedanya adalah karena
	 nilainya boolean maka diberikan kurung kurawal {} -->
<!-- showModal={showModal} adalah penentuan props yang di-export dari Modal.svelte ke App.svelte yang datanya
	 ditentukan dari variabel showModal yang dibuat di App.svelte agar memungkinkan Event Forwarding -->
<!-- on:click={toggleModal} adalah penerimaan Event Forward-nya Modal.svelte, agar bisa memanipulasi HTML
	 di luar class asalnya yakni di luar Modal.svelte sendiri dengan memasukkan function toggleModal -->
<Modal message="Hey, I am a prop value" isPromo={true} showModal={showModal} on:click={toggleModal}/>

<!-- Menerapkan kondisional berupa IF, IF-ELSE, dan ELSE dengan kondisi berupa angka  -->
{#if num > 20}
	<p>Lebih besar dari 20</p>
{:else if num > 5}
	<p>Lebih besar dari 5</p>
{:else}
	<p>Tidak lebih besar dari 5</p>
{/if}

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

	<button on:click={toggleModal}>Open Model</button>
	<!-- Mendefinisikan children dari parent people sebagai "person" kemudian mengambil id person dan ditaruh dalam parameter -->
	{#each people as person (person.id)}
		<div>
			<!-- Mencetak karakteristik-karakteristik dalam tiap-tiap person || children -->
			<h4>{person.name}</h4>
			<!-- Kondisi jika characterColor adalah blak maka akan menampilkan tag p dan strong berisi 2BBBBBBBBBBB -->
			{#if person.characterColor === 'black'}
				<p><strong>2BBBBBBBBBBB</strong></p>
			{/if}
			<p>{person.age} years old, {person.characterColor} color</p>
			<!-- button menghapus person -->
			<button on:click={(e) => 
				handleClick(e, person.id)
			}>Delete</button>
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