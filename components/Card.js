import React from "react";
import styles from '../styles/Card.module.css';
import Sector from "./Sector"
const Card = (props) => {

    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <Sector name='Gaming' icon='videogame_asset'/>
                <Sector name='Interests' icon='interests'/>
                <Sector name='Creative' icon='emoji_objects'/>
                <Sector name='Global' icon='public'/>
                <Sector name='Misc.' icon='casino'/>
                <Sector name='Politics' icon='gavel'/>
                <Sector name='Other' icon='more_horiz'/>
            </div>
        </div>

    );
}

export default Card;