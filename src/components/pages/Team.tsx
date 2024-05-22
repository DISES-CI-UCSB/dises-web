import React from "react";
import { Grid, Container, Paper, Box, Typography } from '@mui/material'

// import all photos
import amyfrazier from '../../content/photos/team/amyfrazier.jpg'
import lizsanders from '../../content/photos/team/lizsanders.jpg'
import nickmcmanus from '../../content/photos/team/nickmcmanus.jpg'
import wenxinyang from '../../content/photos/team/wenxinyang.jpg'
import joanakrieger from '../../content/photos/team/joanakrieger.jpg'
import danwillett from '../../content/photos/team/danwillett.jpg'

const teamPhotos = {
    "Amy Frazier": amyfrazier,
    "Liz Sanders": lizsanders,
    "Nick McManus": nickmcmanus,
    "Wenxin Yang": wenxinyang,
    "Joana Krieger": joanakrieger,
    "Dan Willett": danwillett
}

import teamMembers from '../../content/teamInfo.json'
import MemberBio from "../MemberBio";


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

                <Grid container direction="column">
                {/* sx={{backgroundColor: theme.palette.secondary.light}} */}
                <Grid item py={4} alignContent="center">
                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                        <Grid item xs={10} sm={6} md={6} lg={4} py={8} mt={4}>
                            <Typography variant="h2" align="center">
                                Meet the DISES Team
                            </Typography>
                        </Grid>
                        
                        
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container direction="row" justifyContent="center">
                        {teamMembers.map((member) => (
                            <MemberBio details={member} imagePath={teamPhotos[member.name]} />
                        ))}
                    </Grid>
                </Grid>

                </Grid>
            
                
            </Container>
            
            

            
        </Grid>
    )
}