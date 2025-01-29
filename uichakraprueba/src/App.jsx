import {Badge, Box, Button, ButtonGroup, Center, Flex, Stack} from "@chakra-ui/react";
import {CloseButton} from "@/components/ui/close-button.jsx";
import {Avatar} from "@/components/ui/avatar.jsx";
import {CiLogin} from "react-icons/ci";
import {HiAtSymbol, HiStar} from "react-icons/hi";

function App() {
  return (
      //'bg.muted' ayuda en los ajustes semanticos ademas de ser mas utiles en el desarrollo para modo oscuro y claro (muted)

      <Flex minH="100dvh">
          <Box bg='bg.muted' w='260px' >Sidepanel</Box>
          <CiLogin></CiLogin>
          <Avatar></Avatar>
          <Box>
              <Stack h='full'>
                  <Box>Top</Box>
                  <Center flex='1'>Medio</Center>
                  <Box>Botones</Box>
              </Stack>
          </Box>
      </Flex>
  )
}

export default App



// <ButtonGroup>
//     <Button></Button>
//     <Button></Button>
//     <Button>Cerrar</Button>
//
// </ButtonGroup>
// <Box>
//     <Stack align="flex-start">
//         <Badge variant="solid" colorPalette="blue">
//             <HiStar />
//             New
//         </Badge>
//         <Badge variant="solid" colorPalette="green">
//             New
//             <HiAtSymbol />
//         </Badge>
//         <Stack direction='row'>
//             <Badge>Default</Badge>
//             <Badge colorPalette="green">Success</Badge>
//             <Badge colorPalette="red">Removed</Badge>
//             <Badge colorPalette="purple">New</Badge>
//         </Stack>
//     </Stack>
// </Box>
// <Box>
//     <Stack direction="column">
//         <Badge variant="outline">Activo</Badge>
//         <Badge variant="solid">Solid</Badge>
//         <Badge variant="subtle">Subtle</Badge>
//         <Badge variant="surface">Surface</Badge>
//     </Stack>
// </Box>
