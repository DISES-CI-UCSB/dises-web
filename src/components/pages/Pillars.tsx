import React from "react";

import { Grid, Typography, Container, Divider, Box, styled } from '@mui/material'
import landuseFig from '../../content/photos/landuse_fig.png'
import codesignEval from '../../content/photos/eval_codesign.png'
import codesignWorkshop from '../../content/photos/codesign_workshop.jpg'

const pillars = [
    
    {
        title: "",
        description: "",
        image: codesignWorkshop
    },
    {
        title: "",
        description: "",
        image: codesignEval
    }
]

export default function Pillars() {


    return (
            
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={11} md={10} lg={9} xl={8} pt = {4}>
                <Typography variant="h3" mb={3} paragraph>Our Pillars</Typography>
            </Grid>

            <Grid item xs={12} sm={11} md={10} lg={9} xl={8} pb= {8}>
                <Divider />
                <Grid container direction= "row" spacing={4} mt={2} justifyContent="space-around" >
                    <Grid item xs={12} sm={9} md={7} lg={8}>
                        <Typography variant='h4' paragraph>Advancing land use models with future projections of global change</Typography>
                        <Typography variant='h5' paragraph>
                        <p>We know the planet is warming, but most land use planning models are based on current conditions, and rarely account for future climate change even when certain interventions, such as siting new protected areas, are intended to protect against the effects of climate change. We are advancing land use forecasting models so that they include projections of biodiversity under climate change, as well as future energy transitions needed to meet sustainable development targets while also accounting for the need for increasing agricultural areas to sustain a growing human population. We are also responding to stakeholder needs by developing models that can be adjusted to reflect different land use prioritizations.</p>
                        <p>Examples of specific objectives include: </p>
                        <ul>
                            <li>Identifying species range shifts under climate change and assessing methods for incorporating global change, climate change, and habitat connectivity into prioritization models</li>
                            <li>Generating a set of future land use scenarios that reflect the range of current development and conservation priorities</li><li>Identifying co-benefits and additional sectors, such as freshwater, that can be spatially forecasted</li>
                            <li>Incorporating projections of biodiversity, connectivity, renewable energy, and agriculture, along with co-benefits, into spatial prioritizations.</li>
                        </ul>
                            
                            </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} lg={4} my={3} justifyContent="center" alignItems="center">
                        <Grid container>
                            <Box 
                                component="div"
                                
                                sx = {{
                                    width:"100%",
                                    height: "0",
                                    paddingBottom: '100%',
                                    backgroundImage: `url(${landuseFig})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    
                                }}
                            />
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={11} md={10} lg={9} xl={8} pb ={8}>
                <Divider />
                <Grid container direction= "row-reverse" spacing={4} mt={2} justifyContent="space-around" >
                    
                    
                    <Grid item xs={12} sm={9} md={7} lg={8}>
                        <Typography variant='h4' paragraph>Co-designing decision-making tools to support land use planning</Typography>
                        <Typography variant='h5' paragraph>
                            <p>Global maps are often used to set biodiversity conservation targets and priorities because they can help overcome the data accessibility and capacity challenges of implementing decision support tools. However, they often lack national or local validation and may not be useful for countries tasked with implementing these policies. Through close coordination with national and international agencies engaged in systematic land use planning in Colombia, we are co-designing decision support tools for national scale planning. Examples of specific objectives include:</p>
                            <ul>
                                <li>Holding a series of in-person and virtual workshops with partners and stakeholders throughout the project to build a community of practice focused on systematic land use planning.</li>
                                <li>Leading an effort to co-design decision support tools that will be used by decision makers and other planning agencies in Colombia to identify key areas for conservation, agriculture, and energy development.</li>
                                <li>Working closely with in-country partners to ensure the decision support tool leverages state-of-the-art datasets and analyses and is effective for the envisioned purpose.</li>
                            </ul>
                            
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={8} md={5} lg={4} my={3} justifyContent="center" alignItems="center" >
                        <Grid container>
                            <Box 
                                component="div"
                                
                                sx = {{
                                    width:"100%",
                                    height: "0",
                                    paddingBottom: '100%',
                                    backgroundImage: `url(${codesignWorkshop})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    
                                }}
                            />
                        </Grid> 
                    </Grid>
                    
                </Grid>
            </Grid>

            <Grid item xs={12} sm={11} md={10} lg={9} xl={8} pb ={8}>
                <Divider />
                <Grid container direction= "row" mt={6} columnSpacing={4} justifyContent="space-around" >
                    
                    <Grid item xs={12} sm={9} md={9} lg={7}>
                        <Typography variant='h4' paragraph>Evaluating the co-design process to improve decision-making capacity</Typography>
                        <Typography variant='h5' paragraph>
                        <p>Effective uptake of research in policy or practice must be built upon a foundation of active knowledge exchange and stakeholder engagement during the research process. What is often lacking though is a systematic appreciation of the specific knowledge exchange practices and their relative merits that make active exchange successful. We are advancing more viable systems of knowledge production that involve decision makers in shaping the research and empirically assessing the effectiveness of co-design for engaged research and assess the nuanced processes decision makers must navigate when planning for natural and social priorities. Examples of specific objectives include: </p>
                        <ul>
                            <li>Drawing on theory and co-design practices to develop and measure indicators of co-design efficacy.</li>
                            <li>Conducting  surveys and interviews with workshop participants to capture the nuances of the models and tools for decision-making and the usefulness of project outputs.</li>
                            <li>Assessing workshop recordings of co-design activities to advance scientific understanding of the factors contributing to co-design efficacy as well as methodological practices for evaluating it.</li>
                            <li>Undertaking an introspective self-study throughout the research process, using surveys, interviews, and observational methods to better understand team members’ engagement with the co-design process and its impacts on research decision-making.</li>
                        </ul>
                            
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} lg={5} my={3} justifyContent="center" alignItems="center" >
                        <Grid container>
                            <Box 
                                component="div"
                                
                                sx = {{
                                    width:"100%",
                                    height: "0",
                                    paddingBottom: '50%',
                                    backgroundImage: `url(${codesignEval})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    
                                }}
                            />
                        </Grid> 
                    </Grid>
                    
                </Grid>
            </Grid>
            
        </Grid>

    )
}