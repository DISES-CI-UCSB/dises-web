import React from "react";
import { Grid, Container, Paper, Box, Typography } from '@mui/material'

import teamMembers from "../../../content/teamInfo.json"

import MemberBio from "../MemberBio";

const amy = {
    name: "Amy Frazier",
    title: "PI",
    description: "Amy Frazier is the PI for the DISES project and a Professor and the Jack and Laura Dangermond Chair in Conservation Science at the University of California, Santa Barbara. Her research sits at the nexus of landscape ecology, remote sensing, and spatial data science/spatial planning to develop data, tools and methods needed to advance conservation science and decision-making.",
    imagePath: "../../../photos/team/amyfrazier.jpg",
    links: ["https://www.frazierlab.org"],
}

export default function Team() {

    const imageUrl = "https://www.nationalgeographic.com/content/dam/expeditions/destinations/south-america/land/Columbia-Connections-to-the-Land-and-the-Past/columbia-connections-land-past-hero.jpg"
    return (
        <Grid container direction="row" justifyContent="center">
            {/* <Grid item xs={12}>
                <Paper
                    sx={{
                        position: 'relative',
                        maxHeight: '30vh',
                        
                        backgroundColor: 'grey.800',
                        color: '#fff',
                        mb: 5,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${imageUrl})`,
                    }}
                    >
                    {<img style={{ display: 'none' }} src={imageUrl} alt={"image conveying teamwork"} />}
                    <Box
                        sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        backgroundColor: 'rgba(0,0,0,.3)',
                        }}
                    />
                    
                    </Paper>
            </Grid> */}

            
            
            <Container maxWidth="xl" disableGutters={true}>
            
                <Grid container direction="row" justifyContent="center">

                    {teamMembers.map((member) => (
                        <MemberBio details={member} />
                    ))}
                </Grid>
            </Container>
            
            

            
        </Grid>
    )
}