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
    
}

export default function MemberBio(props: Props) {

    const { details, imagePath } = props
    const [open, setOpen] = useState(false)

    return (
        <Grid item xs={12} sm={8} md={4} lg={3} m={5} key={details.name}>
            <Grid container 
                direction="column" 
                onClick={() => setOpen(true)}
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
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                sx = {{
                    height: '100%',
                    overflow:'scroll',
                    position:'absolute',

                }}    
            >
                <Card sx={{minWidth: "300px",  maxHeight: "100%", overflow:'scroll', maxWidth: "1400px", width: "70vw", position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%, -50%)'}} >

                    <CardContent>
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
                                    src = {imagePath} /> 
                            </Grid>             
                            <Grid item xs={12} sm={10} md={9} lg={7} p="2vw">
                                {/* name */}
                                <Typography component="h3" variant="h3" align="center" mb={4}>
                                {details.name}
                                </Typography>
                                
                                {/* description */}
                                <Typography component="h5" variant="h5" mb={1} px={3} align="left">
                                    {details.description}
                                </Typography>
                                
                                {/* links  */}
                                <Typography component="h5" variant="h5" px={3} align="left">
                                    {details.links.map((link) => (
                                        <Link key={link} href={link} underline="hover" target="_blank" rel="noreferrer" color="primary.light">{link}</Link>
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
