import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { IoSearch } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

type SearchBarProps = {
  variant?: string;
  background?: string;
  children?: JSX.Element;
  placeholder?: string;
  borderRadius?: string | number;
  [x: string]: any;
};

const Searchbar = (props: SearchBarProps) => {
  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props;

  const inputText = useColorModeValue("gray.700", "gray.100");
  const inputFocusColor = useColorModeValue("teal.300", "teal.300");
  const searchIconColor = useColorModeValue("gray.500", "white");
  const inputBg = useColorModeValue("white", "secondaryGray.900");

  return (
    <InputGroup w={{ base: "100%", md: "200px" }} {...rest}>
      <InputLeftElement>
        <IconButton
          aria-label="search"
          bg="inherit"
          borderRadius="inherit"
          _hover={{
            borderRadius: "full",
          }}
          _active={{
            bg: "inherit",
            transform: "none",
            borderColor: "transparent",
          }}
          _focus={{
            boxShadow: "none",
          }}
          icon={<SearchIcon color={searchIconColor} w="15px" h="15px" />}
        />
      </InputLeftElement>

      <Input
        variant="search"
        fontSize="sm"
        bg={background ? background : inputBg}
        color={inputText}
        fontWeight="500"
        _placeholder={{ color: "gray.400", fontSize: "14px" }}
        borderRadius={borderRadius ? borderRadius : "30px"}
        placeholder={placeholder ? placeholder : "Search..."}
      />
    </InputGroup>
  );
};

export default Searchbar;
