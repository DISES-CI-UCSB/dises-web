import React from "react";
import { Grid, Container, Paper, Box, Typography } from '@mui/material'

// import all photos
import amyfrazier from '../../content/photos/team/amyfrazier.jpg'
import lizsanders from '../../content/photos/team/lizsanders.jpg'
import nickmcmanus from '../../content/photos/team/nickmcmanus.jpg'
import wenxinyang from '../../content/photos/team/wenxinyang.jpg'
import joanakrieger from '../../content/photos/team/joanakrieger.jpg'
import danwillett from '../../content/photos/team/danwillett.jpg'
import caitlindrummondotten from "../../content/photos/team/caitlindrummondotten.jpg"
import leisong from "../../content/photos/team/leisong.jpg"
import gabrieldaldegan from "../../content/photos/team/gabrieldaldegan.jpg"
import patrickroehrdanz from "../../content/photos/team/patrickroehrdanz.jpg"
import gweniacona from "../../content/photos/team/gweniacona.jpg"
import elkinnogueraurbano from "../../content/photos/team/elkinnogueraurbano.jpg"
import susanarodriguezburitica from "../../content/photos/team/susanarodriguezburitica.jpg"

const teamPhotos = {
    "Amy Frazier": amyfrazier,
    "Patrick Roehrdanz": patrickroehrdanz,
    "Liz Sanders": lizsanders,
    "Gwen Iacona": gweniacona,
    "Nick McManus": nickmcmanus,
    "Wenxin Yang": wenxinyang,
    "Joana Krieger": joanakrieger,
    "Caitlin Drummond Otten": caitlindrummondotten,
    "Dan Willett": danwillett,
    "Lei Song": leisong,
    "Gabriel Antunes Daldegan": gabrieldaldegan,
    "Elkin Noguera-Urbano": elkinnogueraurbano,
    "Susana Rodriguez-Buritica": susanarodriguezburitica
}

import teamMembers from '../../content/teamInfo.json'
import MemberBio from "../MemberBio";


export default function Team() {

    const imageUrl = "https://www.nationalgeographic.com/content/dam/expeditions/destinations/south-america/land/Columbia-Connections-to-the-Land-and-the-Past/columbia-connections-land-past-hero.jpg"
    return (
        <Grid container direction="row" justifyContent="center">
            
            <Container maxWidth="xl" disableGutters={true}>

                <Grid container direction="column">
                {/* sx={{backgroundColor: theme.palette.secondary.light}} */}
                <Grid item py={4} alignContent="center">
                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                        <Grid item xs={10} sm={6} md={6} lg={4} py={8} mt={4}>
                            <Typography variant="h2" align="center" style={{fontWeight: 'bold'}}>
                                Meet the DISES Team
                            </Typography>
                        </Grid>

                        <Grid item xs={10} sm={9} md={9} lg={9} mb={8}>
                            <Typography variant="h4" align="center">
                            Our team comprises of researchers from various institutions and disciplines, each bringing unique insight and experience to our collaborative project. Learn more about their work below.
                            </Typography>
                        </Grid>
                        
                        
                    </Grid>
                </Grid>

                <Grid item>
                    
                    <Grid container direction="row" justifyContent="center" mb={3}>

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