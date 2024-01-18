/** @format */
/** @format */
import React, { useState } from "react";
import { Flex, Rate } from "antd";
import { HeartFilled } from "@ant-design/icons";
import styled from "styled-components";

const RatingComponent = () => {
  const [value, setValue] = useState(5);

  return (
    <Flex
      gap='middle'
      vertical>
      <CustomRate
        onChange={setValue}
        value={value}
        count={6}
        character={<HeartFilled />}
      />
    </Flex>
  );
};

export default RatingComponent;

const CustomRate = styled(Rate)`
  .ant-rate-star {
    color: white;
    &:hover {
      color: yellow;
    }
  }
`;
