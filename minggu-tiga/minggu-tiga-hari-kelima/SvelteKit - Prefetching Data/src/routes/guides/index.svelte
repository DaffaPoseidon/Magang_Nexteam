<!-- Page Index akan otomatis dijadikan "root" atau induk sebagai tempat penghubung page-page lain
     dengan tag <a> -->

<!-- Mengambil (fetch) data dengan function load di dalam tag <script> tambahan dengan atribut context
     bernama module. Kemudian mengembalikan (return) sebuah objek dengan semua props yang akan dimasukkan
     ke komponen  -->
<script context="module">
    // function async, yang tidak berjalan dengan sinkron
    export async function load({fetch}){
        // karena function-nya tak sinkron maka perlu menunggu hingga sinkron dengan jalannya sistem, lantas
        // ditambahkan "await"
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        // variabel guides berisi variabel res yang sudah mengantongi data-data json-nya sehingga bisa digunakan
        // di manapun
        const guides = await res.json()
        console.log(guides)

        // Jika variabel res berjalan dengan baik maka program berlanjut
        if(res.ok){
            return {
                props: {
                    guides
                }
            }
        }

        // Jika program gagal maka akan mengembalikan status dan informasi error
        return {
            status: res.status,
            error: new Error('Could not fetch the guides')
        }
    }
</script>

<script>
    // Membuat props guides
    export let guides 
</script>

<!-- Memproses guides menjadi array, dan tiap-tiap anggota guides dinamakan guide.
     Setelah itu ditampilakn di web sesuai nama title per guide-nya -->
<div class="guides">
    <ul>
        {#each guides as guide}
            <li>
                <!-- Agar kinerja web bisa seimbang dengan kecepatan PC dan lebih baik, terkadang kita 
                     menggunakan sveltekit:prefetch, yakni ketika kita meng-hover (menggerakkan mouse ke elemen)
                     maka svelte akan me-load halaman tersebut terlebih dahulu sehingga tidak lagi menunggu 
                     1000 detik agar masuk ke web -->
                <a sveltekit:prefetch href={`/guides/${guide.id}`}>{guide.title}</a>
            </li> 
        {/each}
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