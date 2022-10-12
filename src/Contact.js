import React, { useState } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  SimpleGrid,
  chakra,
  Input,
  Divider,
  FormControl,
  FormLabel,
  Textarea,
  Container,
  GridItem,
} from "@chakra-ui/react";
import second from "./assets/six.png";
import validator from "validator";
import emailjs from "@emailjs/browser";
import Alert from "./Alert";
import "./Contact.css";

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");

  const [emailState, setEmailState] = useState(false);

  setTimeout(() => {
    setEmailState(false);
  }, 20000);

  const successfullySendAlert = () => {
    if (validator.isEmail(email)) return true;
    else return false;
  };

  const sendMessage = (e) => {
    e.preventDefault();

    let data = {
      firstname: firstname,
      secondname: secondname,
      email: email,
      message: message,
    };

    emailjs
      .send("service_b4n3qli", "template_1znfecp", data, "Uvbid8YZulzzGGU0v")
      .then(
        (result) => {
          setEmailState(successfullySendAlert);
          console.log(result.text);
          setEmail("");
          setMessage("");
          setFirstname("");
          setSecondname("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
      setEmail(email);
    } else {
      setEmailError("Enter valid Email!");
      setEmail(email);
    }
  };

  return (
    <Container maxW={"7xl"}>
      <Box
        bg="white"
        _dark={{
          bg: "#111",
        }}
        p={5}
      >
        <Divider
          my="5"
          borderColor="gray.300"
          _dark={{
            borderColor: "whiteAlpha.300",
          }}
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        />

        <Box mt={[10, 0]}>
          <SimpleGrid
            display={{
              base: "initial",
              md: "grid",
            }}
            columns={{
              md: 3,
            }}
            spacing={{
              md: 6,
            }}
          >
            <GridItem
              colSpan={{
                md: 1,
              }}
            >
              <Box px={[4, 0]}>
                <Heading
                  fontSize="lg"
                  fontWeight="medium"
                  lineHeight="6"
                  mb={4}
                >
                  <Text as={"span"} color={"purple.600"}>
                    We’d love to hear what you are working on. Share your idea
                    and we handle all the rest...
                  </Text>
                </Heading>
                <Text
                  mt={1}
                  mb={10}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  Use a permanent address where you can receive mail.
                </Text>

                <img src={second} alt="" />
              </Box>
            </GridItem>

            <GridItem
              mt={[5, null, 0]}
              colSpan={{
                md: 2,
              }}
            >
              <chakra.form
                method="POST"
                shadow="base"
                rounded={[null, "md"]}
                overflow={{
                  sm: "hidden",
                }}
              >
                <Stack
                  px={4}
                  py={5}
                  p={[null, 6]}
                  bg="white"
                  color="black"
                  _dark={{
                    bg: "#141517",
                  }}
                  spacing={6}
                >
                  <SimpleGrid columns={6} spacing={6}>
                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="first_name"
                        fontSize="sm"
                        fontWeight="md"
                        color="black"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        First name
                      </FormLabel>

                      <Input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        onChange={(e) => setFirstname(e.target.value)}
                        value={firstname}
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="last_name"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Last name
                      </FormLabel>
                      <Input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        onChange={(e) => setSecondname(e.target.value)}
                        value={secondname}
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 4]}>
                      <FormLabel
                        htmlFor="email_address"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Email address
                      </FormLabel>
                      <Input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autoComplete="email"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        onChange={(e) => validateEmail(e)}
                        value={email}
                      />
                      <span
                        style={{
                          color: "red",
                          fontSize: "13px",
                        }}
                      >
                        {emailError}
                      </span>
                    </FormControl>
                  </SimpleGrid>

                  <div>
                    <FormControl id="message" mt={1}>
                      <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Let us know a bit more about the project you have in
                        mind
                      </FormLabel>
                      <Textarea
                        placeholder="Go on..."
                        mt={1}
                        rows={3}
                        shadow="sm"
                        focusBorderColor="brand.400"
                        fontSize={{
                          sm: "sm",
                        }}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      />
                    </FormControl>
                  </div>
                </Stack>

                <Box
                  px={{
                    base: 4,
                    sm: 6,
                  }}
                  py={3}
                  bg="purple.200"
                  _dark={{
                    bg: "#121212",
                  }}
                  textAlign="right"
                >
                  <Button
                    bg={"purple.400"}
                    type="submit"
                    colorScheme="brand"
                    _focus={{
                      shadow: "",
                    }}
                    fontWeight="md"
                    onClick={sendMessage}
                  >
                    Send Message
                  </Button>
                </Box>
              </chakra.form>
            </GridItem>

            {emailState && (
              <Alert
                title={"Sucess"}
                content={"Your message is send successfully"}
                color={"green.400"}
              />
            )}
          </SimpleGrid>
        </Box>

        <Divider
          my="5"
          borderColor="gray.300"
          _dark={{
            borderColor: "whiteAlpha.300",
          }}
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        />
      </Box>
    </Container>
  );
};

export default Contact;
