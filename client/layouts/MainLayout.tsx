import React from 'react';
import Navbar from "@/components/Navbar";
import {Container} from "@mui/material";
import Player from "@/components/Player";
import Head from "next/head";

interface MainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({children, title, description, keywords}) => {
    return (
        <div>
            <Head>
                <title>{ title ? title : 'Музыкальная площадка'}</title>
                <meta name={'description'} content={description ? description : 'Музыкальная площадка с описанием текста'}/>
                <meta name={'robots'} content={"index, follow"}/>
                <meta name={'keywords'} content={keywords ? keywords : 'Музыка, треки, артисты'}/>
                <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
            </Head>
            <Navbar />
            <Container style={{ marginTop: '90px'}}>
                {children}
            </Container>
            <Player />
        </div>
    );
};

export default MainLayout;
