import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import colorConfigs from '../../configs/colorConfigs';
import sizeConfigs from '../../configs/sizeConfigs';
import Sidebar from '../common/Sidebar';
import Topbar from '../common/Topbar';

const MainLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Topbar />
            <Box
                component="nav"
                sx={{
                    flexShrink: 0,
                    width: sizeConfigs.sidebar.width,
                }}
            >
                <Sidebar />
            </Box>
            <Box
                component="main"
                sx={{
                    p: 3,
                    flexGrow: 1,
                    minHeight: '100vh',
                    width: `calc(100% - ${sizeConfigs.sidebar.width})`,
                    backgroundColor: colorConfigs.mainBg,
                }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayout;
