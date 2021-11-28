import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
import { useEffect, useState } from 'react';
const Navbar = () => {
  const [state, setState] = useState({
    activeMenu: true,
    screenSize: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setState({ ...state, screenSize: window.innerWidth });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (state.screenSize < 768) {
      setState({ ...state, activeMenu: false });
    } else {
      setState({ ...state, activeMenu: true });
    }
  }, [state.screenSize]);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setState({ ...state, activeMenu: !state.activeMenu })}
        >
          <MenuOutlined />
        </Button>
      </div>
      {state.activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />} key={1}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />} key={2}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<HomeOutlined />} key={3}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<HomeOutlined />} key={4}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
