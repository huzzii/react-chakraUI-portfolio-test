import { Flex, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Social from './components/Social';

function App() {
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Hujjiibaba</Heading>
      </Flex>
    </VStack>
  );
}

export default App;
