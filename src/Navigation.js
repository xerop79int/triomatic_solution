import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";
import logo from "./assets/logo.png";
import gototop from "./utility/gototop";

const NavLink = ({ children, handler }) => (
  <Link
    onClick={handler}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "black"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <Box bg={useColorModeValue("", "")} px={8}>
        <Flex h={28} alignItems={"center"} justifyContent={"space-between"}>
          <img
            onClick={() => {
              navigate("/");
              gototop();
            }}
            className="logo__img"
            src={logo}
            alt="Logo"
            style={{
              height: "100px",
              cursor: "pointer",
            }}
          />

          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink handler={() => navigate("about")}>About Us</NavLink>
              <NavLink handler={() => navigate("services")}>Services</NavLink>
              <NavLink handler={() => navigate("projects")}>Projects</NavLink>
              <NavLink handler={() => navigate("contact")}>
                Get In Touch
              </NavLink>
            </HStack>
          </HStack>

          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavLink handler={() => navigate("services")}>Services</NavLink>
              <NavLink handler={() => navigate("about")}>About Us</NavLink>
              <NavLink handler={() => navigate("projects")}>Projects</NavLink>
              <NavLink handler={() => navigate("contact")}>
                Get In Touch
              </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}
