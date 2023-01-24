import React, {useState} from 'react';
import {ITrack} from "@/types/track";
import MainLayout from "@/layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import {Box} from "@mui/system";
import {GetServerSideProps} from "next";
import axios from "axios";
import {useInput} from "@/hooks/useInput";

const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState<ITrack>(serverTrack);
    const router = useRouter()

    const userName = useInput('')
    const text = useInput('')

    const addComment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/tracks/comment', {
                username: userName.value,
                text: text.value,
                trackId: track._id
            })
            setTrack({...track, comments: [...track.comments, response.data]})
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <MainLayout title={"Музыкальная площадка - " + track.artist + " - " + track.name }>
            <Button onClick={() => router.push('/tracks')} variant={"outlined"} style={{fontSize: 32}}>
                К списку
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={'http://localhost:5000/' + track.picture} alt="" style={{width: '150px', height: '150px'}}/>
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
                    <TextField label={'Ваше имя'} fullWidth {...userName}/>
                </Box>
                <TextField label={'Комментарий'} fullWidth multiline rows={4} {...text}/>
                <Box pt={3}>
                    <Button variant={"outlined"} onClick={addComment}>Отправить</Button>
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

export const getServerSideProps: GetServerSideProps = async ({ params}) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params.id)
    return {
        props: {
            serverTrack: response.data
        }
    }
}