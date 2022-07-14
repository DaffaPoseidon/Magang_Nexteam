<script>
    // Biar variabelnya bisa digunakan di luar class, maka dijadikan "props" dengan ditambahkan "export" di belakangnya
    export let message = 'default value'
    // Memberi tahu jika boolean showModal adalah "true" maka akan mencetak HTML div berkelas "backdrop"
    export let showModal = false
    // Class ini diciptakan untuk toggle
    export let isPromo = false
</script>

<!-- Div yang dicetak jika showModal adalah "true" -->
{#if showModal}
<!-- class:promo={isPromo} adalah jika variabel boolean isPromo adalah "true" maka akan menambahkan class "promo"
ke dalam div -->
<!-- Ditambahkan on:click sebagai Event Forward ke App.svelte -->
<div class="backdrop" class:promo={isPromo} on:click>
    <div class="modal">
        <!-- Menggantikan hard-coded statis menjadi data dinamis yang diberikan melalui props di App.svelte -->
        <p>{message}</p>
    </div>
</div>
{/if}

<style>
    .backdrop{
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
    }
    .modal{
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: white;
        cursor: pointer;
    }
    /* CSS untuk class promo yang ditambahkan jika variabel isPromo adalah "true" */
    .promo .modal{
        background: crimson;
        color: white;
    }
</style>