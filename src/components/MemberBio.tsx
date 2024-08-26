import React, {useEffect, useState} from "react";
import { Grid, Typography, Box, Link, Modal, Card, CardContent } from "@mui/material";

interface Props {
    details: {
        name: string;
        title: string;
        description: string;
        image: string;
        links: Array<string>;
    }
    imagePath: string;
    openModal: (newBoolean: boolean) => void;
    setModalInfo: (newObject: object) => void;
    
}

export default function MemberBio(props: Props) {

    const { details, imagePath, openModal, setModalInfo } = props

    return (
        <Grid item xs={12} sm={8} md={4} lg={3} m={5} key={details.name}>
            <Grid container 
                direction="column" 
                onClick={() => {
                    setModalInfo({...details, imagePath})
                    openModal(true)
                }}
                p={2}
                sx={{
                    transition: 'background-color 0.3s', // Add transition for smooth effect
                    '&:hover': {
                    backgroundColor: 'lightgray', // Change background color on hover
                    },

                }}
                >
                {/* image */}               
                <Box 
                component="img"
                mb = {2}
                sx = {{
                    width:"100%",
                    height: "auto",
                    borderRadius: "50%",
                    
                    }}
                src = {imagePath} />       
                
                {/* name */}
                <Typography component="h4" variant="h4" align="center" mb={2}>
                {details.name}
                </Typography>

                <Typography component="h5" variant="h5" align="center" mb={0} fontStyle="italic">
                {details.title}
                </Typography>
                
                <Typography component="h5" variant="h5" align="center" mb={2}>
                {details.organization}
                </Typography>
                
            </Grid>
            
        
        </Grid>
    )
}
