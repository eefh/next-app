
import Post from './Post';

export default function ProductList({posts}){
    if (!posts) return null

    return (
        <div>
            {posts.map((post) => {
                <div key={post.id}>
                    <Post {...post}/>
                </div>
            })}
        </div>
    )
}