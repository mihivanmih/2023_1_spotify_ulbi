import React from 'react';
import {ITrack} from "@/types/track";
import MainLayout from "@/layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import {Box} from "@mui/system";

const TrackPage = () => {
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

    const router = useRouter()

    return (
        <MainLayout>
            <Button onClick={() => router.push('/tracks')} variant={"outlined"} style={{fontSize: 32}}>
                К списку
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={track.picture} alt="" style={{width: '150px', height: '150px'}}/>
                <div style={{marginLeft: '30px'}}>
                    <h1>Название трека - {track.name}</h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Слова в треке</h1>
            <p>{track.text}</p>
            <Box pb={3}>
                <h2>Комментарии:</h2>
            </Box>
            <Grid container>
                <Box pb={3}>
                    <TextField label={'Ваше имя'} fullWidth/>
                </Box>
                <TextField label={'Комментарий'} fullWidth multiline rows={4}/>
                <Box pt={3}>
                    <Button variant={"outlined"}>Отправить</Button>
                </Box>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;
