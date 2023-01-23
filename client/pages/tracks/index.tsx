import React from 'react';
import MainLayout from "@/layouts/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "@/types/track";
import TrackList from "@/components/TrackList";
import {useTypedSelector} from "@/hooks/useTypedSelector";

const Index = () => {
    const router = useRouter()
    const tracks: ITrack = [
            {_id: '1', name: 'Т1', artist: 'иСПОЛНИТЕЛЬ 1', text: "text", listens: 5, audio: 'http://localhost:5000/audio/2afd9228-1471-43f7-8df0-ee77fe2e3709.mp3', picture:"http://localhost:5000/image/59ba8362-dbdb-442e-bcf3-9fe73a312bc8.jpg", comments: []},
            {_id: '2', name: 'Т3', artist: 'иСПОЛНИТЕЛЬ 2', text: "text", listens: 5, audio: 'http://localhost:5000/audio/c6bcb330-7fa3-42a8-a6e8-e0c807b6d833.mp3', picture:"http://localhost:5000/image/59ba8362-dbdb-442e-bcf3-9fe73a312bc8.jpg", comments: []},
            {_id: '3', name: 'Т4', artist: 'иСПОЛНИТЕЛЬ 3', text: "text", listens: 5, audio: 'http://localhost:5000/audio/2afd9228-1471-43f7-8df0-ee77fe2e3709.mp3', picture:"http://localhost:5000/image/59ba8362-dbdb-442e-bcf3-9fe73a312bc8.jpg", comments: []},
    ]
    return (
        <MainLayout>
            <Grid container justifyContent={'center'}>
                <Card style={{width: '900px'}}>
                    <Box p={3}>
                        <Grid container justifyContent={'space-between'}>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;