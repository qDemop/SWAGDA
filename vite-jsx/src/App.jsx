import reactLogo from "@/assets/react.svg"
import { Button, Center, HStack } from "@chakra-ui/react"
import viteLogo from "/vite.svg"

function App() {
  return (
    <Center flexDir="column" gap="8" minH="dvh">
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </Center>
  )
}

export default App
