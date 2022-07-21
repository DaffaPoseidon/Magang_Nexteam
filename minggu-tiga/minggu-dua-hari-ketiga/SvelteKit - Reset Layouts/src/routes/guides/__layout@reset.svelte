<!-- Fungsi dari class ini adalah memberi tahu SvelteKit bahwa ini 
     __layout ini yang digunakan dalam folder guides -->

     <script>
        import Title from '$lib/title.svelte'
        import '../../styles/global.css'
    </script>
    
    <header>
        <nav>
            <Title title="Final Fantasy 8"/>
            <div class="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/guides">Guides</a>
            </div>
        </nav>
    </header>
    
    <main>
        <!-- konten page -->
        <slot/>
    </main>
    
    <footer>
        <p>Final Fantasy Copyright</p>
    </footer>
    
    <style>
        header{
            text-align: center;
            background: rgba(0, 0, 0, 0.1);
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
        nav{
            display: flex;
            align-items: center;
            min-width: 960px;
            margin: 0 auto;
        }
    </style>