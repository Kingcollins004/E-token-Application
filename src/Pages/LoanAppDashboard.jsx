import React from "react";
import {
  Flex,
  Box,
  Text,
  Table,
  TableContainer,
  Thead,
  Tr,
  Td,
  Tbody,
} from "@chakra-ui/react";
import SmallBox from "../components/smallBox";

const LoanAppDashboard = () => {
  return (
    <>
      <Box p="5" m="3">
        <Box
          bgColor="#1c940f"
          width="25%"
          textAlign="center"
          color="white"
          p="4"
        >
          <Text fontWeight="600">SME & StartUp</Text>
        </Box>

        <Box border="1px solid black" mt="3">
          <Flex h="50px" borderBottom="1px solid black">
            <SmallBox text={"Business Name : Ladi's poultry"} width={"20%"} />

            <SmallBox text={"Amount : N5,000,000"} width={"20%"} />

            <SmallBox text={"Term : 4 years"} width={"20%"} />

            <SmallBox text={"Interest rate : 26%"} width={"20%"} />

            <SmallBox text={"Rate Type : Fixed"} width={"20%"} />
          </Flex>

          <Flex h="50px" borderBottom="1px solid black">
            <SmallBox
              text={"Total Amount Payable : N6,300,000"}
              width={"33.33%"}
            />

            <SmallBox
              text={"Module Name : Mr. Sixtus Oladele"}
              width={"33.33%"}
            />

            <SmallBox
              text={"Transaction Number : BW02072018001"}
              width={"33.33%"}
            />
          </Flex>

          <Flex h="50px" borderBottom="1px solid black">
            <SmallBox text={"Loan Ref : BW02072018001"} width={"25%"} />

            <SmallBox text={"Wallet ID : BW02072018001"} width={"25%"} />

            <SmallBox text={"Request ID : BW02072018001"} width={"25%"} />

            <SmallBox text={"Phone Number : 0908975647"} width={"25%"} />
          </Flex>

          <Flex h="50px" borderBottom="1px solid black">
            <SmallBox text={"Account Number : BW02072018001"} width={"25%"} />

            <SmallBox text={"E-Token ID : BW02072018001"} width={"75%"} />

          </Flex>

          <Box p="5">
            <Flex>
              <Text color="#1c940f" fontWeight={"600"} fontSize="17px">Documentation Provided</Text>
            </Flex>
          </Box>

        </Box>
      </Box>
    </>
  );
};
export default LoanAppDashboard;