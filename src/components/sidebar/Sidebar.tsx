import { IRoute } from "@/types/navigation";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { renderThumb, renderTrack, renderView } from "../scrollbar/Scrollbar";
import SidebarContent from "./components/Content";

interface SidebarResponsiveProps {
  mainRoutes: IRoute[];
  accountRoutes: IRoute[];
}

interface SidebarProps extends SidebarResponsiveProps {
  [x: string]: any;
}

const Sidebar = (props: SidebarProps) => {
  const { mainRoutes, accountRoutes } = props;

  let variantChange = "0.2s linear";
  let shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset",
  );

  let sidebarBg = useColorModeValue("white", "navy.800");
  let sidebarMargins = "0px";

  return (
    <Box display={{ sm: "none", xl: "block" }} position="fixed" minH="100%">
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w="220px"
        h="100vh"
        m={sidebarMargins}
        minH="100%"
        overflowX="hidden"
        boxShadow={shadow}
      >
        <Scrollbars
          autoHide
          universal={true}
          renderTrackVertical={renderTrack}
          renderThumbVertical={renderThumb}
          renderView={renderView}
        >
          <SidebarContent
            mainRoutes={mainRoutes}
            accountRoutes={accountRoutes}
          />
        </Scrollbars>
      </Box>
    </Box>
  );
};

export default Sidebar;
