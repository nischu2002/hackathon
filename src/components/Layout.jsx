import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Box, Flex, Input, Avatar } from "@chakra-ui/react";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RightSideBar from "./RightSideBar";
function Header() {
	return (

	  <Box bg="white" boxShadow="sm" px={4} py={3} mb={4} className="">
		<Flex justifyContent="space-between" alignItems="center">
		  <Flex alignItems="center">
			<img src="/src/assets/biz.png" alt="Logo" style={{ height: "40px", marginRight: "10px" }} />
			
		  </Flex>
		  <Input placeholder="Search" width="300px" />
		 
		</Flex>
	  </Box>
	);
  }
const Layout = () => {
	return (
		<div className="page-layout min-h-screen">
			<div className="flex bg-gray-100 h-full justify-between">

				<Sidebar />
				<div>
				<Header/>

				<Outlet />
				</div>
				<RightSideBar />
			
			</div>
			<ReactQueryDevtools initialIsOpen={true} />
		</div>
	);
};

export default Layout;
