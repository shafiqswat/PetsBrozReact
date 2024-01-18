/** @format */
import { Form, Input } from "antd";
import React from "react";
import styled from "styled-components";
function InputComponent({ type, placeholder, name, message }) {
  return (
    <div>
      <InputParent>
        <Form.Item
          name={name}
          rules={[
            {
              required: true,
              message: { message },
            },
          ]}>
          <Input
            name={name}
            placeholder={placeholder}
            type={type}
            className='inputField p-3'
          />
        </Form.Item>
      </InputParent>
    </div>
  );
}

export default InputComponent;
const InputParent = styled.div``;
