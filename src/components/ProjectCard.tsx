import React, {useEffect, useState} from "react";
import { Grid, Typography, Box, Link, Modal, Card, CardContent } from "@mui/material";

interface Props {
    details: {
        name: string;
        description: string;
        image: string;
        links: Array<string>;
    }
    imagePath: string;
    
}

export default function ProjectCard(props: Props) {

    const { details, imagePath } = props
    const [open, setOpen] = useState(false)

    return (
        <Grid container direction="column">
            {/* <Typography>{details.name}</Typography> */}
            <Typography></Typography>
            <Box>

            </Box>
        </Grid>
    )
}
