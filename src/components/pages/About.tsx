import React from "react";

import { Grid, Typography, Container, Box } from '@mui/material'
import FeaturedImage from "../FeaturedImage";

import dises_goals from '../../content/photos/figures/dises_goals.jpg'
import colombia_pressures from '../../content/photos/figures/colombia_pressures.jpg'

export default function About() {

    const featuredImage = {
        image: dises_goals,
        imageText: 'schema summarizing dises goals'
      };


    return (
        <Container maxWidth="xl" disableGutters={true}>
            <Grid container direction="column" my={4}>

                               
                {/* Introduction */}
                <Grid item px={4}>

                    <Grid container direction="row">
                        <Grid item>
                            <Typography variant='h3'>
                            Introduction
                        </Typography>

                        <Typography variant='h6' my={2}>
                        The future of livelihoods and ecosystems on Earth are at an inflection point.
                        Millions of species face the threat of extinction due to human-caused climate change, and some scientist suggest we’ve already entered a mass extinction event.
                        Planetary warming will result in redistribution of life on Earth, increasing conflicts over land use. 
                        At this critical juncture, we must find a way to simultaneously meet the energy and food demands of a growing population while conserving land to protect ecosystems and biodiversity. 
                        </Typography>

                        <Typography variant='h6' my={2}>
                        Over the past several decades, a global community of governments, indigenous groups, and NGOs have agreed to meet sustainable land use goals to mitigate the effects of climate change; however, few of these targets have been met as we face mounting challenges. 
                        The Convention on Biological Diversity’s (CBD) Aichi Target 11 aimed to protect 17% of terrestrial land by 2020; despite the fact only 25% of countries have met this goal, the CBD’s post-2020 Global Biodiversity Framework recommends protecting 30% of the planet by 2030. 
                        Additionally, recent reports indicate countries are not on track to meet the 2016 Paris Agreement’s emission goals9, with “no credible pathway” to limit average planetary warming to 1.5°C.
                        Although the scientific community has worked to better understand biosphere processes, there is a clear disconnect at national and regional levels between forecasting and action. 
                        </Typography>

                        <Typography variant="h6" my={2}>
                        Co-design offers a path toward bridging this gap between scientists and decision makers through collaboration and knowledge exchange. 
                        In Colombia, there is an urgent need to adopt policies that protect both human livelihoods and biodiversity. 
                        Colombia is the second most biodiverse country in the world and home to rare ecosystems.
                        However, increasing social inequity and a rising population have driven land use practices that threaten Colombia’s natural systems.
                        By partnering with the Alexander Von Humboldt Biological Resources Institute, this project aims to build upon existing scientific models and communities of practice to co-design integrated land use solutions that are politically salient. 
                        This will achieved by: 
                        </Typography>       

                                <ol>               
                                    <li>
                                        <Typography variant="h6" my={2}>
                                            <strong>Co-design scientific models of land use planning under future climate scenarios</strong> by integrating diverse, multi-scale data into a dynamic prioritization model that informs actionable and sustainable land use plans to prevent the loss of biodiversity and ecosystem services.
                                        </Typography>
                                    </li>                        
                                    <li>
                                        <Typography variant="h6" my={2}>
                                            <strong>Improve the decision-making capacity of groups and organizations by empirically assessing the effectiveness of co-design for engaged research</strong> and assessing the nuanced natural and social priorities that decision makers must consider as they weigh how to protect the planet as well as advance human lives and livelihoods.
                                        </Typography>
                                    </li>
                                </ol>
                        </Grid>

                        <Grid item>
                        <Box 
                            component="img"
                            padding={2}
                            sx = {{
                                width:"90%",
                                height: "auto"
                            }}
                            src={colombia_pressures} />
                        </Grid>
                    </Grid>
                    

                </Grid>

                <Grid item m={4}>
                    <FeaturedImage post={featuredImage} />
                </Grid>

                {/* Project Overview */}
                <Grid item px={4}>
                    <Typography variant='h3'>
                        Project Overview
                    </Typography>

                    <Typography variant='h6' my={2}>
                    This project will develop through an iterative process of co-design with partners and stakeholders in Colombia. 
                    The project’s two main components are outlined below. 
                    </Typography>

                    <ol>               
                        <li>
                            <Typography variant="h6" my={2}>
                                <strong>Co-design national land use prioritization model</strong>
                            </Typography>
                            <Typography variant="h6" my={2}>
                                This component comprises the computational bulk of the project. Its specific goals, tasks, and analyses may evolve based on stakeholder feedback. The component will be achieved through the following parts: 
                            </Typography>
                            <ul>
                                <li>
                                    <Typography variant="h6" my={2}>
                                        Help Humboldt partners develop and maintain a Community of Practice. 
                                        Engage with this community and other stakeholders to organize a series of co-design workshops
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="h6" my={2}>
                                        Identify species range shifts under climate change in Colombia and assess methods for incorporating habitat connectivity into the prioritization model
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="h6" my={2}>
                                        Generate a set of future land use scenarios that reflect the range of current development and conservation priorities in Colombia
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="h6" my={2}>
                                        Identify co-benefits and additional sectors, such as freshwater, that can be spatially forecasted 
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="h6" my={2}>
                                        Incorporate projections of biodiversity, connectivity, renewable energy, and agriculture, along with co-benefits, into a national spatial prioritization. 
                                    </Typography>
                                </li>
                            </ul>
                            <Typography variant="h6" my={3}>
                                A series of workshops with partners and stakeholders will occur throughout the project. 
                                The main part of the analysis will take place between Spring 2024 and Winter 2026. 
                            </Typography>
                        </li>                        
                        <li>
                            <Typography variant="h6" my={2}>
                                <strong>Evaluate co-design efficacy</strong>
                            </Typography>
                            <Typography variant="h6" my={2}>
                            This component will occur in parallel throughout the length of the project. 
                            Surveys will be conducted after every workshop, and the outcomes of workshops and progress made will be noted. 
                            Additional interviews will be conducted with participants to capture the nuances of decision-making and usefulness of project outputs. 
                            Survey and interview results will be analyzed with generalized linear and linear mixed models to evaluate the efficacy of the co-designed climate science based on specific indicators. 
                            </Typography>
                        </li>
                    </ol>
                </Grid>

                
            </Grid>
        </Container>
    )
}