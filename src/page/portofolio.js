import React from 'react';
import Fade from 'react-reveal/Fade';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Picture1 from "../assets/images/picture 1.jpg";
import Picture2 from "../assets/images/picture 2.jpg";
import Picture3 from "../assets/images/picture 3.jpg";
import Picture4 from "../assets/images/picture 4.jpg";
import Picture5 from "../assets/images/picture 5.jpg";
import Picture6 from "../assets/images/picture 6.jpg";
import Picture7 from "../assets/images/picture 7.jpg";
import Picture8 from "../assets/images/picture 8.jpg";
import Layout from "../common/component/layout/layout";
import { Box, Text, Container, Grid, GridItem, Heading, Image, Link } from '@chakra-ui/react';


export default function Portofolio(props) {
    return ( 
        <>
            <Layout >
                <Container maxW="7xl" paddingTop={{ base: "7", md: "20", lg: "40" }} paddingLeft={{ base: "7", md: "20", lg: "20" }} paddingRight={{ base: "7", md: "20", lg: "20" }} paddingBottom={{ base: "20" }} minHeight="90vh">
                    <Fade duration={500} distance="30px" fraction={0.4} bottom>
                        <Box mt={{ base: "44", md: "28", lg: "0" }}>
                            <Heading as="h1" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "2xl", md: "5xl", lg: "7xl" }}>
                               Portofolio
                            </Heading>
                            <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "xs", md: "xs", lg: "sm" }} maxW="xl">
                                This is also a portofolio from instagram <Link href="https://www.instagram.com/p/CO1MxEao-RV/" color="teal.500" isExternal>@UI/UX <ExternalLinkIcon mx="2px" /></Link> 
                            </Text>
                        </Box>
                    </Fade>
                    <Fade duration={500} distance="30px" delay={340} fraction={0.4} bottom>
                    <Grid
                        pt={4}
                        h="full"
                        maxH="450px"
                        templateRows="repeat(6, 1fr)"
                        templateColumns="repeat(12, 1fr)"
                        gap={{base:2,md:4}}
                    >
                        <GridItem rowSpan={6} colSpan={8}>
                            <Image
                                src ={Picture1}
                                loading="lazy"
                                alt="picture"
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                width="full"
                                height="full"
                            />
                        </GridItem>
                        <GridItem rowSpan={3} colSpan={4}>
                            <Image
                                src ={Picture2}
                                alt=""
                                loading="lazy"
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                width="full"
                                height="full"
                            />
                        </GridItem>
                        <GridItem rowSpan={3} colSpan={4}>
                            <Image
                                loading="lazy"
                                src ={Picture3}
                                alt=""
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                width="full"
                                height="full"
                            />
                        </GridItem>
                    </Grid>
                </Fade>
                <Fade duration={500} distance="30px" delay={340} fraction={0.4} bottom>
                    <Grid
                        marginTop={{base:2,md:4}}
                        h="full"
                        maxH="700px"
                        templateRows="repeat(6, 1fr)"
                        templateColumns="repeat(12, 1fr)"
                        w="full"
                        gap={{base:2,md:4}}
                    >
                        <GridItem rowSpan={3} colSpan={4}>
                            <Image
                                src ={Picture4}
                                alt=""
                                loading="lazy"
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                width="full"
                                height="full"
                            />
                        </GridItem>
                        <GridItem rowSpan={6} colSpan={8}>
                            <Image
                               src ={Picture5}
                                alt= ""
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                width="full"
                                height="full"
                                loading="lazy"
                            />
                        </GridItem>
                        <GridItem rowSpan={3} colSpan={4}>
                            <Image
                               src ={Picture6}
                                alt=""
                                loading="lazy"
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                width="full"
                                height="full"
                            />
                        </GridItem>
                    </Grid>
                </Fade>
                <Fade duration={500} distance="30px" delay={340} fraction={0.4} bottom>
                    <Grid
                        marginTop={{base:2,md:4}}
                        h="full"
                        templateRows="repeat(6, 1fr)"
                        templateColumns="repeat(12, 1fr)"
                        w="full"
                        gap={{base:2,md:4}}
                    >
                        <GridItem rowSpan={6} colSpan={6}>
                            <Image
                                src ={Picture7}
                                alt=""
                                loading="lazy"
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                width="full"
                                height="full"
                            />
                        </GridItem>
                        <GridItem rowSpan={6} colSpan={6}>
                            <Image
                                src ={Picture8}
                                alt=""
                                loading="lazy"
                                boxSize="full"
                                objectFit="cover"
                                borderRadius="md"
                                width="full"
                                height="full"
                            />
                        </GridItem>
                    </Grid>
                </Fade>
                </Container>
            </Layout>
        </>
    );
}