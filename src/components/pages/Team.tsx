import React, {useState} from "react";
import { Grid, Container, Modal, Box, Card, CardContent, Typography, Link, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

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
    const [openModal, setOpenModal] = useState(false)
    const [modalInfo, setModalInfo] = useState({imagePath: "", name: "", description: "", links: [],})

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
                            <MemberBio details={member} imagePath={teamPhotos[member.name]} openModal={setOpenModal} setModalInfo={setModalInfo} />
                        ))}
   
                    </Grid>

                </Grid>

                </Grid>
            
                
            </Container>
        
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Card sx={{minWidth: "300px",  maxHeight: "100%", overflow:'scroll', maxWidth: "1400px", width: "70vw", position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%, -50%)'}} >

                    <CardContent>
                        {/* close */}
                        <IconButton onClick={() => setOpenModal(false)}>
                            <CloseIcon />
                        </IconButton>
                        <Grid container direction="row" justifyContent="space-around">
                            {/* image */}  

                            <Grid item xs={12} sm={9} md={7} lg={5} p="2vw" alignSelf="center" justifySelf="center">
                                <Box 
                                    component="img"
                                    sx = {{
                                        width:"100%",
                                        height: "auto",
                                        border: 1,
                                        
                                        }}
                                    src = {modalInfo.imagePath} /> 
                            </Grid>             
                            <Grid item xs={12} sm={10} md={9} lg={7} p="2vw">
                                
                                {/* name */}
                                <Typography component="h3" variant="h3" align="center" mb={4}>
                                {modalInfo.name}
                                </Typography>
                                
                                {/* description */}
                                <Typography component="h5" variant="h5" mb={1} px={3} align="left">
                                    {modalInfo.description}
                                </Typography>
                                
                                {/* links  */}
                                <Typography component="h5" variant="h5" px={3} align="left">
                                    {modalInfo.links.map((link) => (
                                        <Link key={link} href={link} underline="hover" target="_blank" rel="noreferrer" color="secondary.dark">{link}</Link>
                                        ))}
                                </Typography>

                            </Grid>
                                
                                

                        </Grid>

                    </CardContent>
                
                </Card>

            </Modal>

            
        </Grid>
    )
}