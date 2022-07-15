<script>
    let name
    let characterColor
    let age

    const handleSubmit = () => {
        console.log(name, characterColor, age)
    }
</script>

<!-- Karena button submit sifatnya adalah memperbarui halaman setiap kali diklik, maka kita menggunakan sesuatu
     bernama "Event Modifiers preventDefault" sehingga menghapus sifatnya / default-nya -->
<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name}>
    <input type="text" placeholder="character color" bind:value={characterColor}>
    <input type="number" placeholder="age" bind:value="{age}">
    <button>Add Person</button>
</form>

<style>

</style>