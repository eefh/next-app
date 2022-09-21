export default async function handler({query: { id }}, res) {
    const res = await fetch(`http://localhost:3000/api/${id}/`)
    const filtered = posts.filter(post => post.id === id)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message: 'Post not found.'})
    }
}