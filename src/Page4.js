import {
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Container,
  Flex,
  Box,
} from "@chakra-ui/react";
import {
  FcFlowChart,
  FcSmartphoneTablet,
  FcDeployment,
  FcDataProtection,
  FcEngineering,
  FcSearch,
} from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "./Page4.css";
import goToTop from "./utility/gototop";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.50"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text
        color={"gray.700"}
        _hover={{
          color: "black",
        }}
      >
        {text}
      </Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  const navigate = useNavigate();

  return (
    <Container maxW={"6xl"} py={{ base: 20, md: 28 }} className="page4">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Box
          position={"relative"}
          align={"center"}
          height={"350px"}
          rounded={"2xl"}
          boxShadow={"2xl"}
          width={"full"}
          overflow={"hidden"}
          p={5}
          _hover={{
            bg: "#ffc2c4",
          }}
          onClick={() => {
            goToTop();
            navigate("services");
          }}
        >
          <Feature
            icon={<Icon as={FcDeployment} w={10} h={10} />}
            title={"UI/UX Design"}
            text={
              "We precisely apprehend your product and human-centric innovations that are fun to utilize for your end-user."
            }
          />
        </Box>

        <Box
          position={"relative"}
          align={"center"}
          height={"350px"}
          rounded={"2xl"}
          boxShadow={"2xl"}
          width={"full"}
          overflow={"hidden"}
          p={5}
          _hover={{
            bg: "#ffd9c2",
          }}
          onClick={() => {
            goToTop();
            navigate("services");
          }}
        >
          <Feature
            icon={<Icon as={FcFlowChart} w={10} h={10} />}
            title={"Website & Software Development"}
            text={
              "We scheme custom-made front-end and back-end answers for your project and assure quality and protection."
            }
          />
        </Box>

        <Box
          position={"relative"}
          align={"center"}
          height={"350px"}
          rounded={"2xl"}
          boxShadow={"2xl"}
          width={"full"}
          overflow={"hidden"}
          p={5}
          _hover={{
            bg: "#ffefc2",
          }}
          onClick={() => {
            goToTop();
            navigate("services");
          }}
        >
          <Feature
            icon={<Icon as={FcSmartphoneTablet} w={10} h={10} />}
            title={"Mobile App Development"}
            text={
              "Develop sync apps for easy access of information and get the job done in no time."
            }
          />
        </Box>

        <Box
          position={"relative"}
          align={"center"}
          height={"350px"}
          rounded={"2xl"}
          boxShadow={"2xl"}
          width={"full"}
          overflow={"hidden"}
          p={5}
          _hover={{
            bg: "#e5f5cc",
          }}
          onClick={() => {
            goToTop();
            navigate("services");
          }}
        >
          <Feature
            icon={<Icon as={FcDataProtection} w={10} h={10} />}
            title={"Python Automation"}
            text={
              "Software automation entitles understanding & replicating activities of users. Create new virtual workers and divide the assignments between them."
            }
          />
        </Box>

        <Box
          position={"relative"}
          align={"center"}
          height={"350px"}
          rounded={"2xl"}
          boxShadow={"2xl"}
          width={"full"}
          overflow={"hidden"}
          p={5}
          _hover={{
            bg: "#c9e6f8",
          }}
          onClick={() => {
            goToTop();
            navigate("services");
          }}
        >
          <Feature
            icon={<Icon as={FcEngineering} w={10} h={10} />}
            title={"Cyber Security"}
            text={
              "We provide information security solutions to protect your business and products from any harm."
            }
          />
        </Box>

        <Box
          position={"relative"}
          align={"center"}
          height={"350px"}
          rounded={"2xl"}
          boxShadow={"2xl"}
          width={"full"}
          overflow={"hidden"}
          p={5}
          _hover={{
            bg: "#dfd7ea",
          }}
          onClick={() => {
            goToTop();
            navigate("services");
          }}
        >
          <Feature
            icon={<Icon as={FcSearch} w={10} h={10} />}
            title={"Search Engine Optimization"}
            text={
              "We tend to provide the art and science of getting pages to rank higher in search engines so people discover your websites."
            }
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
}
