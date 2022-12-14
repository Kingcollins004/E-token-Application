import { Image, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import DrawerComponent from "./Drawer";

const NavComponent = () => {
  const {pathname} = useLocation()
  const [drawerState, setDrawerState] = useState(false)
  return (
    <>
    {pathname != "/SignUp" && pathname != "/SignIn" &&
    <>
      <Flex
        bgColor="#1c940f"
        boxShadow="base"
        h="70px"
        alignItems="center"
        p="5"
        
      >
        <Flex alignItems="center" ml="5" pl="5">
          <Image
            src={"/images/Frame 3119.png"}
            boxSize="50px"
            alt="logo"
            mr="5"
          />
          <Text color="white" fontSize="25px" fontWeight="600">
            Taki Finance
          </Text>
        </Flex>
      </Flex>

      <Flex p="3" alignItems="center" ml="5" pl="5">
        <Flex p="5" alignItems="center" width="30%" ml="5" >
          <Image src={"/images/Vector3.png"} alt="logo" boxSize="40px" mr="3" ml="5"   onClick={() => setDrawerState(current => !current)} />
          <Text fontWeight="600" fontSize="20px">
            Dashboard
          </Text>
        </Flex>
        <Flex width="40%" justifyContent="center">
          <Text fontWeight="600" fontSize="25px">
            {pathname === "/Customer" ? "Customer Dashboard" : pathname === "/Borrowers" ? "Borrower Dashboard" : "Loan application dashboard"}
          </Text>
        </Flex>
      </Flex>
      <DrawerComponent drawerState={drawerState} setDrawerState={setDrawerState}/>
      </>
}
      
    </>
  );
};

export default NavComponent;
