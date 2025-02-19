import React from "react";
import {Box, Heading, VStack, Text, Button} from "@chakra-ui/react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const {session, signOut} = UserAuth();
    const navigate = useNavigate();

    console.log(session);

    const handleSignOut = async (e) => {
        e.preventDefault();
        try {
            await signOut();
            navigate("/signin");
        } catch (err) {
            console.error("Error al cerrar sesion: ", err);
        }
    }
        return (
            <Box
                maxW="400px"
                mx="auto"
                p={6}
                mt={10}
                borderWidth={1}
                borderRadius="lg"
                boxShadow="md">
                <VStack spacing={4} align="center">
                    <Heading size="lg">Dashboard</Heading>
                    <Text fontSize="md" color="gray.600">
                        Bienvenido, {session?.user?.email}
                    </Text>
                    <Button onClick={handleSignOut}>
                        Cerrar Sesion
                    </Button>
                </VStack>

            </Box>
        )

}
 export default Dashboard;


