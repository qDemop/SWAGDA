import { Button, Flex, Stack, Box, Heading, Text, Center, VStack } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "@/components/ui/field";
import { PinInput } from "@/components/ui/pin-input";
import { Controller, useForm } from "react-hook-form";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { z } from "zod";

const OtpEmail = () => {
    const formSchema = z.object({
        pin: z
            .array(z.string().min(1), { required_error: "Pin is required" })
            .length(6, { message: "Pin must be 6 digits long" }),
    });

    const { handleSubmit, control, formState } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <Box
            minW="100vw"
            minH="100vh"
            overflow="hidden"
            position="relative"
            bgGradient={[
                "none",
                "linear-gradient(135deg, #001D4F 0%, #27AE60 50%, #001D4F 100%)",
            ]}
        >
            <Flex align="center" justify="center" minH="100vh">
                <Box
                    width="100%"
                    maxWidth="400px"
                    p={8}
                    borderRadius="xl"
                    bg="rgba(0, 51, 140, 0.25)"
                    backdropFilter={{ base: "none", md: "none", lg: "blur(20px)" }}
                    boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.37)"
                    border="1px solid rgba(39, 174, 96, 0.2)"
                >
                    <Flex direction="column" align="center">
                        <Box
                            p={3}
                            borderRadius="full"
                            mb={1.5}
                        >
                            <ShieldCheck size={55} color="#2ECC71" />
                        </Box>
                        <Heading
                            as="h2"
                            fontSize="2xl"
                            fontWeight="semibold"
                            color="white"
                            mb={2}
                        >¡Revisa tu bandeja de entrada!
                        </Heading>
                        <Text color="whiteAlpha.700" fontSize="sm" textAlign="center">
                            Te hemos enviado un código de autenticación temporal de 6 dígitos a {"el correo"} para mayor seguridad. Ingresa este código para verificar tu cuenta </Text>
                    </Flex>
                    <Box w='full'>
                        <form onSubmit={onSubmit}>
                            <Stack gap="4" align="center" maxW="sm" mt={10}>
                                <Field
                                    invalid={!!formState.errors.pin}
                                    errorText={formState.errors.pin?.message}
                                    w="full"
                                >
                                    <Flex
                                        w='full'
                                        gap={3}
                                        justifyContent="center"
                                        p={3}
                                        bg="rgba(255, 255, 255, 0.1)"
                                        borderRadius="lg"
                                        border="1px solid rgba(39, 174, 96, 0.5)"
                                    >
                                        <Controller
                                            control={control}
                                            name="pin"
                                            render={({ field }) => (
                                                <PinInput
                                                    count={6}
                                                    value={field.value}
                                                    onValueChange={(e) => field.onChange(e.value)}
                                                    sx={{
                                                        input: {
                                                            bg: "whiteAlpha.200",
                                                            borderRadius: "md",
                                                            fontSize: "lg",
                                                            fontWeight: "bold",
                                                            textAlign: "center",
                                                            w: "40px",
                                                            h: "50px",
                                                            _focus: {
                                                                borderColor: "#2ECC71",
                                                                boxShadow: "0 0 0 2px rgba(39, 174, 96, 0.5)",
                                                            },
                                                        },
                                                    }}
                                                />
                                            )}
                                        />
                                    </Flex>
                                </Field>
                                <Button
                                    type="submit"
                                    w="full"
                                    size="lg"
                                    bg="#27AE60"
                                    _hover={{ bg: "#2ECC71" }}
                                    _active={{ bg: "#25A65B" }}
                                    color="white"
                                    fontSize="md"
                                    boxShadow="0 4px 12px rgba(39, 174, 96, 0.3)"
                                >
                                    Verificar PIN
                                </Button>
                                <Center mt={6} >
                                    <VStack>
                                        <Text color="whiteAlpha.900" fontSize="md" >
                                            {" "}
                                            <ChakraLink
                                                as={RouterLink}
                                                to="/signup"
                                                color="#2ECC71"
                                                _hover={{ color: "#27AE60" }}
                                                transition="color 0.2s"
                                                fontWeight="medium"
                                            > <ArrowLeft size={20} />
                                                Volver
                                            </ChakraLink>
                                        </Text>

                                        <Text color="whiteAlpha.900" fontSize="sm">
                                            ¿No haz recibido el código?{" "}
                                            <ChakraLink
                                                as={RouterLink}
                                                to="/signup"
                                                color="#2ECC71"
                                                _hover={{ color: "#27AE60" }}
                                                transition="color 0.2s"
                                                fontWeight="medium"
                                            >
                                                Reenviar código
                                            </ChakraLink>
                                        </Text>
                                    </VStack>
                                </Center>
                            </Stack>
                        </form>
                    </Box>

                </Box>
            </Flex>
        </Box>
    );
};

export default OtpEmail;
