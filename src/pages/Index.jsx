import { Box, Flex, VStack, HStack, Text, Image, Input, IconButton, Container } from "@chakra-ui/react";
import { FaSearch, FaVideo, FaTh, FaBell, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      {/* Header */}
      <Flex bg="white" p={4} boxShadow="md" justifyContent="space-between" alignItems="center">
        <HStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">YouTube</Text>
        </HStack>
        <HStack spacing={4} flex="1" justifyContent="center">
          <Input placeholder="Search" maxW="600px" />
          <IconButton aria-label="Search" icon={<FaSearch />} />
        </HStack>
        <HStack spacing={4}>
          <IconButton aria-label="Create" icon={<FaVideo />} />
          <IconButton aria-label="Apps" icon={<FaTh />} />
          <IconButton aria-label="Notifications" icon={<FaBell />} />
          <IconButton aria-label="User" icon={<FaUserCircle />} />
        </HStack>
      </Flex>

      {/* Main Content */}
      <Container maxW="container.xl" mt={4}>
        <VStack spacing={4}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Box key={index} bg="white" p={4} boxShadow="md" w="100%">
              <HStack spacing={4}>
                <Image
                  boxSize="120px"
                  objectFit="cover"
                  src={`https://via.placeholder.com/120?text=Video+${index + 1}`}
                  alt={`Video ${index + 1}`}
                />
                <VStack align="start" spacing={1}>
                  <Text fontSize="lg" fontWeight="bold">Video Title {index + 1}</Text>
                  <Text fontSize="sm" color="gray.600">Channel Name</Text>
                  <Text fontSize="sm" color="gray.600">1M views • 1 day ago</Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;