"use client";

import { SimodangLogo } from "@/components/icons/Icon";
import { HSeparator } from "@/components/separator/Separator";
import { Flex, useColorModeValue } from "@chakra-ui/react";

const SidebarBrand = () => {
  const logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <SimodangLogo h="26px" w="175px" my="32px" color={logoColor} />
      <HSeparator mb="20px" />
    </Flex>
  );
};

export default SidebarBrand;
