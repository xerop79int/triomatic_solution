import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import values from "./assets/values.png";

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={"6xl"}>
        <Stack
          as={Box}
          spacing={{ base: 20, md: 36 }}
          py={{ base: 20, md: 28 }}
          px={{ base: 2, sm: 10, md: 18 }}
        >
          <Stack textAlign={"center"}>
            <Heading
              fontWeight={500}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              lineHeight={"110%"}
            >
              Mission & Vision
              <br />
              <br />
              <Text
                as={"span"}
                fontWeight={500}
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                color={"green.300"}
              >
                Build,{" "}
              </Text>
              <Text
                as={"span"}
                fontWeight={500}
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                color={"green.300"}
              >
                Test,{" "}
              </Text>
              <Text
                as={"span"}
                fontWeight={500}
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                color={"green.300"}
              >
                Reform{" "}
              </Text>
            </Heading>
            <br />

            <Text
              color={"gray.500"}
              fontSize={{ base: "1xl", sm: "1xl", md: "2xl" }}
            >
              Triomatic Solution is a next-gen technology consultancy company
              that provides specialized custom software development. We connect
              strategy, innovation, and engineering assistance into a perfect
              creation devised to support clients at every stage of the
              procedure.
              <br />
              <br />
              We work with startups, SMBs & enterprises to craft
              state-of-the-art digital products & systems that solve corporation
              issues & drive measurable influences. We are persistent in
              developing visionary software solutions for firms and helping them
              grow their businesses using the latest technology solutions.
            </Text>
          </Stack>

          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
            }}
          >
            <Box>
              <Heading
                fontWeight={500}
                fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
                lineHeight={"110%"}
              >
                Our Core values
                <br />
                <br />
                <Text
                  as={"span"}
                  fontWeight={500}
                  fontSize={{ base: "1xl", sm: "3xl", md: "5xl" }}
                  color={"red.300"}
                >
                  Ownership,{" "}
                </Text>
                <Text
                  as={"span"}
                  fontWeight={500}
                  fontSize={{ base: "1xl", sm: "3xl", md: "5xl" }}
                  color={"blue.300"}
                >
                  Altruism,{" "}
                </Text>
                <Text
                  as={"span"}
                  fontWeight={500}
                  fontSize={{ base: "1xl", sm: "3xl", md: "5xl" }}
                  color={"yellow.300"}
                >
                  Teamwork{" "}
                </Text>
              </Heading>
              <br />

              <Text
                color={"gray.500"}
                fontSize={{ base: "1xl", sm: "1xl", md: "1xl" }}
              >
                We believe in providing excellent solutions to our client's
                needs. Give benefits to the people around us, and help them grow
                in every aspect of life. Show the hidden potential of our
                employees and implant the seed of curiosity to never stop
                learning. And build a culture where people can relate to and
                understand others' needs. Be confident in self-accountability
                and possess the courage to take the initiatives to build
                something on their own to provide value to others. And believe
                in their-selves and in the team to accomplish everything.
              </Text>
            </Box>

            <img src={values} alt="" />
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
