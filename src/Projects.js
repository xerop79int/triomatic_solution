import React, { useEffect } from "react";
import { Box, chakra, Container, Stack } from "@chakra-ui/react";
import CTF from "./assets/mockup/images/CTF.png";
import project1 from "./assets/mockup/images/project1.png";
import project3 from "./assets/mockup/images/project3.png";
import project4 from "./assets/mockup/images/project4.png";
import "./Projects.css";

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElement1 = document.querySelectorAll(".hidden1");
    const hiddenElement2 = document.querySelectorAll(".hidden2");
    const hiddenElement5 = document.querySelectorAll(".hidden5");

    hiddenElement1.forEach((el) => observer.observe(el));
    hiddenElement2.forEach((el) => observer.observe(el));
    hiddenElement5.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Container className="project__container" maxW={"6xl"}>
      <Stack
        className="project__stack"
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 20 }}
      >
        <Box
          mb={20}
          alignItems="center"
          display={"flex"}
          bg="white"
          p={[20]}
          className="project__RightBox  hidden5"
          justifyContent="space-between"
          borderRadius="20"
        >
          <Box ml={{ base: 0, md: 20 }}>
          <chakra.h2
              mb={4}
              fontSize={{
                base: "2xl",
                md: "7xl",
              }}
              fontWeight="bold"
              letterSpacing="tight"
              textAlign={{
                base: "center",
                md: "left",
              }}
              color="gray.900"
              _dark={{
                color: "gray.400",
              }}
              lineHeight={{
                md: "shorter",
              }}
            >
              Projects
            </chakra.h2>
          </Box>
        </Box>

        <Box
          shadow="xl"
          alignItems="center"
          display={"flex"}
          bg="#F0F0F0"
          p={[20]}
          className="project__leftBox hidden1"
          justifyContent="space-between"
          borderRadius="20"
        >
          <Box mr={{ base: 0, md: 20 }}>
          <chakra.h2
              mb={4}
              fontSize={{
                base: "2xl",
                md: "4xl",
              }}
              fontWeight="bold"
              letterSpacing="tight"
              textAlign={{
                base: "center",
                md: "left",
              }}
              color="gray.900"
              _dark={{
                color: "gray.400",
              }}
              lineHeight={{
                md: "shorter",
              }}
            >
              Air CTF 2022
            </chakra.h2>

            <chakra.p
              mb={4}
              color={"black"}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "lg",
              }}
            >
              A Capture the flag event organized by Air University. As a
              Technical Sponsor of the event, we made the platform where all the
              challenges were hosted and people participating could access them.
              The Technologies used in the project are Django, Python,
              React, C++, etc.
            </chakra.p>
          </Box>

          <div className="project__leftbox__image">
            <img src={project1} alt="" />
          </div>
        </Box>

        <Box
          mb={20}
          alignItems="center"
          display={"flex"}
          bg="white"
          p={[20]}
          className="project__RightBox  hidden2"
          justifyContent="space-between"
          borderRadius="20"
        >
          <div className="project__rightbox__image">
            <img src={CTF} alt="" />
          </div>

          <Box ml={{ base: 0, md: 20 }}>
          <chakra.h2
              mb={4}
              fontSize={{
                base: "2xl",
                md: "4xl",
              }}
              fontWeight="bold"
              letterSpacing="tight"
              textAlign={{
                base: "center",
                md: "left",
              }}
              color="gray.900"
              _dark={{
                color: "gray.400",
              }}
              lineHeight={{
                md: "shorter",
              }}
            >
              Web Hosting Website
            </chakra.h2>

            <chakra.p
              mb={4}
              color={"gray.900"}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "lg",
              }}
            >
              A web hosting created by us on order from a customer. A fully
              functional website with React used on the front end and Nodejs
              used on the back end. The Website also had a payment module for
              customers to purchase web hosting using their credit cards.
            </chakra.p>
          </Box>
        </Box>

        <Box
          shadow="xl"
          alignItems="center"
          display={"flex"}
          bg="#F0F0F0"
          p={[20]}
          className="project__leftBox hidden1"
          justifyContent="space-between"
          borderRadius="20"
        >
          <Box mr={{ base: 0, md: 20 }}>
          <chakra.h2
              mb={4}
              fontSize={{
                base: "2xl",
                md: "4xl",
              }}
              fontWeight="bold"
              letterSpacing="tight"
              textAlign={{
                base: "center",
                md: "left",
              }}
              color="gray.900"
              _dark={{
                color: "gray.400",
              }}
              lineHeight={{
                md: "shorter",
              }}
            >
              Restaurant website
            </chakra.h2>

            <chakra.p
              mb={4}
              color={"black"}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "lg",
              }}
            >
              A local Restaurant website with user login, cart functionality,
              list of all the menu items sorted by category. The online
              reservation system has also been implemented. The Technologies
              used in the website are Django for the backend, React for the
              frontend, and third-party service for online ordering of Food.
            </chakra.p>
          </Box>

          <div className="project__leftbox__image">
            <img src={project3} alt="" />
          </div>
        </Box>

        <Box
          mb={20}
          alignItems="center"
          display={"flex"}
          bg="white"
          p={[20]}
          className="project__RightBox  hidden2"
          justifyContent="space-between"
          borderRadius="20"
        >
          <div className="project__rightbox__image">
            <img src={project4} alt="" />
          </div>

          <Box ml={{ base: 0, md: 20 }}>
          <chakra.h2
              mb={4}
              fontSize={{
                base: "2xl",
                md: "4xl",
              }}
              fontWeight="bold"
              letterSpacing="tight"
              textAlign={{
                base: "center",
                md: "left",
              }}
              color="gray.900"
              _dark={{
                color: "gray.400",
              }}
              lineHeight={{
                md: "shorter",
              }}
            >
              Survey website
            </chakra.h2>

            <chakra.p
              mb={4}
              color={"gray.900"}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "lg",
              }}
            >
              A survey website to collect data on different topics which are
              saved in a django database. The frontend was made using Reactjs.
              The data was then used by a deep learning software using the API
              we made.
            </chakra.p>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Projects;
