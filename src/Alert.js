import { Box, Flex, Icon, chakra } from "@chakra-ui/react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Alert = ({ title, content, color }) => {
  return (
    <Flex>
      <Flex maxW="sm" w="full" mx="auto" rounded="lg" overflow="hidden">
        <Flex justifyContent="center" alignItems="center" w={12} bg={color}>
          <Icon as={IoMdCheckmarkCircle} color="white" boxSize={6} />
        </Flex>

        <Box mx={-3} py={2} px={4}>
          <Box mx={3}>
            <chakra.span color={color} fontWeight="bold">
              {title}
            </chakra.span>
            <chakra.p color={color} fontSize="sm">
              {content}
            </chakra.p>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Alert;
