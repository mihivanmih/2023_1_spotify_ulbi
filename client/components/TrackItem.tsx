import React from 'react';
import {ITrack} from "@/types/track";
import {Card, IconButton, Grid} from "@mui/material";
import styles from '../styles/TrackItem.module.scss'
import {Delete, Pause, PlayArrow} from "@mui/icons-material";
import {useRouter} from "next/router";
import {useActions} from "@/hooks/useActions";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}



const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter()
    const {playTrack, pauseTrack, setActiveTrack} = useActions()

    const play = (e) => {
        e.stopPropagation()
        setActiveTrack(track)
        playTrack()
    }

    return (
        <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={play}>
                {
                    !active ? <PlayArrow />
                        : <Pause />
                }
            </IconButton>
            <img src={'http://localhost:5000/' + track.picture} style={{ width: '70px', height: '70px'}} alt=""/>
            <Grid container direction={'column'} style={{ width: '200px', margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{ fontSize: '12px', color: 'gray'}}>{track.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton  onClick={e => e.stopPropagation()} style={{ marginLeft: 'auto'}}>
                <Delete />
            </IconButton>
        </Card>
    );
};

export default TrackItem;
