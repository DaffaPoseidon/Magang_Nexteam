<!-- Semua yang berada di lib disarankan sebagai Reusable Komponen yang bisa ditempatkan di manapun -->

<script>
    export let title = "Cloud War"
</script>

<div class="title">
    <img src="/meteor_logo.png" alt="Logo FF7">
    <h1>{title}</h1>
</div>

<style>
    .title{
        display: flex;
    }
    .title img{
        display: inline-block;
        width: 10vw;
        height: 10vh;
    }
    .title h1{
        margin-left: 10px;
    }
</style>