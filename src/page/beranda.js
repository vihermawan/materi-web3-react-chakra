import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from "../common/component/layout/layout";
import { Box, Text, Container, Grid, GridItem, Heading } from '@chakra-ui/react';

export default function Beranda(props) {
    return ( 
        <>
            <Layout >
                <Container maxW="7xl" paddingTop={{ base: "7", md: "20", lg: "40" }} paddingLeft={{ base: "7", md: "20", lg: "20" }} paddingRight={{ base: "7", md: "20", lg: "20" }} paddingBottom={{ base: "20" }} minHeight="90vh">
                    <Fade duration={500} distance="30px" fraction={0.4} bottom>
                        <Box mt={{ base: "44", md: "28", lg: "0" }}>
                            <Heading as="h1" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "2xl", md: "5xl", lg: "7xl" }}>
                                Hi, Welcome to my head space !
                                I'am a Fullstack Developer also a student 🐱‍💻
                            </Heading>
                        </Box>
                    </Fade>
                    <Fade duration={500} distance="30px" delay={100} fraction={0.4} bottom>
                        <Box as="section">
                            <Grid
                                h="full"
                                width="full"
                                templateRows="repeat(1, 1fr)"
                                templateColumns="repeat(5, 1fr)"
                                marginTop={{ base: "0.5", md: "7", lg: "1.5" }}
                                gap={{ base: 1, md: 4 }}
                            >
                                <GridItem colSpan={{ base: 5, md: 2, lg: 2 }} width="full" height="full">
                                    <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign="justify" fontSize={{ base: "xs", md: "xs", lg: "sm" }}>
                                    This website is used for web 3 practicum courses on react js. Designed to use chakra ui as a library in it and use several additional libraries such as animation and dark mode.
                                    </Text>
                                </GridItem>
                                <GridItem colSpan={{ base: 5, md: 2, lg: 2 }} width="full">
                                    <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign="justify" fontSize={{ base: "xs", md: "xs", lg: "sm" }}>
                                        This website can be modified at will, and various content can be added if necessary. If you want to be migrated into typescript are also welcome, hopefully useful.
                                    </Text>
                                </GridItem>
                            </Grid>
                        </Box>
                    </Fade>
                </Container>
            </Layout>
        </>
    );
}