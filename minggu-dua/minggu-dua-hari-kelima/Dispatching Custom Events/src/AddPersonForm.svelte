<script>
    let name
    let characterColor
    let age
    // let fighting = false
    // let sneaking = false
    // let running = false

    let skills = []

    const handleSubmit = () => {
        console.log(name, characterColor, age, skills)
    }
</script>

<!-- Karena button submit sifatnya adalah memperbarui halaman setiap kali diklik, maka kita menggunakan sesuatu
     bernama "Event Modifiers preventDefault" sehingga menghapus sifatnya / default-nya -->
<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name}>
    <input type="text" placeholder="character color" bind:value={characterColor}>
    <input type="number" placeholder="age" bind:value="{age}">

    <!-- Membind tag-tag berikut sehingga hasilnya bisa dihubungkan dengan fungsi HandleSubmit, kelemahannya adalah
         tidak efisien dan melelahkan jika ada banyak -->
    <!-- <label>Skills:</label> -->
    <!-- <input type="checkbox" bind:checked={fighting}>fighting<br>
    <input type="checkbox" bind:checked={sneaking}>sneaking<br>
    <input type="checkbox" bind:checked={running}>running<br> -->

    <!-- Cara efisien dan mudahnya mem-bind banyak tag HTML, dengan menggunakan bind:group, dan value masing-masingnya
         disatukan dalam array skills sehingga bisa dicetak dan diolah secara berkesinambungan -->
    <input type="checkbox" bind:group={skills} value="fighting">fighting<br>
    <input type="checkbox" bind:group={skills} value="sneaking">sneaking<br>
    <input type="checkbox" bind:group={skills} value="running">running<br>

    <!-- Membuat select yang terkoneksi dengan characterColor, jadi apa pun yang dipilih di select characterColor akan
         memengaruhi hasilnya input characterColor di atas, jangan lupa pakai bind -->
    <label>Character Color</label>
    <select bind:value={characterColor}>
        <option value="white">white</option>
        <option value="red">red</option>
        <option value="black">black</option>
    </select>

    <button>Add Person</button>
</form>

<style>

</style>