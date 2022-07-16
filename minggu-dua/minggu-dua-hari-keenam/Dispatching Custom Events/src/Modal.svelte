<script>
    // Memberi tahu jika boolean showModal adalah "true" maka akan mencetak HTML div berkelas "backdrop"
    export let showModal = false
    // Class ini diciptakan untuk toggle
    export let isPromo = false
</script>

<!-- Div yang dicetak jika showModal adalah "true" -->
{#if showModal}
<!-- class:promo={isPromo} adalah jika variabel boolean isPromo adalah "true" maka akan menambahkan class "promo"
ke dalam div -->
<!-- Ditambahkan on:click sebagai Event Forward ke App.svelte, | self di belakangnya merupakan Event Modifiers yang
     akan menjalankan suatu "event" hanya jika TARGETNYA yang diklik, dalam hal ini div ber-class backdrop -->
<div class="backdrop" class:promo={isPromo} on:click|self>
    <div class="modal">
        <slot></slot>
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