import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { ConfigProvider, ConfigProviderProps, Switch, theme } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { setThemeMode } from "../commonSlice/ThemeSlice";

const AntThemeConfig: React.FC<ConfigProviderProps> = (props) => {
  const [primaryThemeColor] = useState("#120e86");
  // TODO: Get the theme of user from api if exist and apply

  const themeMode = useSelector((state: RootState) => state.theme.mode);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryThemeColor,
        },
        algorithm: themeMode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
      locale={{ locale: sessionStorage.getItem("lang") || "en" }}
    >
      {props.children}
    </ConfigProvider>
  );
};

export const ThemeToggle = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleThemeMode = (isDarkEnabled: boolean) => {
    if (isDarkEnabled) {
      dispatch(setThemeMode("dark"));
    } else {
      dispatch(setThemeMode("light"));
    }
  };

  return (
    <>
      <Switch
        onChange={(checked) => handleThemeMode(checked)}
        checkedChildren={<MoonOutlined />}
        unCheckedChildren={<SunOutlined />}
      />
    </>
  );
};

export default AntThemeConfig;
