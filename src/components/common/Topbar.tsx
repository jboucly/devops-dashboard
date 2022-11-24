import { AppBar, Toolbar, Typography } from '@mui/material';
import colorConfigs from '../../configs/colorConfigs';
import sizeConfigs from '../../configs/sizeConfigs';

const Topbar = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                boxShadow: 'unset',
                ml: sizeConfigs.sidebar.width,
                color: colorConfigs.topbar.color,
                backgroundColor: colorConfigs.topbar.bg,
                width: `calc(100% - ${sizeConfigs.sidebar.width})`,
            }}
        >
            <Toolbar>
                <Typography variant="h6">Devops dashboard</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;
