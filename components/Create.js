import { useState } from 'react';
import server from '../config/index';
import styles from '../styles/Create.module.css';
import { useRouter } from 'next/router';
import FileBase from 'react-file-base64';
import 'material-icons/iconfont/material-icons.css';

const Create = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState('');
    const handleSubmit = async(e) => {
        e.preventDefault()
        if (((title) || (title && desc)) || file){
            try {
                const body = { title, desc, file, category: router.query, date: new Date().toGMTString(), replies: []}
                const response = await fetch('/api/posts', {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });
                setTitle('');
                setDesc('');
                setFile('');
            } catch (error) {
                console.error(error.message);
            }
            window.location.replace(router.query.id);
        }
    }
    return (
        <div className={styles.Create}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input id={styles.title} type='text' value={title} onChange={(e) => setTitle(e.target.value)}autoComplete='off' className={styles.input} placeholder='title'/>
                <input id={styles.body} type='text' value={desc} onChange={(e) => setDesc(e.target.value)}autoComplete='off' className={styles.input} placeholder='body'/>
                <FileBase id={styles.file} multiple={false} className={styles.input} onDone={(base64) => setFile(base64)}type='file'/>
                <button className={styles.button}><span className={['material-icons-outlined', styles.send].join(" ")}>send</span></button>
            </form>
        </div>
    );
}

export default Create;