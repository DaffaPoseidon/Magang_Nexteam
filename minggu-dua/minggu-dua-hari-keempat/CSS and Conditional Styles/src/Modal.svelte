<script>
    // Memberi tahu jika boolean showModal adalah "true" maka akan mencetak HTML div berkelas "backdrop"
    let showModal = true
    // Class ini diciptakan untuk toggle
    let isPromo = true
</script>

<!-- Div yang dicetak jika showModal adalah "true" -->
{#if showModal}
<!-- class:promo={isPromo} adalah jika variabel boolean isPromo adalah "true" maka akan menambahkan class "promo"
ke dalam div -->
<div class="backdrop" class:promo={isPromo}>
    <div class="modal">
        <p>Sign up for offers!</p>
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