import React, { Component } from 'react';
import './main.css';

import api from '../api';


export default class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos: []
        }

        this.handleWatched = this.handleWatched.bind(this);
        this.createNewVideo = this.createNewVideo.bind(this);
    }

    async getVideos(){
        const response = await api.get('/videos');
        this.setState({videos: response.data});
    }

    async handleWatched(id){
        await api.put(`/videos/${id}`);
        this.getVideos();

    }

    createNewVideo(){
        this.props.history.push('/new');
    }

    componentDidMount(){
        this.getVideos();
    }

    render(){
        return(
            <div className="main-container">
                <div className="header">
                    <h2>toWatch</h2>
                    <button onClick={this.createNewVideo}>+</button>
                </div>
                <ul>
                    {this.state.videos.map(video => (
                        <li key={video._id}>
                            <p style={{fontWeight: 'bold'}}>{video.title}</p>
                            <p>{video.type}</p>
                            <p>Recomendado por: {video.recommendedBy}</p>
                            <input id="watched" type="checkbox" onClick={() => this.handleWatched(video._id)}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}