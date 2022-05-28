import { useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode } from "@chakra-ui/color-mode";
import React from "react";
import { Circle, Flex, Stack, Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [ isNotSmallerScreen ] = useMediaQuery("(min-width: 600px)");
  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        align-self="flex-start"
        justify="center"
        spacing="200px"
        p={isNotSmallerScreen ? "32" : 0}
      >
        <Box mt={isNotSmallerScreen ? "0" : "16"} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            HUZZII BABA
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            BABA - Full Stack Developer, Founder of hujjiibaba.dev, YouTuber & Entrepreneur 🗣
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() => window.open("https://google.")}
          >
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://t3.ftcdn.net/jpg/01/18/06/32/360_F_118063283_FD6CvzN1v1LFEMupsqEfuOkPbfjuO0CU.jpg"
        />
      </Flex>
    </Stack>
  );
};

export default Header;
