import { Avatar, Box, Button, Container, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {RiSecurePaymentFill} from "react-icons/ri"
import introvdo from "../../assets/videos/introvdo.mp4"
// import {termsAndCondition} from "../../assets/docs/termsAndCondition"


const Founder = () => {
return (
    <Stack 
direction={["column","row"]}
spacing={["4","16"]}
padding={"8"}
>
<VStack>
    <Avatar src="https://avatars.githubusercontent.com/u/103384716?s=400&u=b8ed568eb90c78bb351a8d8cae307b8dfeb252e8&v=4" boxSize={["40","48"]} />
    <Text children="Founder" opacity={0.7}/>
</VStack>
<VStack justifyContent={"center"} alignItems={["center","flex-start"]}>
    <Heading children="Pooja Narawad" size={["md","xl"]} />
    <Text children={`Hi , I am a full-stack developer and a teacher.
    Our mission is to provide quality content at reasonable
    price.`} />
</VStack>
</Stack>
)
}

const VideoPlayer = () => (
    <Box>
        <video 
            autoPlay
            loop
            controls 
            controlsList='nodownload nofullscreen noremoteplayback'
            disablePictureInPicture
            disableRemotePlayback
            src={introvdo}>
                
            </video>
    </Box>
)

const TandC = ({termsAndCondition}) => {
    return (
        <>
        <Heading
        size={"md"} 
        children={"Terms & Condition"}
        textAlign={["center","left"]}
        my="4"
        />
      <Box h="sm" p="4" overflowY={"scroll"}>
      <Text 
      fontFamily={"heading"}
      letterSpacing={"widest"} 
      textAlign={["center","left"]}
      >
      {termsAndCondition}
      </Text>
      <Heading 
        my="4"
        size={"xs"}
        children="Refund only applicable for cancellation
        within 7 days."
      />
      </Box>
        </>
    )
}

const About = () => {
  return (
    <Container maxW={"container.lg"} padding="16" boxShadow={"lg"}>
    <Heading children="About Us" textAlign={["center","left"]} />
    <Founder/>
    <Stack m={"8"} direction={["column","row"]} alignItems="center">
    <Text fontFamily={"cursive"} m="8" textAlign={["center","left"]}>
        We are a video streaming platform with some 
        premium courses available only for premium 
        users.
    </Text>
    <Link to="/subscribe">
        <Button variant={"ghost"} colorScheme="yellow">
            Checkout Our Plan
        </Button>
    </Link>
    </Stack>
    <VideoPlayer />

    <TandC termsAndCondition={"termsAndCondition"} />

    <HStack my="4" p={"4"}>
        <RiSecurePaymentFill/>
        <Heading 
        size={"xs"}
        fontFamily="sans-serif"
        textTransform={"uppercase"}
        children={"Payment is secured by Razorpay"} />
    </HStack>
    </Container>
  )
}

export default About