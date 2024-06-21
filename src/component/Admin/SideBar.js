import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import './SideBar.scss';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../../assets/bg2.jpg';
import { AiOutlineAliwangwang } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

const SideBar = (props) => {
    const navigate = useNavigate()
    const { image, collapsed, toggled, handleToggleSidebar } = props;
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                    <AiOutlineAliwangwang size={'5em'} color={'#7FFF00'}/>
                    <span
                        onClick={() => navigate('/')}
                    >
                        Pokemon
                    </span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaTachometerAlt />}
                            suffix={<span className="badge red">New</span>}
                        >
                            DashBoard
                            <Link to="/admins"></Link>"
                        </MenuItem>
                        {/* <MenuItem icon={<FaGem />}> components </MenuItem> */}
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            icon={<FaGem />}
                            suffix={<span className="badge yellow">3</span>}
                            title="Features"
                        >
                            <MenuItem>
                                 Quản lý Users
                                 <Link to="/admins/manage-users"></Link>

                            </MenuItem>
                            <MenuItem> 
                                Quản lý bài Quiz 
                                <Link to="/admins/manage-quizzes"></Link>
                            </MenuItem>
                            <MenuItem> Quản lý câu hỏi
                                <Link to="/admins/manage-questions"></Link>
                            </MenuItem>
                        </SubMenu>

                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://react-icons.github.io/react-icons/icons/ai/"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                Legend never die
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}

export default SideBar;