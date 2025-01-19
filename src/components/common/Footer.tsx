"use client";

import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  color,
  transition,
  Flex,
  Button,
  Input,
  Heading,
  CardBody,
  Image,
  Card,
  Icon,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram, FaEnvelope } from "react-icons/fa";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box position={"relative"}>
      <Box
        w={{ base: "90%", md: "80%", lg: "60%" }}
        bg="#015450"
        color="white"
        p={{ base: 5, md: 8, lg: 10 }}
        borderRadius={"2xl"}
        boxShadow={"lg"}
        position={"absolute"}
        left="50%"
        top="-5%"
        transform="translate(-50%, -50%)"
        border={"1px solid white"}
      >
        <Flex
          gap={{ base: 5, md: 8, lg: 10 }}
          direction={{ base: "column", md: "row" }}
        >
          <Flex flex={1} direction={"column"} gap={5}>
            <Heading fontSize={{ base: "xl", md: "2xl" }} fontWeight={700}>
              Join our waitlist to receive notifications
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }} fontWeight={400}>
              Join the waitlist on Carefusion365. Be a part of the first to
              experience the next-gen healthcare service!
            </Text>
            <Card bg="teal.600" color="white" borderRadius={"2xl"}>
              <CardBody>
                <Flex
                  alignItems={"center"}
                  gap={2}
                  direction={{ base: "column", sm: "row" }}
                  textAlign={{ base: "center", sm: "left" }}
                >
                  <Box>
                    <Box
                      borderRadius="xl"
                      p={2}
                      w={10}
                      h={10}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      border={"1px solid white"}
                      mx={{ base: "auto", sm: "0" }}
                    >
                      <Icon as={FaEnvelope} />
                    </Box>
                  </Box>
                  <Box>
                    <Text>Mail Us For More Info</Text>
                    <Text>carefusion365@gmail.com</Text>
                  </Box>
                </Flex>
              </CardBody>
            </Card>
          </Flex>
          <Flex
            flexDirection={"column"}
            gap={5}
            flex={1}
            w={{ base: "100%", md: "auto" }}
          >
            <Input borderRadius={"md"} placeholder="Your name" />
            <Input borderRadius={"md"} placeholder="Your email" />
            <Button bg="white" w={{ base: "100%", md: "auto" }}>
              Join Waitlist
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Flex
        bg="#015450"
        minH={{ base: "40vh", md: "30vh" }}
        alignItems="flex-end"
      >
        <Box color="white" w="100%">
          <Container as={Stack} maxW={"6xl"} py={10}>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={700}>
              Carefusion365
            </Text>
          </Container>

          <Box
            borderTopWidth={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <Container
              as={Stack}
              maxW={"6xl"}
              py={4}
              px={{ base: 4, md: 6 }}
              direction={{ base: "column", md: "row" }}
              spacing={4}
              justify={{ md: "space-between" }}
              align={{ base: "center", md: "center" }}
            >
              <Text textAlign={{ base: "center", md: "left" }}>
                © 2025 Carefusion365. All rights reserved
              </Text>
              <Stack direction={"row"} spacing={{ base: 4, md: 6 }}>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Container>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
