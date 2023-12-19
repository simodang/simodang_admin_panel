import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaUser } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

import Searchbar from "./searchBar/SearchBar";

type NavbarLinkProps = {
  variant?: string;
  fixed?: boolean;
  secondary: boolean;
};

const NavbarLinks = (props: NavbarLinkProps) => {
  const { variant, fixed, secondary, ...rest } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  const textColorBrand = useColorModeValue("brand.700", "brand.400");
  const mainText = useColorModeValue("gray.700", "gray.200");
  const navbarIcon = useColorModeValue("gray.500", "gray.200");
  let menuBg = useColorModeValue("white", "navy.800");
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)",
  );
  // const borderButton = useColorModeValue("secondaryGray.500", "whiteAlpha.200");

  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      <Searchbar
        mb={() => {
          if (secondary) {
            return { base: "10px", md: "unset" };
          }
          return "unset";
        }}
        me="10px"
        borderRadius="30px"
      />

      {/* Notification */}
      <Menu>
        <MenuButton p="0px">
          <Center>
            <Icon
              w="20px"
              h="20px"
              me="10px"
              as={MdNotifications}
              color={navbarIcon}
            />
          </Center>
        </MenuButton>
        <MenuList
          boxShadow={shadow}
          p="20px"
          borderRadius="20px"
          bg={menuBg}
          border="none"
          mt="22px"
          me={{ base: "30px", md: "unset" }}
          minW={{ base: "unset", md: "400px", xl: "450px" }}
          maxW={{ base: "360px", md: "unset" }}
        >
          <Flex w="100%" mb="20px">
            <Text fontSize="md" fontWeight="600" color={mainText}>
              Notifications
            </Text>
            <Text
              fontSize="sm"
              fontWeight="500"
              color={textColorBrand}
              ms="auto"
              cursor="pointer"
            >
              Mark all read
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <MenuItem
              _hover={{ bg: "none" }}
              _focus={{ bg: "none" }}
              px="0"
              borderRadius="8px"
              mb="10px"
            >
              {/* <ItemContent info="Horizon UI Dashboard PRO" /> */}
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>

      {/* Toggle Color Mode */}
      <Button
        variant="no-hover"
        bg="transparent"
        p="0px"
        minW="unset"
        minH="unset"
        h="18px"
        w="max-content"
        onClick={toggleColorMode}
      >
        <Icon
          me="10px"
          h="18px"
          w="18px"
          color={navbarIcon}
          as={colorMode === "light" ? IoMdMoon : IoMdSunny}
        />
      </Button>

      {/* User Profile Menu */}
      <Menu>
        <MenuButton p="0px" style={{ position: "relative" }}>
          <Center
            ms="0px"
            px="0px"
            me={{ sm: "2px", md: "16px" }}
            color={navbarIcon}
          >
            <Icon as={FaUser} me="8px" />
            <Text display={{ sm: "none", md: "flex" }}>Sign In</Text>
          </Center>
        </MenuButton>
        <MenuList
          boxShadow={shadow}
          p="0px"
          mt="10px"
          borderRadius="20px"
          bg={menuBg}
          border="none"
        >
          <Flex flexDirection="column" p="10px">
            <MenuItem
              _hover={{ bg: "none" }}
              _focus={{ bg: "none" }}
              bg={menuBg}
              borderRadius="8px"
              px="14px"
            >
              <Text fontSize="sm">Profile Settings</Text>
            </MenuItem>
            <MenuItem
              _hover={{ bg: "none" }}
              _focus={{ bg: "none" }}
              bg={menuBg}
              borderRadius="8px"
              px="14px"
            >
              <Text fontSize="sm">Newsletter Settings</Text>
            </MenuItem>
            <MenuItem
              _hover={{ bg: "none" }}
              _focus={{ bg: "none" }}
              bg={menuBg}
              color="red.400"
              borderRadius="8px"
              px="14px"
            >
              <Text fontSize="sm">Log out</Text>
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NavbarLinks;
