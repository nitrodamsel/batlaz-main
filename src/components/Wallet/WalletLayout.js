import { Outlet } from "react-router-dom";
import sectionBG from ".././assets/WalletHifi.webp";
import FooterGeneral from "../Footer/FooterGeneral";
import { Box, Flex } from "@chakra-ui/react";

export default function WalletLayout() {
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <Box
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        bgImage={sectionBG}
        flex="1"
      >
        <Outlet />
      </Box>
      <FooterGeneral />
    </Flex>
  );
}
