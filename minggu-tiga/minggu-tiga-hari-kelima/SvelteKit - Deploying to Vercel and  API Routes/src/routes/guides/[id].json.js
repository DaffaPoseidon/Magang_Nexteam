export async function GET({params}){
    const guides = [
        {id: 1, title: 'bebas', body: 'lorem ipsum'},
        {id: 2, title: 'bebas 2', body: 'lorem ipsum'},
        {id: 3, title: 'bebas 3', body: 'lorem ipsum'},
        {id: 4, title: 'bebas 4', body: 'lorem ipsum'},
        {id: 5, title: 'bebas 5', body: 'lorem ipsum'},
    ]

    const guide = guides.find((g) => g.id == params.id)

    if(guide){
        return {
            status: 200,
            body: {guide}
        }
    }

    return {
        status: 404
    }
}