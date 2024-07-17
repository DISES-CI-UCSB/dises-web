import React from "react";

import { Grid, Typography, Container, Box, styled } from '@mui/material'
import ProjectCard from '../ProjectCard'

const pillars = [
    {
        title: "Implementing co-design for effective decision making",
        description: "More details on the way!",
        image: "https://www.otherwayround.travel/wp-content/uploads/2019/09/exploring-colombia-coffee-region.jpg"
    },
    {
        title: "Advancing land use models with future projections of global change",
        description: "More details on the way!",
        image: "https://www.otherwayround.travel/wp-content/uploads/2019/09/exploring-colombia-coffee-region.jpg"
    },
    {
        title: "Creating decision-making tools to support land use planning",
        description: "More details on the way!",
        image: "https://www.otherwayround.travel/wp-content/uploads/2019/09/exploring-colombia-coffee-region.jpg"
    }
]

export default function Pillars() {


    return (
            
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={11} md={10} lg={9} xl={8} pt = {4}>
                <Typography variant="h3" mb={3} paragraph>Our Pillars</Typography>
            </Grid>
            {pillars.map((project, index) => (
                
                <ProjectCard details={project} key={project.title} index={index} />
            ))}
            
        </Grid>

    )
}