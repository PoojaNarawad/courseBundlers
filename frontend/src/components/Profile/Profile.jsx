import { Avatar, Button, Container, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Profile = () => {
    const user = {
        name:"Pooja",
        email:"pooja@gmail.com",
        createdAt:String( new Date().toISOString()),
        role:"user",
        subscription:{
            status:"active",
        },
        playlist:[
            {
                course:"jsxhh",
                poster:"https://www.bocasay.com/wp-content/uploads/2020/03/MERN-stack-1.png",
            },
        ],
    }; 

    const removeFromPlaylistHandler = id => {
        console.log(id);
    }
  return (
   <Container minH={"95vh"} maxW="container.lg" py="8">
    <Heading children="Profile" m="8" textTransform={"uppercase"} />
    <Stack
    justifyContent={"flex-start"}
    direction={["column","row"]}
    alignItems={"center"}
    spacing={["8","16"]}
    padding="8"
    >
    <VStack>
        <Avatar boxSize={"48"} />
        <Button colorScheme={"yellow"} variant="ghost">
            Change Photo
        </Button>
    </VStack>

    <VStack spacing={"4"} alignItems={["center","flex-start"]} >
    <HStack>
        <Text children="Name" fontWeight={"bold"} />
        <Text children={user.name} />
    </HStack>
    <HStack>
        <Text children="Email" fontWeight={"bold"} />
        <Text children={user.email} />
    </HStack>
    <HStack>
        <Text children="CreatedAt" fontWeight={"bold"} />
        <Text children={user.createdAt.split("T")[0]} />
    </HStack>
    {
        user.role !== "admin" && (<HStack>
            <Text children="Subscription" fontWeight={"bold"} />
            {user.subscription.status === "active" ? (
                <Button color={"yellow.500"}
                variant="unstyled"
                >Cancel Subscription </Button>
            ):(
              <Link to="/subscribe">
                <Button colorScheme={"yellow"}>Subscribe</Button>
              </Link>  
              
            )}
        </HStack>
    )}

    <Stack
    direction={["column","row"]}
    alignItems={"center"}
    >

    <Link to="/updateprofile">
        <Button>Update Profile</Button>
    </Link>  
    <Link to="/changepassword">
        <Button>Change Password</Button>
    </Link>  
    </Stack>
    </VStack>
    </Stack>
    <Heading children="Playlist" size={"md"} my="8" />
    {
        user.playlist.length > 0 && (
            <Stack direction={["column","row"]} 
            alignItems={"center"}
            flexWrap="wrap"
            p="4"
            >
            {
                user.playlist.map((item,index)=>(
                    <VStack w="48" m="2" key={item.course}>
                        <Image
                        boxSize={"full"}
                        objectFit="contain"
                        src={item.poster}
                        />
                        <HStack>
                            <Link to={`/coure/${item.course}`}>
                                <Button variant="ghost" colorScheme={"yellow"}>Watch Now</Button>
                            </Link>
                            <Button onClick={()=>removeFromPlaylistHandler(item.course)}><RiDeleteBin7Fill/></Button>
                        </HStack>
                    </VStack>
                ))
            }
            </Stack>
        )
    }
    </Container>
  )
}

export default Profile