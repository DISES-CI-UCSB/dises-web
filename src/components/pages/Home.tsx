import React from 'react'
import { Grid, Box, Typography, Divider } from '@mui/material'

import FeaturedImage from './FeaturedImage'

import theme from '../../theme'
import workshop from '../../content/photos/workshop.jpg'

import colombiaMountains from '../../content/photos/ci_48058606_Full.jpg'

import ucsbLogo from '../../content/photos/logos/ucsb_logo.png'
import asuLogo from '../../content/photos/logos/asu_logo.png'
import humboldtLogo from '../../content/photos/logos/humboldt_logo.png'
import ciLogo from '../../content/photos/logos/ci_logo.png'
import osuLogo from '../../content/photos/logos/osu_logo.png'


export default function Home() {

    const featuredImage = {
        title: 'ECOPLAN',
        description:
          "Evaluating Co-Design for People, Land Use, and Nature",
        image: colombiaMountains,
        imageText: 'Colombia Mountain Landscape, credit: Jeff Gale',
        credit: 'Photo by Jeff Gale, 2012'
      };

      const logos = [ucsbLogo, asuLogo, ciLogo, humboldtLogo, osuLogo]

    return (
        <Grid container direction="column">
            {/* Title Picture */}
            <Grid item>
              <FeaturedImage post={featuredImage} main={true} />
            </Grid>
            {/* Basic Project Description */}

            <Grid item >
                <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >

                    {/* Project Aims */}
                    <Grid item py={4} xs={12} sm={11} md={10} lg={9} xl={8}>
                        
                        <Typography component="h3" variant="h3" pl={4}>
                        Project Purpose
                        </Typography>
                                           
                        <Box component="section" px={4}>
                            
                            <Typography variant='h5' mt={2}>
                            ECOPLAN addresses the need to balance conservation and human livelihoods for sustainable futures. 
                            As global change threatens ecosystems and species, we are developing integrated land use solutions through co-design, bridging the gap between scientists and decision-makers. 
                            By partnering with the Alexander Von Humboldt Biological Resources Institute in Colombia, one of the world's biodiversity hotspots, we are co-designing scientific models of land use planning under future climate scenarios and improving decision-making capacity. 
                            Through workshops and iterative collaboration, we prioritize national land use strategies that protect biodiversity while meeting human needs, ensuring a sustainable future for Colombia's ecosystems and communities.
                            </Typography>
                            
                        </Box>
                       
                    </Grid>

                    <Grid item xs={12} sm={11} md={10} lg={9} xl={8} py={2} >
                    <Divider />
                    </Grid>

                    {/* Co-design definition */}
                    <Grid item py={4} xs={12} sm={11} md={10} lg={9} xl={8} > 

                      <Grid container direction="row-reverse" justifyContent="center" alignItems="center"> {/* sx={{backgroundColor: theme.palette.secondary.light}} */}

                          <Grid item xs={12} sm={12} md={6} lg={6} mb={4}>
                            <Typography component="h3" variant="h3" pl={4}>
                              What is co-design?
                            </Typography>
                            
                            <Box component="section" pl={4} pr={2}>
                                
                                <Typography variant='h5' my={2}>
                                  Co-design refers to a collaborative approach to decision-making where designers, stakeholders, and end-users work together throughout the design process to create solutions that meet everyone's needs and expectations. 
                                  It emphasizes mutual learning, and shared decision-making among participants.
                                    
                                  Co-design involves various activities such as workshops, brainstorming sessions, prototyping, and feedback loops to ensure that diverse perspectives are considered and integrated into the final design. 
                                  This approach aims to produce more effective and user-centered solutions by leveraging the collective knowledge and creativity of all involved parties.
                                </Typography> 
                            </Box>
                          </Grid>
                          
                          {/* Workshop image */}
                          <Grid item xs={12} sm={8} md={6} lg={6} display={{xs: "none", md: "block"}}>
                              <Grid container justifyContent="center" px={2}>
                                <Box 
                                    component="img"
                                    
                                    sx = {{
                                        width:"100%",
                                        minHeight: "500px",
                                        backgroundImage: `url(${workshop})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                   />
                              </Grid> 
                          </Grid>
                          <Grid item xs={12} sm={11} md={6} lg={6} display={{xs: "block", md: "none"}}>
                              <Grid container justifyContent="center">
                                <Box 
                                    component="img"
                                    
                                    sx = {{
                                        width:"100%",
                                        minHeight: "300px",
                                        backgroundImage: `url(${workshop})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                   />
                              </Grid> 
                          </Grid>
                        </Grid>                                             
                    </Grid>
                     
                    <Grid item xs={12} sm={11} md={10} lg={9} xl={8} py={2} >
                    <Divider />
                    </Grid>

                </Grid>                         
                           
            </Grid>
                
            {/* Collaborators */}
            <Grid item py={4} >
              <Grid container direction="row" justifyContent="center">
                <Grid item>
                  <Typography align="center" component="h3" variant="h3">
                    Collaborators
                  </Typography>
                
                </Grid>
                <Grid container direction = "row" justifyContent="center" >

                  <Grid item xs={12} md={10} xl={8}>
                    <Box component="section" p = {4}>
                      <Typography align="left" variant="h5" width="100%">
                        This project is a collaboration between institutions and organizations across the United States and Colombia. 
                        Collaborators include members from the University of California-Santa Barbara, Conservation International Moore Center for Science, Arizona State University, Alexander Von Humboldt Biological Resources Institute, and The Ohio State University. 
                        Project funding comes from the U.S. National Science Foundation (NSF).
                      </Typography>
                    </Box>
                  </Grid>
                  
                </Grid>
                <Grid item xs={11} md={10} lg={8} xl={7} pt={4}>
                  <Grid container justifyContent="space-evenly" alignItems="center" columnGap={4} rowGap={3}>
                    {logos.map((logo) => (
                      <Grid item >
                        <Box 
                        component="img"
                        className='logos'
                        sx={{
                          maxWidth: "100px"
                        }}
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