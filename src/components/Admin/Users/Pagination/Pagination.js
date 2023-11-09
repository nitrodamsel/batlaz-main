import React, { useState, useEffect } from "react";

import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const PaginationUserManagement = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Flex flexDirection="row">
      {pageNumbers.map((number) => (
        <Box key={number}>
          <Button
            bgColor="transparent"
            _hover={{ backgroundColor: "none" }}
            color="white"
            onClick={() => paginate(number)}
          >
            {number}
          </Button>
        </Box>
      ))}
    </Flex>
  );
};

export default PaginationUserManagement;
