import { Button, Container, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState} from 'react'
import {Link} from "react-router-dom"


const Courses = () => {
    const [keyword,setKeyword] = useState("");
    const [category,setCategory] = useState("");

    const addToPlaylistHandler = () => {
      return(
        console.log("Added to playlist")
      )
    }
    const categories = [
       " Web Development","Artifitial Intelligence","Data Science",
        "App Development", "Game Development","Data Structure & Algorithm"
    ]

    const Course = ({views,title,imageSrc,id,addToPlaylistHandler,creator,description,lectureCount})=>{
      return (
        <VStack className='course' alignItems={["center","flex-start"]}>
          <Image src={imageSrc} boxSize="60" objectFit={"contain"} marginTop="5"/>
          <Heading textAlign={["center","left"]} maxW="200px" fontFamily={"sans-serif"}
          size={"sm"}
            noOfLines="3"
            children={title}
          />
          <Text noOfLines={2} children={description} />
          <HStack>
          <Text fontWeight={"bold"}
           children={'Creator'}
           textTransform={"uppercase"}
            />
          <Text fontFamily={"body"}
           children={creator}
           textTransform={"uppercase"}
            />
          </HStack>
          <Heading textAlign={"center"}  textTransform={"uppercase"} size="xs" children={`Lectures-${lectureCount}`} />
          <Heading  size="xs"  textTransform={"uppercase"} children={`Views-${views}`} />
          <Stack direction={["column","row"]} alignItems="center">
            <Link to={`/course/${id}`}>
              <Button colorScheme={"yellow"}>Watch Now</Button>
            </Link>
            <Button variant={"ghost"} colorScheme={"yellow"} onClick={()=> addToPlaylistHandler(id)}>Add To Playlist</Button>
          </Stack>
        </VStack>
      )
    }
  return (
    <Container minH={"90vh"} maxW="container.lg" padding={"8"}>
        <Heading children="All Courses" m={"8"}/>
        <Input value={keyword} onChange={e=>setKeyword(e.target.value)} 
        placeholder="Search a Course..." type={"text"}
        focusBorderColor="yellow.500"
         />
         <HStack overflowX={"auto"} paddingY="8">
        {categories.map((item,index)=>(
        <Button key={index} onClick={()=>setCategory(item)} minW={"60"}>
        <Text children={item} />
        </Button>
        ))}
         </HStack>
         <Stack direction={["column","row"]}
         flexWrap="wrap"
         justifyContent={["flex-start","space-evenly"]}
         alignItems={["center","flex-start"]}
         >
          <Course
          views={23}
          title={"title"}
          description={"description"}
           id={"id"}
           imageSrc={"https://www.shutterstock.com/image-vector/cute-blue-bird-cartoon-260nw-475041199.jpg"}
           creator={"Sample Boy"}
           lectureCount={2}
           addToPlaylistHandler={addToPlaylistHandler}
           />
         </Stack>
    </Container>
  )
}

export default Courses