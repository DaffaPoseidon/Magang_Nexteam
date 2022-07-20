<!-- Semua yang berada di lib disarankan sebagai Reusable Komponen yang bisa ditempatkan di manapun -->

<script>
    export let title = "Cloud War"
</script>

<div class="title">
    <img src="/cloud.png" alt="Cloud Strife">
    <h1>{title}</h1>
</div>

<style>
    .title{
        display: flex;
    }
    .title img{
        display: inline-block;
    }
    .title h1{
        margin-left: 10px;
    }
</style>