import { Container, Text, VStack, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box position="absolute" top="10px" left="10px">
        <Image src="/youtube-logo.svg" alt="YouTube Logo" boxSize="48px" />
      </Box>
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
      </VStack>
    </Container>
  );
};

export default Index;