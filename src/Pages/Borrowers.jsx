import React from "react";
import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Td,
  Tbody,
  TabList,
  Tabs,
  Tab,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Data from "./LoanData";

const BorrowersDashboard = () => {
  const nav = useNavigate();
  return (
    <>
      <Tabs variant="unstyled" width="100%" p="5">
        <TabList p="3">
          <Tab
            width="30%"
            color="white"
            bgColor="#1c940f"
            borderRightColor="white"
            borderRightWidth="2px"
            _selected={{ color: "black", bgColor: "white" }}
          >
            Individual
          </Tab>
          <Tab
            width="30%"
            color="white"
            bgColor="#1c940f"
            borderRightColor="white"
            borderRightWidth="2px"
            _selected={{ color: "black", bgColor: "white" }}
          >
            Cooperate
          </Tab>

          <Tab
            bgColor="#1c940f"
            color="white"
            borderRightColor="white"
            borderRightWidth="2px"
            width="30%"
            _selected={{ color: "black", bgColor: "white" }}
          >
            SME & StartUp
          </Tab>
        </TabList>
      </Tabs>
      <TableContainer p="5">
        <Table variant="striped" colorScheme="whatsapp" p="5">
          <Thead>
            <Tr>
              <Td>Name</Td>
              <Td>Amount</Td>
              <Td>Term</Td>
              <Td>Interest rate</Td>
              <Td>Rate Type</Td>
              <Td>Total Amount Payable</Td>
              <Td></Td>
            </Tr>
          </Thead>
          <Tbody>
            {Data.map((data) => {
              return (
                <Tr key={data.name}>
                  <Td>{data.name}</Td>
                  <Td>{data.amount}</Td>
                  <Td>{data.term}</Td>
                  <Td>{data.intrestRate}</Td>
                  <Td>{data.rateType}</Td>
                  <Td>{data.amountPayable}</Td>
                  <Td
                    color="red"
                    _hover={{ cursor: "pointer" }}
                    onClick={() => nav("/Customer")}
                  >
                    View
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
export default BorrowersDashboard;
