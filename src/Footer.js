import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "./assets/logo1.png";
import goToTop from "./utility/gototop";
import Alert from "./Alert";
import validator from "validator";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      to={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("red.200", "blue.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailState, setEmailState] = useState(false);

  setTimeout(() => {
    setEmailState(false);
  }, 20000);

  useEffect(() => {
    goToTop();
  }, []);

  const validateMail = () => {
    if (validator.isEmail(email)) {
      setEmailError("");
      return true;
    } else {
      setEmailError("Email is invalid");
      return false;
    }
  };

  const navigate = useNavigate();
  return (
    <Box
      bg={useColorModeValue("blue.50", "gray.900")}
      color={useColorModeValue("black.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <img
                onClick={() => {
                  navigate("/");
                  goToTop();
                }}
                src={logo}
                alt=""
                style={{
                  height: "300px",
                  width: "300px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <div
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/about");
                goToTop();
              }}
            >
              About us
            </div>

            <div
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/contact");
                goToTop();
              }}
            >
              Contact us
            </div>
          </Stack>

          {/* <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link to={"#"}>Terms of Service</Link>
            <Link to={"#"}>Privacy Policy</Link>
          </Stack> */}

          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                onClick={() => {
                  setEmailState(validateMail);
                }}
                bg={useColorModeValue("green.400", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>

            {emailState ? (
              <Alert
                title={"Sucess"}
                content={"Your subsription is successful"}
                color={"green.400"}
              />
            ) : (
              <span
                style={{
                  color: "red",
                  fontSize: "13px",
                }}
              >
                {emailError}
              </span>
            )}

            <br />

            <Text fontSize={"sm"}>
              © 2022 Chakra Templates. All rights reserved
            </Text>

            <br />

            {/* <Stack mt={10} mb={10} direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} to={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} to={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} to={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack> */}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
