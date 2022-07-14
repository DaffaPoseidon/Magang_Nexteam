<script>
    // Memberi tahu jika boolean showModal adalah "true" maka akan mencetak HTML div berkelas "backdrop"
    let showModal = true
</script>

<!-- Div yang dicetak jika showModal adalah "true" -->
{#if showModal}
<div class="backdrop">
    <div class="modal">
        <p>Sign up for offers!</p>
    </div>
</div>
{/if}

<style>

</style>