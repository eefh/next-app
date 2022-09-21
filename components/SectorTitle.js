import styles from '../styles/SectorTitle.module.css';

const SectorTitle = props => {
    return (
        <h1 className={styles.title}>{props.title}</h1>
    )
}

export default SectorTitle