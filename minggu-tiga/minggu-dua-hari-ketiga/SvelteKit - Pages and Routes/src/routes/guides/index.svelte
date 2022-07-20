<!-- Page Index akan otomatis dijadikan "root" atau induk sebagai tempat penghubung page-page lain
     dengan tag <a> -->

<div class="guides">
    <ul>
        <!-- Di dalam ul, kita bisa menempatkan link menuju page-page yang sudah dibuat dalam folder guides
             semuanya dipusatkan di dalam index.svelte sebab svelte sendiri menjadikan class bernama "index"
             sebagai class root -->
        <li><a href="/">Home</a></li>
        <li><a href="/">Home</a></li>
    </ul>
</div>

<style>
    .guides{
        margin-top: 20px;
    }
    ul{
        list-style-type: none;
        padding: 0;
    }
    a{
        display: inline-block;
        margin-top: 10px;
        padding: 10px;
        border: 1px dotted rgba(255, 255, 255, 0.2);
    }
</style>