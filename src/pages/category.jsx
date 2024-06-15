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
} from "@chakra-ui/react";

// Category Component
function Category() {
  const categories = [
    {
      name: "Logitech Superlight",
      image: "/path/to/superlight.png",
    },
    {
      name: "Logitech Superlight",
      image: "/path/to/superlight.png",
    },
    {
      name: "Logitech Superlight",
      image: "/path/to/superlight.png",
    },
    // Add more categories as needed
  ];

  return (
    <Box bg="white" p={4} boxShadow="md" borderRadius="lg">
      <Flex justifyContent="space-between" mb={4}>
        <Input placeholder="Search" width="300px" />
        <Button colorScheme="blue">Add New Category</Button>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Image</Th>
            </Tr>
          </Thead>
          <Tbody>
            {categories.map((category, index) => (
              <Tr key={index}>
                <Td>{category.name}</Td>
                <Td>
                  <Avatar src={category.image} size="sm" />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Category;
