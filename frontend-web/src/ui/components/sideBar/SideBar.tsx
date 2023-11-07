import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Link } from 'react-router-dom';
import { MainNavigation } from '../../../navigation/MainNavigation';
import './style.css';

export const SideBar: React.FC = () => {
    return (
        <nav className="sidebar-container">
            <img className="app-logo" alt="Logo" src="/logo.png" />
            <Sider className="sidebar">
                <Menu theme="dark" mode="inline">
                    {Object.values(MainNavigation).map(navItem => (
                        <Menu.Item className="menu-item" key={navItem.name}>
                            {navItem.displayName} <Link to={navItem.path} />
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
        </nav>
    );
};
