import styles from '../styles/Post.module.css';
const Reply = ({reply}) => {
    return (
        <div className={styles.reply}>
            <p>{reply}</p>
        </div>
    );
}

export default Reply;