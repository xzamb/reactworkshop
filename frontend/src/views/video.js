import React, { useState } from 'react';
import './video.css';

import api from '../api';

export default function Video(){
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [recommendedBy, setRecommendedBy] = useState('');

    async function handleNewVideo(){
        await api.post('/videos', {title, type, recommendedBy})
        .catch((err) => console.log(err));
    }


    return(
        <div className="video-container">
            <form onSubmit={handleNewVideo} action="/main">
                <input placeholder="title" value={title} onChange={event => setTitle(event.target.value)}/>
                <input placeholder="video type" value={type} onChange={event => setType(event.target.value)}/>
                <input placeholder="recommended by" value={recommendedBy} onChange={event => setRecommendedBy(event.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}