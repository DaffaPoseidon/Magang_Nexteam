export async function GET(){
    // mencari koneksi ke db dan mengambil data
    const guides = [
        {id: 1, title: 'bebas'},
        {id: 2, title: 'bebas 2'},
        {id: 3, title: 'bebas 3'},
        {id: 4, title: 'bebas 4'},
        {id: 5, title: 'bebas 5'},
    ]

    return {
        status: 200,
        body: { guides}
    }
}