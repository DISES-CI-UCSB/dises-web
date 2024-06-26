import React from 'react'
import { Grid, Box, Typography} from '@mui/material'

import FeaturedImage from './FeaturedImage'

import theme from '../../theme'
import workshopUrl from '../../content/photos/workshop.jpg'
import disesGoals from '../../content/photos/figures/dises_goals.jpg'
import ucsbLogo from '../../content/photos/logos/ucsb_logo.png'
import nsfLogo from '../../content/photos/logos/nsf_logo.png'
import asuLogo from '../../content/photos/logos/asu_logo.png'
import humboldtLogo from '../../content/photos/logos/humboldt_logo.png'
import ciLogo from '../../content/photos/logos/ci_logo.png'


export default function Home() {

    const featuredImage = {
        title: 'DISES',
        description:
          "Dynamics of Integrated Socio-Ecological Systems",
        image: 'https://www.muchbetteradventures.com/magazine/content/images/2023/12/GettyImages-610410404--1--1.jpg',
        imageText: 'main image description'
      };

      const logos = [ucsbLogo, asuLogo, ciLogo, humboldtLogo, nsfLogo]

    return (
        <Grid container direction="column">
            {/* Title Picture */}
            <Grid item>
              <FeaturedImage post={featuredImage} main={true} />
            </Grid>
            {/* Basic Project Description */}
            <Grid item pb={5}>
              <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} md={10} lg={5} xl={4}>
                  <Typography component="h2" variant="h3" pl={4}>
                    Project Aims
                  </Typography>
                  <Box 
                    component="section" 
                    p = {4}
                    >
                    <Typography component="h4" variant="h5" mb={4}>
                      DISES addresses the need to balance human livelihoods and biodiversity conservation in Colombia, one of the world's biodiversity hotspots. 
                      As global change threatens ecosystems and species, we aim to develop integrated land use solutions through co-design, bridging the gap between scientists and decision-makers. 
                      By partnering with the Alexander Von Humboldt Biological Resources Institute, we will co-design scientific models of land use planning under future climate scenarios and improve decision-making capacity. 
                      Through workshops and iterative collaboration, we will prioritize national land use strategies that protect biodiversity while meeting human needs, ensuring a sustainable future for Colombia's ecosystems and communities.
                    </Typography>
                    
                    <Typography component="h4" variant="h5">
                      See the About page for a more in depth description of our methods and goals.
                    </Typography>
                    
                  </Box>
                </Grid>
                <Grid item xs={12} md={10} lg={7} xl = {6}>
                  <Grid container justifyContent="center">
                    <Box 
                      component="img"
                      padding={2}
                      sx = {{
                        width:"90%",
                        height: "auto"
                      }}
                      src={disesGoals} />
                    
                  </Grid>
                  
                </Grid>
                
              </Grid>
              
            </Grid>
            {/* Collaborators */}
            <Grid item pb={5} pt={5} sx={{backgroundColor: theme.palette.secondary.light}}>
              <Grid container direction="row" justifyContent="center">
                <Grid item>
                  <Typography align="center" component="h2" variant="h3">
                    Collaborators
                  </Typography>
                
                </Grid>
                <Grid container direction = "row" justifyContent="center" >

                  <Grid item xs={12} md={10} xl={8}>
                  <Box component="section" p = {4}>
                    <Typography align="left" component="h4" variant="h5" width="100%">
                      This project is a collaboration between institutions and organizations across the United States and Colombia. 
                      Collaborators include members from Conservation International USA, UC Santa Barbara, The Ohio State University, Arizona State University, and Alexander Von Humboldt Biological Resources Institute. 
                    </Typography>
                    </Box>
                  </Grid>
                  
                    
                  
                </Grid>
                <Grid item xs={12} md={6} xl={8} pt={8}>
                  <Grid container justifyContent="space-evenly" alignItems="center" columnGap={6} rowGap={3}>
                    {logos.map((logo) => (
                      <Grid item >
                        <Box 
                        component="img"
                        className='logos'
                        
                        src={logo} />
                        </Grid>
                    ))}

                  </Grid>
                  
                </Grid>
                
              </Grid>
              
            </Grid>
            
        </Grid>
    )
}