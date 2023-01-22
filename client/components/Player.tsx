import React from 'react';
import {Grid, IconButton} from "@mui/material";
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import styles from '../styles/Player.module.scss'
import {ITrack} from "@/types/track";
import TrackProgress from "@/components/TrackProgress";

const Player = () => {
    const track: ITrack = {
        _id: '1',
        name: 'Т1',
        artist: 'иСПОЛНИТЕЛЬ 1',
        text: "text",
        listens: 5,
        audio: 'http://localhost:5000/audio/2afd9228-1471-43f7-8df0-ee77fe2e3709.mp3',
        picture: "http://localhost:5000/image/59ba8362-dbdb-442e-bcf3-9fe73a312bc8.jpg",
        comments: []
    }
    const active = false

    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {
                    !active ? <PlayArrow />
                        : <Pause />
                }
            </IconButton>
            <Grid container direction={'column'} style={{ width: '200px', margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{ fontSize: '12px', color: 'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => {}} />
            <VolumeUp style={{ marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={() => {}} />
        </div>
    );
};

export default Player;
