"use client";

import { Navbar } from "@/components/common";
import { Button } from "@chakra-ui/react";
import { VStack, Box, Text, Container } from "@chakra-ui/react";
import React from "react";
import { HeroSection } from "./HeroSection";
import { ServiceSection } from "./ServiceSection";
import Footer from "@/components/common/Footer";

export const HomePage = () => {
  return (
    <Box>
      <Navbar />

      <Box bg="#F7F5F1">
        <Container maxW={"8xl"}>
          <HeroSection />
        </Container>
      </Box>
      <Container maxW={"8xl"} py={20}>
        <ServiceSection />
      </Container>
      <Box pt={40}>
        <Footer />
      </Box>
    </Box>
  );
};
