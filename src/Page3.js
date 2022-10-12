import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoSearchSharp,
  IoLogoCodepen,
} from "react-icons/io5";
import second from "./assets/fourth.png";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        padding={7}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={400} fontSize={20}>
        {text}
      </Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={"6xl"} py={{ base: 20, md: 28 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            OUR PROCESS
          </Text>
          <Heading fontWeight={500} fontSize={36}>
            The entire process of development is in 3 steps.
          </Heading>

          <Stack
            fontSize={"large"}
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"green.500"} w={10} h={10} />
              }
              iconBg={useColorModeValue("green.100", "green.900")}
              text={
                "We work with you to understand the problem you’re trying to solve and the digital solution to that problem."
              }
            />

            <Feature
              icon={
                <Icon as={IoLogoCodepen} color={"yellow.500"} w={10} h={10} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={
                "You’ll work closely with our app development team to create an elegant design that incorporates best UI/UX ways."
              }
            />
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"red.500"} w={10} h={10} />
              }
              iconBg={useColorModeValue("red.100", "red.900")}
              text={
                "We will provide multiple prototypes for you to test and discuss what adjustments can be done."
              }
            />
          </Stack>
        </Stack>

        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={second}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
