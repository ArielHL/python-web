import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, set_val, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Input, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import { ArrowForwardIcon, LinkIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents.map((e) => ({...e})))
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {`http://localhost:8000`}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Box>
  <HStack alignItems={`center`} sx={{"position": "sticky", "bg": "lightgray", "width": "100%", "paddingX": "0.8em", "paddingY": "0.5em", "zIndex": "100", "top": "0px", "display": "flex"}}>
  <Text sx={{"fontSize": "1em", "fontWeight": "bold"}}>
  {`mouredev`}
</Text>
  <Spacer/>
  <Input placeholder={`Search...`} sx={{"width": "300px", "padding": "0.5em", "borderRadius": "1em", "backgroundColor": "white", "border": "1px solid ligtblue"}} type={`text`}/>
  <Spacer/>
  <Menu>
  <MenuButton>
  {`Menu`}
</MenuButton>
  <MenuList>
  <MenuItem>
  {`User Settings`}
</MenuItem>
  <MenuDivider/>
  <MenuItem>
  {`Explore`}
</MenuItem>
  <MenuItem>
  {`Log Out`}
</MenuItem>
</MenuList>
</Menu>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`1em`}>
  <Avatar name={`Jon la Toca`} size={`xl`}/>
  <VStack sx={{"alingItems": "start"}}>
  <Heading size={`lg`}>
  {`Ariel Limes`}
</Heading>
  <Text sx={{"marginTop": "0px !important"}}>
  {`@jonlatoca`}
</Text>
  <HStack>
  <Link as={NextLink} href={`https://x.com/mouredev`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https://x.com/mouredev`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https://x.com/mouredev`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontSize": "1em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "lightblue", "marginRight": "0.5em"}}>
  {`+14`}
</Text>
  {`Años de experiencia!`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "1em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "lightblue", "marginRight": "0.5em"}}>
  {`+14`}
</Text>
  {`Años de experiencia!`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "1em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "lightblue", "marginRight": "0.5em"}}>
  {`+14`}
</Text>
  {`Años de experiencia!`}
</Box>
</Flex>
  <Text>
  {`
                Soy ingeniero de software desde hace más de 12 años. 
                Actualmente trabajo como freelance full-stack developer iOS y Android. 
                Además creo contenido formativo sobre programación y tecnología en redes. 
                Aquí podrás encontrar todos mis enlaces de interés. ¡Bienvenid@!
                `}
</Text>
</VStack>
  <VStack spacing={`0.8em`} sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "0.5em"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://www.twitch.tv/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "flex", "align-items": "center", "justify-content": "start", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "1em", "height": "1em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Twitch`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Live Streaming`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/@mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "flex", "align-items": "center", "justify-content": "start", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "1em", "height": "1em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Youtube`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Live Streaming`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/@mouredevtv`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "flex", "align-items": "center", "justify-content": "start", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "1em", "height": "1em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Youtube (canal secundario)`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Deferred Streaming`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://discord.gg/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "flex", "align-items": "center", "justify-content": "start", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "1em", "height": "1em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Discord`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`the communication`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "0.5em"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://www.twitch.tv/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "flex", "align-items": "center", "justify-content": "start", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "1em", "height": "1em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Twitch`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Live Streaming`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/@mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "flex", "align-items": "center", "justify-content": "start", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "1em", "height": "1em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Youtube`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Live Streaming`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/@mouredevtv`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "flex", "align-items": "center", "justify-content": "start", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "1em", "height": "1em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Youtube (canal secundario)`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Deferred Streaming`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://discord.gg/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "flex", "align-items": "center", "justify-content": "start", "padding": "0.5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "1em", "height": "1em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Discord`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`the communication`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <Box>
  <HStack alignItems={`center`} justifyContent={`center`} sx={{"display": "flex", "marginY": "2em", "backgroundColor": "lightblue", "width": "100%"}}>
  <Image src={`favicon.ico`} sx={{"width": 50, "height": 50}}/>
  <VStack>
  <Link as={NextLink} href={`https://www.mouredev.com`} isExternal={true} sx={{"fontSize": "0.8em", "textDecoration": "none", "_hover": {}}}>
  {`© 2014-2023 MOUREDEV BY BRAIS MOURE V3.`}
</Link>
  <Text sx={{"fontSize": "0.8em", "marginTop": "0px !important"}}>
  {`BUILDING SOFTWARE WITH ♥ FROM GALICIA TO THE WORLD.`}
</Text>
</VStack>
</HStack>
</Box>
</Box>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
