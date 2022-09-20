import React from "react";
import ReactDom from 'react-dom';
import styles from '../styles/Card.module.css';

const links = [['gaming-general', 'gaming-news', 'multiplayer-games', 'mobile-games', 'retro-games', 'rpg-games']
            ,['comics-and-film', 'technology', 'business-and-finance', 'science-and-math', 'outdoors', 'sports']
            ,['food-and-cooking', 'artwork-critique', 'literature', 'music', 'fashion', 'graphic-design']
            ,['japan', 'north-america', 'africa', 'south-america', 'asia', 'europe']
            ,['random', 'diy', 'cool', 'zerblog', 'zerlog-star', 'secret']
            ,['debate', 'left', 'right', 'twitter', 'ideologies', 'activism']
            ,['lgbt', 'advice', 'current-news', 'paranormal', 'travel', 'fitness']];
export default function Modal(props){
    if (!props.open) return null
    let sec;
    switch(props.type){
        case 'Gaming':
            sec = 0;
            break;
        case 'Interests':
            sec = 1;
            break;
        case 'Creative':
            sec = 2;
            break;
        case 'Global':
            sec = 3;
            break;
        case 'Misc.':
            sec = 4;
            break;
        case 'Politics':
            sec = 5;
            break;
        case 'Other':
            sec = 6;
            break;
        default:
            break;
    }
    return (
        <div className={styles.modal}>
            {links[sec].map(e =>
                <div className={styles.items}>
                <a href={e}>{e}</a>
                </div>
            )}
        </div>
    )
}