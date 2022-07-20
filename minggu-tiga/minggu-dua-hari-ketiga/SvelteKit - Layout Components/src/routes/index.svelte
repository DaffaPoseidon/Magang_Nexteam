<script>
    // Membuat variabel baru bernama title
    let title = 'War Strategy'

    // Fungsi update title yang menyimpan variabel title untuk mengganti isinya
    const updateTitle = () => {
        title = 'Different strategy'
    }
</script>

<div class="index">
    <!-- Tag h2 yang isinya adalah isi variabel title -->
    <h2>{title}</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque et animi perspiciatis eveniet adipisci nihil ipsam magnam voluptates cum corporis odio magni vero rerum dolorem temporibus ratione dolores, illum harum, laborum iusto sed! Quo fugit adipisci minus harum, totam labore amet quos tenetur laudantium est mollitia quis dolore voluptates hic odio officia quaerat officiis obcaecati eaque recusandae iusto enim doloribus!</p>
    <!-- Berlaku sama dengan index.svelte di folder guides, index.svelte di folder routes adalah class
         "root"-nya folder routes, maka dari itu page-page lain dipusatkan di sini -->
    <a href="/guides">View guides</a>
    <a href="/about">About Us</a>
    <!-- Sebuah button yang jika diklik (on:click) maka akan menjalankan fungsi updateTitle -->
    <button on:click={updateTitle}>Change Title</button>
    <!-- Tag input yang tipenya text dan akan mengikat (bind) value dengan isi variabel title
         kemudian ditampilkan di tag <h2> di atas secara langsung (real-time) -->
    <input type="text" bind:value={title}>
</div>

<style>
    .title{
        text-align: center;
        display: block;
        margin: 20px auto;
    }
    .index{
        text-align: center;
        display: block;
        margin: 20px auto;
    }
</style>