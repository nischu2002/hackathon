import React from "react";
import { Box, Flex, Input, Avatar } from "@chakra-ui/react";
import { Stat, StatNumber, StatHelpText } from "@chakra-ui/react";
import Graph from "../assets/graph.png";
import Calendar from "../assets/calendar.png";
import Dollor from "../assets/dollor.png";
import Bag from "../assets/bag.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Select,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import {
  getRevenueData,
  getSalesOrdersSummary,
  getSummaryData,
} from "../api";

// Header Component
 function Header() {
  return (
    <Box bg="white" boxShadow="sm" px={4} py={3} mb={4} className="w-1000">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <img src="/src/assets/biz.png" alt="Logo" style={{ height: "40px", marginRight: "10px" }} />
          
        </Flex>
        <Input placeholder="Search" width="300px" />
       
      </Flex>
    </Box>
  );
}

// function Footer() {
// 	return (
// 	  <Box as="footer" bg="white" py={4} mt={8} borderTop="1px solid #E2E8F0">
// 		<Flex justifyContent="space-between" alignItems="center">
// 		  <Box>
// 			<p>Cultivating Efficiency, Tracking Excellence – Your Trusted Inventory Management Partner</p>
// 		  </Box>
// 		  <Box>
// 			<Flex>
// 			  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
// 				<img src="/path/to/facebook-icon.png" alt="Facebook" style={{ marginRight: "8px" }} />
// 			  </a>
// 			  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
// 				<img src="/path/to/instagram-icon.png" alt="Instagram" style={{ marginRight: "8px" }} />
// 			  </a>
// 			  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
// 				<img src="/path/to/twitter-icon.png" alt="Twitter" style={{ marginRight: "8px" }} />
// 			  </a>
// 			</Flex>
// 		  </Box>
// 		</Flex>
// 		<Flex justifyContent="space-between" alignItems="center" mt={4}>
// 		  <a href="/privacy-policy">Privacy Policy</a>
// 		  <span>© 2024 Biz-wizard Inc.</span>
// 		  <a href="/terms-and-conditions">Terms & Conditions</a>
// 		</Flex>
// 	  </Box>
// 	);
//   }



// Main Dashboard Component
export default function Dashboard() {
  const { data: summaryData } = useQuery({
    queryKey: ["SummaryData"],
    queryFn: getSummaryData,
  });

  const { data: revenueData } = useQuery({
    queryKey: ["RevenueData"],
    queryFn: getRevenueData,
  });
  const { data: salesOrdersData } = useQuery({
    queryKey: ["SalesOrdersData"],
    queryFn: getSalesOrdersSummary,
  });

  return (
	<div style={{height:"100"}}
	>
      {/* <Header /> */}
    <div className="mt-8 p-4 pb-10 ">
      <Stat>
        <p className="text-xl font-bold mb-4">Sales Summary</p>
        <div className="salesSummary flex gap-4">
          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl">
            <img src={Graph} style={{ width: "30px", height: "30px" }} />
            <div>
              <StatNumber fontSize={14}>{summaryData?.todays}</StatNumber>
              <StatHelpText>Todays Sale</StatHelpText>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl">
            <img src={Calendar} style={{ width: "30px", height: "30px" }} />
            <div>
              <StatNumber fontSize={14}> {summaryData?.yearly}</StatNumber>
              <StatHelpText>Yearly Total Sale</StatHelpText>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl">
            <img src={Dollor} style={{ width: "30px", height: "30px" }} />
            <div>
              <StatNumber fontSize={14}>{summaryData?.netIncome}</StatNumber>
              <StatHelpText>Net Income</StatHelpText>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl">
            <img src={Bag} style={{ width: "30px", height: "30px" }} />
            <div>
              <StatNumber fontSize={14}>{summaryData?.products}</StatNumber>
              <StatHelpText>Products</StatHelpText>
            </div>
          </div>
        </div>
      </Stat>
      <div className="flex justify-between mb-8 mt-8">
        <p className="text-lg font-semibold">Revenue Report</p>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="h-4 w-4 bg-[#8EDEFF]"></div>
            <p>Net Profit</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-4 w-4 bg-[#C08BFF]"></div>
            <p>Gross Profit</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={revenueData?.result}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
		  >
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="netProfit"
            stackId="a"
            fill="rgba(142, 222, 255, 1)"
			/>
          <Bar
            dataKey="grossProfit"
            stackId="a"
            fill="rgba(192, 139, 255, 1)"
          />
        </BarChart>
      </ResponsiveContainer>

      <div className="flex justify-between mb-8 mt-8">
        <p className="text-lg font-semibold">Sales Orders</p>
        <Select
          variant="flushed"
          colorScheme="teal"
          color={"teal.500"}
          width={"200px"}
          fontSize="20px"
		  >
          <option value="7">7 days</option>
          <option value="15">15 days</option>
          <option value="30">Last Month</option>
          <option value="all">All Time</option>
        </Select>
      </div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Channel</Th>
              <Th>Draft</Th>
              <Th>Confirmed</Th>
              <Th>Packed</Th>
              <Th>Shipped</Th>
              <Th>Invoiced</Th>
            </Tr>
          </Thead>
          <Tbody>
            {salesOrdersData &&
              salesOrdersData?.result.map((item, index) => (
				  <Tr key={index}>
                  <Td>{item.channel}</Td>
                  <Td>{item.draft}</Td>
                  <Td>{item.confirmed}</Td>
                  <Td>{item.packed}</Td>
                  <Td>{item.shipped}</Td>
                  <Td>{item.invoiced}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
			  </div>
			  
			 
  );
}




  