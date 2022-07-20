<!-- Fungsi dari class ini adalah memberi tahu SvelteKit bahwa ini 
     __layout ini yang digunakan dalam folder guides -->

<script>
    import Title from '$lib/title.svelte'
    import '../styles/global.css'
</script>

<header>
    <Title title="Final Fantasy 7"/>
    <div class="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/guides">Guides</a>
    </div>
</header>

<main>
    <!-- konten page -->
    <slot></slot>
</main>

<footer>
    <p>Final Fantasy Copyright</p>
</footer>

<style>
    header{
        display: flex;
        justify-content: center;
    }
    main{
        max-width: 960px;
        margin: 20px auto;
    }
    footer{
        text-align: center;
    }
    .links{
        margin-left: auto;
    }
    a{
        margin-left: 10px;
    }
</style>