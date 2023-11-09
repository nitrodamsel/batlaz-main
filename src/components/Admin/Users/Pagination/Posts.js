import React, { useState, useEffect } from "react";

import {
  Box,
  Flex,
  Image,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

import image from "../../../assets/Ellipse.webp";

const PostsUserManagement = ({ posts }) => {
  return (
    <Box>
      {posts.map((item, index) => (
        <Box key={item.id}>
          <Flex py="5px">
            <Flex w="10%">
              <Text color="white">
                {/* 1 */}
                {item.no}
              </Text>
            </Flex>
            <Flex w="22.5%" display="flex">
              <Image src={image} height="33px"></Image>
              <Box>
                <Text color="white" fontSize="sm">
                  {/* Strike Eagle */}
                  {item.name}
                </Text>
                <Text fontSize="8px" color="#716B76">
                  @strikeeagle
                </Text>
              </Box>
            </Flex>
            <Flex w="22.5%">
              <Text color="white">
                {/* 06/20/2022 */}
                {item.date}
              </Text>
            </Flex>
            <Flex w="22.5%" justifyContent="start" alignItems="center" gap="3">
              <Box
                bgColor="#42C340"
                borderRadius="50%"
                height="5px"
                w="5px"
              ></Box>
              <Text color="white">
                {/* Active */}
                {item.status}
              </Text>
            </Flex>
            <Flex
              w="22.5%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              paddingRight="15px"
            >
              <Text color="white">
                Level {item.level}
                {/* 150 */}
              </Text>
              <Flex gap="1">
                <Box
                  bgColor="white"
                  borderRadius="50%"
                  height="5px"
                  w="5px"
                ></Box>
                <Box
                  bgColor="white"
                  borderRadius="50%"
                  height="5px"
                  w="5px"
                ></Box>
                <Box
                  bgColor="white"
                  borderRadius="50%"
                  height="5px"
                  w="5px"
                ></Box>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default PostsUserManagement;
