import React, { useState } from 'react'
import { Grid, Container } from '@mui/material'

import Home from './pages/Home'
import Team from './pages/Team'
import Projects from './pages/Projects'

import Header from './Header'

export default function AppContainer() {

    const [currentPage, setCurrentPage] = useState('Home')

    const renderPage = () => {
        if (currentPage === 'Home'){
            return <Home />
        } else if (currentPage === 'Team') {
            return <Team />
        } else if (currentPage === 'Projects'){
            return <Projects />
        }
    }

    const handlePageChange = (page: string) => setCurrentPage(page)

    return (

        <Container maxWidth={false} disableGutters={true}>
            {/* Header */}
            <Header currentPage ={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </Container>
    )
}