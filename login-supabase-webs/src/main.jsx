import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from "react-router-dom";
import { router } from './router.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { Flex, Heading, VStack } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider>
                <AuthContextProvider>
                    <RouterProvider router={router} />
                </AuthContextProvider>
        </Provider>
    </StrictMode>,
)

