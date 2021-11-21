import React, {useState} from 'react';

function Details(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.views} Views | Uploaded {props.createdAt}</p>
        </div>
    )
}

export default Details;