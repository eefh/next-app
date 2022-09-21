import styles from '../styles/Post.module.css';
import Post from './Post';

const PostList = ({ posts }) => {
    return (
        <div className={styles.postList}>
            {posts.slice(0).reverse().map((post, i) => {
                return (<Post key={i}{...post}/>)
            })}
        </div>
    )
}
export default PostList;