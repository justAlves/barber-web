import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Flex background="barber.900" height="100vh" alignItems="center" justifyContent="center">
        <Text>Barberfy</Text>
      </Flex>
    </main>
  );
}
