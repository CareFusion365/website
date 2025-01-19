import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BiSolidBadgeCheck, BiSupport } from "react-icons/bi";
import { FaDatabase, FaUserMd } from "react-icons/fa";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
const items = [
  {
    title: "Doctor's Office",
    description:
      "Same/next-day appointments, in person or over video, that start on time",
    image: "/services/1.png",
  },
  {
    title: "Doctor's Office",
    description:
      "Compassionate providers who are experts at medicine and caring",
    image: "/services/2.png",
  },
  {
    title: "Doctor's Office",
    description:
      "Prioritize your health with convenient inperson care and hassle-free prescription delivery",
    image: "/services/3.png",
  },
];
const lists = [
  "Data-powered healthcare suggestions",
  "Patient-first",
  "Analytics and AI-powered suggestions",
  "Truly-useful Hospital Management System",
];
const lists2 = [
  {
    label: "Experienced",
    description: "Medical Practitioners",
    icon: FaUserMd,
  },
  {
    label: "Summarised Data",
    description: "Patient-first",
    icon: FaDatabase,
  },
  {
    label: "Quality",
    description: "Service",
    icon: IoCheckmarkDoneOutline,
  },
  {
    label: "24Hrs",
    description: "Support",
    icon: BiSupport,
  },
];

const Section1 = () => {
  return (
    <Box>
      <Stack direction={{ base: "column", lg: "row" }} gap={10} align="center">
        <Flex flex={1} data-aos="fade-right" data-aos-duration="1000">
          <Image src="/services/4.png" alt="blob" maxW="100%" h="auto" />
        </Flex>
        <Flex flex={1} data-aos="fade-left" data-aos-duration="1000">
          <Box>
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              color="teal.800"
              textAlign={{ base: "center", lg: "left" }}
            >
              Why You Should Try Us? <br /> Get Know About Us
            </Heading>
            <Text
              pt={10}
              lineHeight={7}
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight={500}
              textAlign={{ base: "center", lg: "left" }}
            >
              Carefusion365 is a next-gen, AI-powered healthcare service
              assistant that links patient EMR to healthcare practitioners with
              ease. We provide analytics and AIpowered suggestions to help
              doctors make well-informed decisions. We also provide summarised
              data to patients, helping them understand their health better.
            </Text>
            <Flex flexDir={"column"} gap={5} pt={10}>
              {lists.map((list, index) => (
                <Flex
                  key={list}
                  fontSize={"lg"}
                  gap={5}
                  alignItems={"center"}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Icon as={BiSolidBadgeCheck} fontWeight={700} />
                  <Text>{list}</Text>
                </Flex>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};

const Section2 = () => {
  return (
    <Box>
      <Stack direction={{ base: "column", lg: "row" }} gap={10} align="center">
        <Flex flex={1} data-aos="fade-right" data-aos-duration="1000">
          <Box>
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              color="teal.800"
              textAlign={{ base: "center", lg: "left" }}
            >
              Why Choose Us
            </Heading>
            <Text
              pt={10}
              lineHeight={7}
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight={500}
              textAlign={{ base: "center", lg: "left" }}
            >
              Carefusion365 is a next-gen, AI-powered healthcare service
              assistant that links patient EMR to healthcare practitioners with
              ease. We provide analytics and AIpowered suggestions to help
              doctors make well-informed decisions. We also provide summarised
              data to patients, helping them understand their health better.
            </Text>
            <Grid
              gridTemplateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
              }}
              gap={5}
              pt={10}
            >
              {lists2.map((list, index) => (
                <Flex
                  key={list.label}
                  fontSize={"lg"}
                  gap={5}
                  alignItems={"center"}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <Flex
                    border={"1px solid"}
                    borderRadius={"2xl"}
                    p={5}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Icon as={list.icon} fontSize={"4xl"} fontWeight={700} />
                  </Flex>
                  <Box>
                    <Text fontWeight={700}>{list.label}</Text>
                    <Text>{list.description}</Text>
                  </Box>
                </Flex>
              ))}
            </Grid>
          </Box>
        </Flex>
        <Flex flex={1} data-aos="fade-left" data-aos-duration="1000">
          <Image
            borderRadius={"2xl"}
            src="/services/5.png"
            alt="blob"
            maxW="100%"
            h="auto"
          />
        </Flex>
      </Stack>
    </Box>
  );
};
export function ServiceSection() {
  return (
    <Flex
      flexDir={"column"}
      gap={{ base: 10, md: 20 }}
      px={{ base: 4, md: 6, lg: 8 }}
    >
      <Box>
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          data-aos="fade-up"
        >
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            color="teal.800"
            textAlign={"center"}
          >
            Experience a new kind <br /> of doctor's office
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          pt={10}
          spacing={{ base: 8, md: 4 }}
          justifyContent={"space-between"}
          align="center"
        >
          {items.map((item, index) => (
            <VStack
              key={item.title}
              w={{ base: "100%", md: "300px" }}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <Box h={{ base: "120px", md: "150px" }}>
                <Image src={item.image} alt="blob" maxH="100%" />
              </Box>
              <Text
                fontWeight={700}
                textAlign={"center"}
                fontSize={{ base: "md", md: "lg" }}
              >
                {item.description}
              </Text>
            </VStack>
          ))}
        </Stack>
      </Box>
      <Box pt={{ base: 10, md: 20 }}>
        <Section1 />
      </Box>
      <Box pt={{ base: 10, md: 20 }}>
        <Section2 />
      </Box>
    </Flex>
  );
}
