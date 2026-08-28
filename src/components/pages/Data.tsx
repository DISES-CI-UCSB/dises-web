//  add placeholder Data Page

import React from 'react'
import { Grid, Box, Typography, Divider } from '@mui/material'
import fuzzyFrontend from '../../content/photos/fuzzy_frontend.png'


export default function Data() {

    return (

        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={11} sm={11} md={10} lg={9} xl={8} pt = {4}>
                <Typography variant="h3" mb={3} paragraph>Data & Tools</Typography>
            </Grid>

            <Grid item xs={11} sm={11} md={10} lg={9} xl={8} pb= {8}>
                <Divider />
                <Grid container direction= "row" spacing={4} mt={2} justifyContent="space-around" >
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <Typography variant='h4' paragraph>What is the fuzzy front end?</Typography>
                        <Typography variant='h5' paragraph>
                        <p>Conservation research has moved toward more participatory and inclusive models in which researchers and stakeholders jointly define, design, and conduct research to generate usable and actionable knowledge. However, research-implementation gaps still hinder the use of the science in decision making, and conservation initiatives often fail to realize long-term outcomes. The 'fuzzy front end' is a concept from design and refers to the first stage of the new product development process, in which researchers and potential product users collaboratively identify what will be designed. Failing to engage stakeholders in the fuzzy front end can lead to costly delays, misallocated resources, and science underperforming its potential.</p>

                            
                            </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} my={3} justifyContent="center" alignItems="center">
                        <Grid container>
                        <Box
                            component="img"
                            src={fuzzyFrontend}
                            alt="Fuzzy front end diagram"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                            }}
                            />
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>

            

           


        </Grid>


    )
}