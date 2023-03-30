import { Box, Button, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
import {CgGoogle,CgYoutube} from "react-icons/cg"
import {SiCoursera,SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
import vg from "../../assets/images/img1"
import introvdo from "../../assets/videos/introvdo.mp4"

const Home = () => {
  return (
    <section className='home'>
        <div className='container'>
            <Stack direction={["column","row"]}
            height="100%"
            justifyContent={["center","space-between"]}
            alignItems="center"
            spacing={['16','56']}
            >
            <VStack width={"full"} alignItems={["center","flex-end"]} spacing="8">
                <Heading children="Learn From The Experts" size={'2xl'}/>
                <Text textAlign={["center","left"]} fontSize={"2xl"} fontFamily={"cursive"} children="Find Valuable Content At Reasonable Price"/>
                <Link to={"/courses"}>
                <Button size={"lg"} colorScheme="yellow">
                    Explore Now
                </Button>
                </Link>
            </VStack>

            <Image className='vector-graphics' boxSize={"md"} src={vg} objectFit="contain"/>

            </Stack>
        </div>

        <Box padding={"8"} bg="blackAlpha.800">
            <Heading textAlign={"center"} fontFamily="body" color={"yellow.400"} children="Our Brands"/>
            <HStack className='brandsBanner' justifyContent={"space-evenly"} marginTop="4">
            <CgGoogle/>
            <CgYoutube/>
            <SiCoursera/>
            <SiUdemy/>
            <DiAws/>
            </HStack>
        </Box>

        <div className='container2'>
            <video 
            autoPlay
             controls 
             controlsList='nodownload nofullscreen noremoteplayback'
            disablePictureInPicture
            disableRemotePlayback
            src={introvdo}>
                
            </video>
        </div>
    </section>
  )
}

export default Home