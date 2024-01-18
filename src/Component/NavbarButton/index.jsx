/** @format */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavbarButton({
  to,
  navBtnText,
  color,
  backgroundColor,
  borderRadius,
  fontSize,
  fontWeight,
  border,
  margin,
  padding,
  width,
  height,
  order,
}) {
  const navBtnStyle = {
    color: color,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    fontWeight: fontWeight,
    border: border,
    margin: margin,
    width: width,
    height: height,
    fontSize: fontSize,
    padding: padding,
  };
  return (
    <CustomNavLink
      className={`${order} m-auto mb-2 m-lg-3 d-flex align-items-center justify-content-center`}
      to={to}
      style={navBtnStyle}>
      {navBtnText}
    </CustomNavLink>
  );
}

export default NavbarButton;
const CustomNavLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  height: 31px;
  width: 85px;
  text-decoration: none;
`;
