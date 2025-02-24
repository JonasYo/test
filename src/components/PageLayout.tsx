import { Flex } from 'antd';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ThemeToggle } from './AntThemeConfig';
import './PageLayout.scss';

const PageLayout: React.FC = () => {
  return (
    <>
      <Flex vertical>
        <nav id="top-navbar">
          <Flex align="center" justify="space-between">
            <div className="nav-left-container">
              <Flex align="center">
                <div className="logo nav-link">
                  <img src="/vite.svg" alt="Logo"></img>
                </div>
                <div className="nav-link">
                  <NavLink to={"/"}>Home</NavLink>
                </div>
                <div className="nav-link">
                  <NavLink to={"/about"}>About</NavLink>
                </div>
                <div className="nav-link">
                  <NavLink to={"/service"}>Service</NavLink>
                </div>
                <div className="nav-link">
                  <NavLink to={"/contact"}>Contact</NavLink>
                </div>
              </Flex>
            </div>
            <div className="nav-right-container">
              <Flex justify="space-around" align="center" style={{ padding: "10px" }}>
                <div className="nav-link">
                  <ThemeToggle />
                </div>
                <div className="nav-link">
                  <NavLink to={"/know"}>Know Us</NavLink>
                </div>
              </Flex>
            </div>
          </Flex>
        </nav>
        <div className="content">
          <Outlet />
        </div>
      </Flex>
    </>
  );
};

export default PageLayout;
