<!-- Bagian route yang berubah-ubah / parameter, nama class atau file-nya dibungkus [] -->

<script context="module">
    export async function load({fetch, params}){
        // Memaksa kode untuk menunggu selama satu detik (1000 ms) sebelum melakukan fetching data
        await new Promise(resolve => setTimeout(resolve, 1000))
        const id = params.id
        // karena function-nya tak sinkron maka perlu menunggu hingga sinkron dengan jalannya sistem, lantas
        // ditambahkan "await"
        // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const res = await fetch(`/guides/${id}.json`)
        // variabel guide berisi variabel res yang sudah mengantongi data-data json-nya sehingga bisa digunakan di manapun
        const {guide} = await res.json()
        console.log(guide)

        // Jika variabel res berjalan dengan baik maka program berlanjut
        if(res.ok){
            return {
                props: {
                    guide
                }
            }
        }

        // Jika program gagal maka akan me-redirect (mengalihkan) tujuan ke halaman /guides
        return {
            status: 301,
            // error: new Error('Could not fetch the guide')
            redirect: '/guides'
        }
    }
</script>

<script>
    export let guide
</script>

<div class="guide">
    <h2>{guide.title}</h2>
    <p>{guide.body}</p>
</div>

<style>
    .guide{
        margin: 40px;
        padding: 10px;
        border: 1px dotted rgba(255, 255, 255, 0.2)
    }
</style>