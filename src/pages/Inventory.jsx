import React from "react";
import {
  Box,
  Flex,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Avatar,
  Link,
} from "@chakra-ui/react";

// Inventory Component
function Inventory() {
  const products = [
    {
      name: "Macbook Pro",
      code: "#0001",
      type: "Laptop",
      price: "$ 1241",
      quantity: 44,
      image: "/path/to/macbook.png",
    },
    {
      name: "iPhone 14 pro",
      code: "#0002",
      type: "Phone",
      price: "$ 1499",
      quantity: 23,
      image: "/path/to/iphone.png",
    },
    {
      name: "Zoom75",
      code: "#0003",
      type: "Keyboard",
      price: "$ 215",
      quantity: 23,
      image: "/path/to/keyboard.png",
    },
    {
      name: "Airpods Pro",
      code: "#0004",
      type: "Earphones",
      price: "$ 249",
      quantity: 23,
      image: "/path/to/airpods.png",
    },
    {
      name: "Samsung Galaxy Fold",
      code: "#0005",
      type: "Phone",
      price: "$ 1199",
      quantity: 23,
      image: "/path/to/galaxyfold.png",
    },
    {
      name: "Samsung Odyssey",
      code: "#0006",
      type: "Displays",
      price: "$ 500",
      quantity: 23,
      image: "/path/to/odyssey.png",
    },
    {
      name: "Logitech Superlight",
      code: "#0007",
      type: "Displays",
      price: "$ 500",
      quantity: 23,
      image: "/path/to/superlight.png",
    },
  ];

  return (
    <Box bg="white" p={4} boxShadow="md" borderRadius="lg">
      <Flex justifyContent="space-between" mb={4}>
        <Input placeholder="Search" width="300px" />
		 <Button colorScheme="blue" type="submit">Add New Product</Button>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Code</Th>
              <Th>Type</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>Image</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr key={product.code}>
                <Td>{product.name}</Td>
                <Td>{product.code}</Td>
                <Td>{product.type}</Td>
                <Td>{product.price}</Td>
                <Td>{product.quantity}</Td>
                <Td>
                  <Avatar src={product.image} size="sm" />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Inventory;
