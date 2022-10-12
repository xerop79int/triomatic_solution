import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import main from "./assets/main.png";
import { useNavigate } from "react-router-dom";
import goToTop from "./utility/gototop";

export default function CallToActionWithIllustration() {
  const navigate = useNavigate();

  return (
    <Container maxW={"6xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Providing IT Services{" "}
          <div>
            <Text as={"span"} color={"orange.400"}>
              byte by byte
            </Text>
          </div>
        </Heading>

        <Text color={"gray.500"} maxW={"3xl"}>
          We aims to provide quality services with right technology and winning
          solutions for your startups needs at different stages of digital
          transformation & cut your time to market
        </Text>

        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
            onClick={() => {
              goToTop();
              navigate("contact");
            }}
          >
            Get started
          </Button>
          <Button
            rounded={"full"}
            px={6}
            onClick={() => {
              goToTop();
              navigate("services");
            }}
          >
            Learn more
          </Button>
        </Stack>

        <Flex w={"full"}>
          <Illustration
            height={{ sm: "24rem", lg: "28rem" }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}

export const Illustration = (props) => {
  return (
    <>
      <img src={main} alt="" />
    </>
  );
};
