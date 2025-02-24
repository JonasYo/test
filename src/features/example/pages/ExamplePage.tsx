import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { CounterContextType } from "../../../types/example";
import { COUNTER_TYPE } from "../constants";

const { Content, Sider } = Layout;

const Example: React.FC = () => {
  const [counterType, setCounterType] = useState<COUNTER_TYPE>(COUNTER_TYPE.SYNC);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.counterType) {
      navigate("/example/counter", {
        state: {
          counterType,
        },
      });
    }
  }, []);
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu mode="inline" defaultSelectedKeys={["1"]} style={{ height: "100%", borderRight: 0 }}>
            <Menu.Item
              key="1"
              onClick={() => {
                setCounterType(COUNTER_TYPE.SYNC);
              }}
            >
              Sync Counter
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => {
                setCounterType(COUNTER_TYPE.ASYNC);
              }}
            >
              Async Counter
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet context={{ counterType } satisfies CounterContextType} />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Example;
