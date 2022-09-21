import Link from 'next/link';
import styles from '../styles/Post.module.css';
import { useState } from 'react';
import Reply from './Reply';

const Post = ({_id, body}) => {
    const [reply, setReply] = useState('');
    const handleSubmit = async(e) => {
        e.preventDefault()
        if (reply){
            try {
                const body = { reply, date: new Date().toGMTString(), replies: ['this is a reply'] }
                const response = await fetch('/api/posts', {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });
            } catch (error) {
                console.error(error.message);
            }
        }
    }
    return (
        <div>
                <div className={styles.post}>
                    <p className={styles.date}>{`Posted anonymously ${body.date}`}</p>
                    <h1>{body.title}</h1>
                    {body.file !== '' ? <img className={styles.image} src={`${body.file.base64}`}/> : null}
                    <p>{body.desc}</p>
                </div>
            {/*<form onSubmit={handleSubmit} className={styles.form}>
                <input onChange={(e) => setReply(e.target.value)} value={reply} className={styles.input}type='text' placeholder='reply'/>
                <button className={styles.button}>Send</button>
    </form>*/}
        </div>
    );
};

export default Post;