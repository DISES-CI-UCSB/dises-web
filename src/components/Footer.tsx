// add footer with contact info
import * as React from 'react';
import { Box, Paper, Divider, Typography, Button, Grid} from '@mui/material'
import nsfLogo from '../content/photos/logos/nsf_logo.png'

interface Props {
    setCurrentPage: (newString: string) => void
}

export default function Footer(props: Props) {
    const setCurrentPage = props.setCurrentPage
    return (
        <Paper
            sx={{
                height: 'auto',
                width: '100%',
                backgroundColor: '#333', // Adjust background color as needed
                color: '#fff', // Text color
                padding: '20px', // Padding around content
                marginTop: 'auto', // Pushes footer to the bottom of the page
            }}
        >
            <Grid container direction="row" width="100%" justifyContent="center">
                <Grid item xs={12} sm={11} md={10} lg={9} xl={8} >
                        <Grid container direction="row" columnGap={3} alignItems="center" my={3}>
                                <Grid item >
                                        <Box 
                                        flex= {1}
                                        flexShrink={1}
                                        component="img"
                                        className='logos'
                                        sx={{maxWidth: '140px'}}
                                        src={nsfLogo} />
                                </Grid>
                                <Grid item xs={8} sm={4} md={3}>
                                    <Typography paragraph variant='h6'><b>NSF Award Number</b>: 2401273</Typography>
                                    <Typography variant='h6'>DISES: Decision Making for Land Use Planning under Future Climate
                                    Scenarios through Engaged Research via Co-Design</Typography>
                                </Grid>
                                
                            </Grid>
                        
                    <Divider sx={{ mt: 1, mb: 1, bgcolor:"#fff"}} />
                    <Grid container direction="row" justifyContent="space-around" textAlign="center">
                        <Grid item xs= {4} sm={3}>
                            <Typography variant='h6'>
                                <Button variant='text' color='inherit' onClick={() => {setCurrentPage("Home")}}>Home</Button>
                            </Typography>
                        </Grid>
                        <Grid item xs= {4} sm={3}>
                            <Typography variant='h6'>
                                <Button variant='text' color='inherit' onClick={() => {setCurrentPage("Pillars")}}>Pillars</Button>
                            </Typography>
                        </Grid>
                        <Grid item xs= {4} sm={3}>
                            <Typography variant='h6'>
                                <Button variant='text' color='inherit' onClick={() => {setCurrentPage("Team")}}>Team</Button>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mt: 1, mb: 2, bgcolor:"#fff"}} />
                    <Grid container spacing={2} direction="row" justifyContent="space-between" alignItems="start">
                        <Grid item xs={5} sm={4}>   
                            <Grid container direction="row" justifyContent="center">
                                    <Grid item>
                                        <Typography variant='h6'>UC Santa Barbara</Typography>
                                        <Typography variant='h6'>3227 Cheadle Hall</Typography>
                                        <Typography variant='h6'>Santa Barbara</Typography>
                                        <Typography variant='h6'>CA  US  93106-0001</Typography>
                                        <Typography variant='h6'>(805)893-4188</Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                        <Grid item xs={1} sm={4}>
                           
                        </Grid>
                        <Grid item xs={5} sm={4}>
                            <Grid container direction="row" justifyContent="center">
                                <Grid item>
                                    <Typography variant='h6' paragraph><b>Contact Us: </b></Typography>
                                    <Typography variant='h6'>ecoplan.dises@gmail.com</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Box mt={2}>
                        <Typography variant='h6' align="center">
                            &copy; {new Date().getFullYear()} ECO-PLAN. All rights reserved.
                        </Typography>
                    </Box>
                </Grid>
                

            </Grid>
            
        </Paper>
        
    )
}