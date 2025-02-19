import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link as RouterLink } from "react-router-dom";
import { UserAuth } from "../context/AuthContext"
import { Box, Button, Heading, Input, Text, defineStyle, FieldErrorText, Field, Stack, Center } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Flex } from '@chakra-ui/layout';
import { Mail, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form"

const Signin = () => {
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState("");
  const { session, signInUser } = UserAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  console.log(session);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await signInUser(data.email, data.password);
      if (result.success) {
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Ocurrió un error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      minW="100vw"
      minH="100vh"
      overflow="hidden"
      position="relative"
      bgGradient={["none", "linear-gradient(135deg, #001D4F 0%, #27AE60 50%, #001D4F 100%)"]}>
      <Flex
        align="center" justify="center" minH="100vh" p={4}>
        <Box
          width="100%"
          maxWidth="400px"
          p={8}
          borderRadius="xl"
          bg="rgba(0, 51, 140, 0.25)"
          backdropFilter={{ base: "none", md: "none", lg: "blur(20px)" }}
          boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.37)"
          border="1px solid rgba(39, 174, 96, 0.2)">
          <Flex
            direction="column"
            align="center">
            <Box
              p={3}
              borderRadius="full"
              mb={1.5}
            >
              <Mail size={55} color="#2ECC71" />
            </Box>
            <Heading
              as="h2"
              fontSize="2xl"
              fontWeight="semibold"
              color="white"
              mb={2}
            >
              ¡Bienvenido de nuevo!
            </Heading>
            <Text color="whiteAlpha.900" fontSize="sm" textAlign="center">
              Inicia sesión para acceder a tu cuenta
            </Text>
          </Flex>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack mt={10} >
              <Field.Root mb={3} invalid={!!errors.email}>
                <Box pos="relative" w="full">
                  <Input
                    type="email"
                    className="peer"
                    placeholder=""
                    size="lg"
                    bg="rgba(255, 255, 255, 0.08)"
                    border="1px solid rgba(39, 174, 96, 0.3)"
                    color="white"
                    _placeholder={{ color: "whiteAlpha.700" }}
                    _hover={{
                      bg: "rgba(255, 255, 255, 0.12)",
                      borderColor: "rgba(39, 174, 96, 0.4)"
                    }}
                    _focus={{
                      bg: "rgba(255, 255, 255, 0.15)",
                      borderColor: "#2ECC71",
                      boxShadow: "0 0 0 1px #2ECC71"
                    }}
                    {...register("email", {
                      required: "Ingrese su correo electronico",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Correo electrónico no válido",
                      },
                    })}
                  />
                  <Field.Label css={floatingStyles}>Correo</Field.Label>
                </Box>
                <FieldErrorText color="#FF6B6B">{errors.email?.message}</FieldErrorText>
              </Field.Root>

              <Field.Root mb={3} invalid={!!errors.password}>
                <Box pos="relative" w="full">
                  <Input
                    type={showPassword ? "text" : "password"}
                    className="peer"
                    placeholder=""
                    size="lg"
                    bg="rgba(255, 255, 255, 0.08)"
                    border="1px solid rgba(39, 174, 96, 0.3)"
                    color="white"
                    _placeholder={{ color: "whiteAlpha.700" }}
                    _hover={{
                      bg: "rgba(255, 255, 255, 0.12)",
                      borderColor: "rgba(39, 174, 96, 0.4)"
                    }}
                    _focus={{
                      bg: "rgba(255, 255, 255, 0.15)",
                      borderColor: "#2ECC71",
                      boxShadow: "0 0 0 1px #2ECC71"
                    }}
                    {...register("password", {
                      required: "Ingrese su contraseña",
                      minLength: { value: 6, message: "Mínimo 6 caracteres" }
                    })}
                  />
                  <Field.Label css={floatingStyles}>Contraseña</Field.Label>
                  <Box
                  as="button"
                  type="button"
                  position="absolute"
                  right="3"
                  top="50%"
                  transform="translateY(-50%)"
                  color="whiteAlpha.700"
                  _hover={{ color: "white" }}
                  transition="color 0.2s"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </Box>
                </Box>
                <FieldErrorText color="#FF6B6B">{errors.password?.message}</FieldErrorText>
                
              </Field.Root>
              <Button
                type="submit"
                w="full"
                size="lg"
                bg="#27AE60"
                isLoading={loading}
                _hover={{ bg: "#2ECC71" }}
                _active={{ bg: "#25A65B" }}
                color="white"
                fontSize="md"
                boxShadow="0 4px 12px rgba(39, 174, 96, 0.3)"
              >
                Ingresar
              </Button>
              <Center mt={6}>
                <Text color="whiteAlpha.900" fontSize="sm">
                  ¿No tienes una cuenta?{" "}
                  <ChakraLink
                    as={RouterLink}
                    to="/signup"
                    color="#2ECC71"
                    _hover={{ color: "#27AE60" }}
                    transition="color 0.2s"
                    fontWeight="medium"
                  >
                    Crear cuenta
                  </ChakraLink>
                </Text>
              </Center>

              {error && (
                <Text color="#FF6B6B" textAlign="center" pt={4} fontWeight="medium">
                  {error}
                </Text>
              )}
            </Stack>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "#001D4F",
  borderRadius: "md",
  px: "2",
  top: "-3",
  color: "white",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "all 0.2s",
  fontSize: "sm",
  _peerPlaceholderShown: {
    color: "whiteAlpha.700",
    top: "2.5",
    insetStart: "3",
    bg: "transparent"
  },
  _peerFocusVisible: {
    color: "#2ECC71",
    top: "-3",
    insetStart: "2",
    bg: "#001D4F",
    borderRadius: "md",
    px: "2",
    fontWeight: "normal"
  },
})

export default Signin