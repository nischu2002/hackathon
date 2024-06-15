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
			<img src="/src/assets/biz.png" alt="Logo" style={{ height: "60px", marginLeft:"2rem" }} />
			
		  </Flex>
		  <Input placeholder="Search" width="300px" height="50px" />
		 
		</Flex>
	  </Box>
	);
  }

  function Footer() {
	return (

	  <Box as="footer" bg="white" mt={0} py={5} px={5} borderTop="1px solid #E2E8F0">
		<Flex justifyContent="space-between" alignItems="center">
		  <Box>
			<p>Cultivating Efficiency, Tracking Excellence – <br></br> Your Trusted Inventory Management Partner</p>
		  </Box>
		  <Box>
			<Flex>
			  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
				<img src="https://imgs.search.brave.com/dayBEAKYlZqlTVEWI-S_UZ67vOFXcvlKHmgNBEsYPjw/rs:fit:32:32:1/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOWM3NjZkMmE4/MTU1MTk4ZDU5YzU3/NjUxY2ExZTdjNWQx/NjJlNTY1Y2VlODM4/MmRmMDgzZDBiMmI3/YzU4NmU4ZS93d3cu/ZmFjZWJvb2suY29t/Lw" alt="Facebook" style={{ marginRight: "8px" }} />
			  </a>
			  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
				<img src="https://imgs.search.brave.com/7A-upEbZhKg3zcLw2J4VdqF63kB8ow6z3oq0uJL0Xlw/rs:fit:32:32:1/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvN2RiYmJiZDA4/NTBkNWQ0ZmQ3NDE5/OGUxOGI4NzE5ZDI0/Zjk0M2ExMDkzZmJm/ODA0MmJiMzkwZjMy/ZDM4YWVkOS93d3cu/aW5zdGFncmFtLmNv/bS8" alt="Instagram" style={{ marginRight: "8px" }} />
			  </a>
			  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
				<img src="https://imgs.search.brave.com/Zq483bGX0GnSgym-1P7iyOyEDX3PkDZSNT8m56F862A/rs:fit:32:32:1/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvN2MxOTUxNzhj/OTY1ZTQ3N2I0MjJk/MTY5NGM0MTRlYWVi/MjU1YWE2NDUwYmQ2/YTA2MDFhMDlkZDEx/NTAzZGNiNi90d2l0/dGVyLmNvbS8" alt="Twitter" style={{ marginRight: "8px" }} />
			  </a>
			</Flex>
		  </Box>
		</Flex>
		<Flex justifyContent="space-between" alignItems="center" mt={4}>
		  <a href="/privacy-policy">Privacy Policy</a>
		  <span>© 2024 Biz-wizard Inc.</span>
		  <a href="/terms-and-conditions">Terms & Conditions</a>
		</Flex>
	  </Box>
	);
  }


const Layout = () => {
	return (
		<>
		<Header/>
		<div className="page-layout min-h-screen">
			<div className="flex bg-gray-100 h-full w-full justify-between">

				<Sidebar />
				<div>
				

				<Outlet />
				</div>
				<RightSideBar />
			
			</div>
			<ReactQueryDevtools initialIsOpen={true} />
		</div>
		<Footer />
		</>
	);
};

export default Layout;
