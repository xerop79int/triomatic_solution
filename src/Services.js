import React, { useEffect } from "react";
import { Box, SimpleGrid, chakra, Flex } from "@chakra-ui/react";
import second from "./assets/second.png";
import phone from "./assets/phone.png";
import cyber from "./assets/cyber.png";
import seo from "./assets/seo.png";
import uiux from "./assets/uiux.png";
import brain from "./assets/brain.png";
import "./Services.css";

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show1");
        }
      });
    });

    const hiddenElement1 = document.querySelectorAll(".hidden3");
    const hiddenElement2 = document.querySelectorAll(".hidden4");

    hiddenElement1.forEach((el) => observer.observe(el));
    hiddenElement2.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Flex
      bg="gray.900"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={[15, 20]}
      w="full"
      justifyContent="center"
      alignItems="center"
      className="services__flex"
    >
      <Box
        borderRadius="10"
        shadow="xl"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        p={[15, 20]}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            md: 2,
          }}
          mb={20}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box className="hidden3">
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
              Website Development
            </chakra.h2>

            <chakra.p
              mb={4}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "lg",
              }}
            >
              Understanding the requirement of our clients, we discuss the best
              solutions and implement the front-end & back-end development. Our
              software experts collaborate with UI/UX designers to provide
              perfect products to our clients.
            </chakra.p>
          </Box>

          <div className="hidden4">
            <img src={second} alt="" />
          </div>
        </SimpleGrid>

        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            md: 2,
          }}
          flexDirection="column-reverse"
          mb={20}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box
            className="hidden4"
            order={{
              base: "initial",
              md: 2,
            }}
          >
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
              Mobile App Development
            </chakra.h2>

            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "lg",
              }}
            >
              In the digital era of connectivity, mobile phones are the best
              product of connectivity that enhances the experience in every
              aspect, and without them, our lifestyle isn't easy. With our
              experience in development from pure native to cross-platform apps,
              we can enable other companies to provide services through the
              right technology.
            </chakra.p>
          </Box>
          <div className="hidden3">
            <img src={phone} alt="" />
          </div>
        </SimpleGrid>

        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            md: 2,
          }}
          mb={20}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box className="hidden3">
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
              Python Automation
            </chakra.h2>

            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "lg",
              }}
            >
              Many repetitive tasks in our workday entail. Implementing the best
              answers to such issues and making them easy for yourselves by
              dividing your workload into smaller sub-tasks. Looking into your
              problems, we think of ways to automate that hectic task and make
              life easy for you.
            </chakra.p>
          </Box>

          <div className="hidden4">
            <img src={brain} alt="" />
          </div>
        </SimpleGrid>

        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            md: 2,
          }}
          flexDirection="column-reverse"
          mb={20}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box
            className="hidden4"
            order={{
              base: "initial",
              md: 2,
            }}
          >
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
              Search Engine Optimization
            </chakra.h2>

            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "lg",
              }}
            >
              Google captures the most users' attention on the browser. Showing
              your site or products on the front page is necessary for getting
              higher success chances. You can also play a crucial role in
              optimizing the search results and helping people to discover,
              understand and utilize your product. Our experts give you that
              flexibility and help you grow your dream.
            </chakra.p>
          </Box>

          <div className="hidden3">
            <img src={seo} alt="" />
          </div>
        </SimpleGrid>

        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            md: 2,
          }}
          mb={20}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box className="hidden3">
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
              UI/UX Design
            </chakra.h2>

            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "lg",
              }}
            >
              With our expert team, we make sure to bring high-quality designs
              and better user experiences that attract your target audience and
              provide tempting solutions to your problems.
            </chakra.p>
          </Box>

          <div className="hidden4">
            <img src={uiux} alt="" />
          </div>
        </SimpleGrid>

        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            md: 2,
          }}
          flexDirection="column-reverse"
          mb={20}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box
            className="hidden4"
            order={{
              base: "initial",
              md: 2,
            }}
          >
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
              Cyber Security
            </chakra.h2>

            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "lg",
              }}
            >
              Cyber Security solutions protect your company through centralized
              protection techniques to support your digital infrastructure.
              Detect threats, reduce casualties and guard confidential data with
              our technical security procedures.
            </chakra.p>
          </Box>

          <div className="hidden3">
            <img src={cyber} alt="" />
          </div>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Services;
