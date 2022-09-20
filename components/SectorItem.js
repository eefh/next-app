import React from 'react';
const SectorItem = (props) => {
    return (
        <a href={props.route}>{props.item}</a>
    );
}

export default SectorItem;