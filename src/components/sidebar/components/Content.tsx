import { Flex, Stack, Box, Text, Heading } from "@chakra-ui/react";
import SidebarBrand from "./Brand";
import { IRoute } from "@/types/navigation";
import SidebarLinks from "./Links";
import { HSeparator } from "@/components/separator/Separator";

interface SidebarContentProps {
  mainRoutes: IRoute[];
  accountRoutes: IRoute[];
}

const SidebarContent = (props: SidebarContentProps) => {
  const { mainRoutes, accountRoutes } = props;

  return (
    <Flex direction="column" height="100%" pt="25px" borderRadius="30px">
      <SidebarBrand />
      <Stack direction="column" mt="8px" mb="24px">
        <Box ps="20px" pe={{ lg: "16px", "2xl": "16px" }}>
          <SidebarLinks routes={mainRoutes} />
        </Box>
      </Stack>
      <Stack direction="column" mt="auto" mb="24px">
        <HSeparator />
        <Box ps="20px" pe={{ lg: "16px", "2xl": "16px" }}>
          <Heading size="md">Account</Heading>
        </Box>
        <Box ps="20px" mt="8px" pe={{ lg: "16px", "2xl": "16px" }}>
          <SidebarLinks routes={accountRoutes} />
        </Box>
      </Stack>
    </Flex>
  );
};

export default SidebarContent;
