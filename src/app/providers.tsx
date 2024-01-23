"use client"

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  barber: {
    900: "#12131b",
    400: "#1b1c29",
    100: "#c6c6c6",
  },
  button: {
    cta: "#fba931",
    default: "#ffffff",
    gray: "#dfdfdf",
    danger: "#ff4040",
  },
  orange: {
    900: "#fba931",
  },  
}

const theme = extendTheme({ colors })

export default function Providers({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
