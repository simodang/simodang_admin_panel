"use client";

import { useState } from "react";
import { PropsWithChildren } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Sidebar from "@/components/sidebar/Sidebar";
import { MainRoute, AccountRoute } from "@/routes";
import { SidebarContext } from "@/contexts/SidebarContext";

interface DashboardLayoutProps extends PropsWithChildren {
  [x: string]: any;
}

const AdminLayout = (props: DashboardLayoutProps) => {
  const { children, ...rest } = props;
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const background = useColorModeValue("secondaryGray.300", "navy.900");

  return (
    <Box h="100vh" w="100vw" bg={background}>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      >
        <Sidebar
          mainRoutes={MainRoute}
          accountRoutes={AccountRoute}
          display="none"
          {...rest}
        />
        <Box
          float="right"
          minH="100vh"
          height="100%"
          overflow="auto"
          position="relative"
          maxH="100%"
          w={{ base: "100%", xl: "calc( 100% - 230px )" }}
          maxWidth={{ base: "100%", xl: "calc( 100% - 230px )" }}
          transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
        >
          <Box
            mx="auto"
            p={{ base: "20px", md: "30px" }}
            pe="20px"
            minH="100vh"
            pt="50px"
          >
            {children}
          </Box>
        </Box>
      </SidebarContext.Provider>
    </Box>
  );
};

export default AdminLayout;
