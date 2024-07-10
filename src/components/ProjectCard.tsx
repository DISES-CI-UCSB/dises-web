import React, {useEffect, useState} from "react";
import { Container, Grid, Typography, Box, Divider } from "@mui/material";

interface Props {  
    details: {
        title: string;
        description: string;
        image: string;
    },
    index: number;
    
    // links: Array<string>;
}

export default function ProjectCard(props: Props) {

    const { title, description, image } = props.details
    const odd = props.index % 2 !== 0

    return (
        <Grid item xs={12} sm={11} md={10} lg={9} xl={8} pb = {8}>
            <Divider />
            <Grid container direction= {odd ? "row" : "row-reverse"} spacing={4} mt={2} justifyContent="space-around" >
                <Grid item xs={12} sm={9} md={7} lg={8}>
                    <Typography variant='h4' paragraph>{title}</Typography>
                    <Typography variant='h6' paragraph>{description}</Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={5} lg={4} justifyContent="center" alignItems="center">
                    <Grid container>
                        <Box 
                            component="div"
                            
                            sx = {{
                                width:"100%",
                                height: "0",
                                paddingBottom: '100%',
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                
                            }}
                        />
                    </Grid> 
                </Grid>
                

                
            </Grid>
        </Grid>
        
    )
}
