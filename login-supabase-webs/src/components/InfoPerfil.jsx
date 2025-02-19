import React from 'react';
import { Box, Button, Heading, Input, Text, defineStyle, FieldErrorText, Field, VStack, Center } from "@chakra-ui/react";
import { For, Stack, createListCollection } from "@chakra-ui/react"
import {
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select"
import { UserCircle } from "lucide-react";
import { Flex } from '@chakra-ui/layout';
import { useForm } from "react-hook-form"
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SimpleGrid } from "@chakra-ui/react"
import { base } from 'framer-motion/client';

const formSchema = z.object({
    nombre: z.string()
        .nonempty("El nombre es requerido")
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(30, "El nombre debe tener menos de 30 caracteres")
        .regex(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, "Solo se permiten letras y espacios"),
    apellidos: z.string()
        .nonempty("El Apellido es requerido")
        .min(3, "El apellido debe tener al menos 3 caracteres")
        .max(30, "El apellido debe tener menos de 30 caracteres")
        .regex(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, "Solo se permiten letras y espacios"),
    contacto: z.string()
        .nonempty("El número de contacto es requerido")
        .min(10, "El número de contacto debe tener al menos 10 caracteres")
        .max(10, "El número de contacto debe tener menos de 10 caracteres")
        .regex(/^[0-9]+$/, "Solo se permiten números"),
    pais: z.string()
        .nonempty("El pais es requerido")
        .min(3, "El pais debe tener al menos 3 caracteres")
        .max(30, "El pais debe tener menos de 30 caracteres")
        .regex(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, "Solo se permiten letras y espacios"),
    genero: z.string()
        .nonempty("El genero es requerido")
});



const InfoPerfil = () => {
    const [loading, setLoading] = React.useState("");
    const [error, setError] = React.useState("");

    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(formSchema)
    });



    const onSubmit = async (data) => {
        setLoading(true);
        try {
            console.log(data);
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
            bgGradient={[
                "none",
                "linear-gradient(135deg, #001D4F 0%, #27AE60 50%, #001D4F 100%)",
            ]}
        >
            <Flex align="center" justify="center" minH="100vh">
                <Box
                    width="100%"
                    maxWidth="600px"
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
                            <UserCircle size={55} color="#2ECC71" />
                        </Box>
                        <Heading
                            as="h2"
                            fontSize="2xl"
                            fontWeight="semibold"
                            color="white"
                            mb={2}
                            textAlign="center"
                        >¡Bienvenido!
                        </Heading>
                        <Text color="whiteAlpha.700" fontSize="sm" textAlign="center">
                            Empecemos por crear tu perfil  </Text>
                    </Flex>
                    <VStack as="form" onSubmit={handleSubmit(onSubmit)} p={2}>
                        <SimpleGrid columns={["1", "2", "2"]} gap={4} mt={10} w="full">
                            {/* Nombre */}
                            <Field.Root
                                mb={3}
                                invalid={!!formState.errors.nombre}
                            >
                                <Box pos="relative" w="full">
                                    <Input
                                        type="text"
                                        {...register("nombre")}
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
                                    />
                                    <Field.Label css={floatingStyles}>Nombre </Field.Label>
                                </Box>
                                <FieldErrorText color="#FF6B6B">{formState.errors.nombre?.message}</FieldErrorText>

                            </Field.Root>
                            {/* Apellido */}
                            <Field.Root
                                mb={3}
                                invalid={!!formState.errors.apellidos} >
                                <Box pos="relative" w="full">
                                    <Input
                                        type="text"
                                        {...register("apellidos")}
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
                                    />
                                    <Field.Label css={floatingStyles}>Apellidos</Field.Label>
                                </Box>
                                <FieldErrorText color="#FF6B6B">{formState.errors.apellidos?.message}</FieldErrorText>
                            </Field.Root>
                            {/* Numero de contacto */}
                            <Field.Root
                                mb={3}
                                invalid={!!formState.errors.contacto} >
                                <Box pos="relative" w="full">
                                    <Input
                                        type="text"
                                        {...register("contacto")}
                                        className="peer"
                                        placeholder=""
                                        size="lg"
                                        {...stylecompar}

                                    />
                                    <Field.Label css={floatingStyles}>Número de contacto</Field.Label>
                                </Box>
                                <FieldErrorText color="#FF6B6B">{formState.errors.contacto?.message}</FieldErrorText>
                            </Field.Root>
                            {/* Campo País */}
                            <Field.Root mb={3} invalid={!!formState.errors.pais}>
                                <Box pos="relative" w="full">
                                    <Input
                                        type="text"
                                        {...register("pais")}
                                        className="peer"
                                        placeholder=""
                                        size="lg"
                                        _placeholder={{ color: "whiteAlpha.700" }}
                                        {...stylecompar}
                                    />
                                    <Field.Label css={floatingStyles}>País</Field.Label>
                                </Box>
                                <FieldErrorText color="#FF6B6B">
                                    {formState.errors.pais?.message}
                                </FieldErrorText>
                            </Field.Root>

                            {/* Campo Género */}

                            <Field.Root mb={3} invalid={!!formState.errors.genero} >
                                <Box  w="full">
                                    <SelectRoot
                                        collection={frameworks}
                                        variant="plain"
                                        size="md"
                                        {...register("genero")}
                                    >
                                        <SelectContent
                                            bg= {["rgba(0, 29, 79, 1)","rgba(255, 255, 255, 0.08)"]}
                                        border= "1px solid rgba(39, 174, 96, 0.3)"
                                        borderRadius= "sm"
                                        color= "white"
                                        _hover= {{
                                            bg: ["rgba(0, 29, 79, 1)","rgba(255, 255, 255, 0.12)"],
                                        borderColor: "rgba(39, 174, 96, 0.4)"}}
                                      _focus= {{
                                        bg: ["#003a9f", "rgba(255, 255, 255, 0.15)"],
                                        borderColor: "#2ECC71",
                                        boxShadow: "0 0 0 1px #2ECC71"}}                                        >
                                        {frameworks.items.map((movie) => (
                                            <SelectItem
                                                item={movie}
                                                key={movie.value}
                                                _hover={{ bg: "rgba(255, 255, 255, 0.12)" }}
                                            >
                                                {movie.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                    <SelectTrigger
                                        {...stylecompar}
                                        color="white"
                                        h="44px"
                                    >
                                        <SelectValueText
                                            placeholder="Selecciona tu género"
                                            color="whiteAlpha.700"
                                        />
                                    </SelectTrigger>
                                </SelectRoot>
                            </Box>
                            <FieldErrorText color="#FF6B6B">
                                {formState.errors.genero?.message}
                            </FieldErrorText>
                        </Field.Root>
                    </SimpleGrid>
                    <Button
                        type="submit"
                        mt={6}
                        w={['full', 'auto']}
                        size="md"
                        rounded="xl"
                        bg="#27AE60"
                        isLoading={loading}
                        _hover={{ bg: "#2ECC71" }}
                        _active={{ bg: "#25A65B" }}
                        color="white"
                        fontSize={["auto", "sm"]}
                        alignSelf={["center", "end"]}
                        boxShadow="0 4px 12px rgba(39, 174, 96, 0.3)"
                    >
                        Guardar y Continuar
                    </Button>
                </VStack>
        </Box>
            </Flex >
        </Box >

    );
};

const frameworks = createListCollection({
    items: [
        { label: "Masculino", value: "masculino" },
        { label: "Femenino", value: "femenino" },
        { label: "Otro", value: "otro" },
        { label: "Prefiero no decir", value: "no_especificado" }
    ],
})

const stylecompar = {
    bg: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(39, 174, 96, 0.3)",
    borderRadius: "sm",

    color: "white",
    _hover: {
        bg: "rgba(255, 255, 255, 0.12)",
        borderColor: "rgba(39, 174, 96, 0.4)"
    },
    _focus: {
        bg: "rgba(255, 255, 255, 0.15)",
        borderColor: "#2ECC71",
        boxShadow: "0 0 0 1px #2ECC71"
    }
};

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

export default InfoPerfil;