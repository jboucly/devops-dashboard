import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import DashboardIndex from '../pages/dashboard/DashboardIndex';
import DashboardPageLayout from '../pages/dashboard/DashboardPageLayout';
import GraphPage from '../pages/dashboard/GraphPage';
import MetricsPage from '../pages/dashboard/MetricPage';
import HomePage from '../pages/home/HomePage';
import MonitoringPage from '../pages/monitoring/MonitoringPage';
import { RouteType } from './config';

const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage />,
        state: 'home',
    },
    {
        path: '/dashboard',
        element: <DashboardPageLayout />,
        state: 'dashboard',
        sidebarProps: {
            displayText: 'Dashboard',
            icon: <DashboardOutlinedIcon />,
        },
        child: [
            {
                index: true,
                element: <DashboardIndex />,
                state: 'dashboard.index',
            },
            {
                path: '/dashboard/graphs',
                element: <GraphPage />,
                state: 'dashboard.graphs',
                sidebarProps: {
                    displayText: 'Graphics',
                },
            },
            {
                path: '/dashboard/metrics',
                element: <MetricsPage />,
                state: 'dashboard.metrics',
                sidebarProps: {
                    displayText: 'Metrics',
                },
            },
        ],
    },
    {
        path: 'monitoring',
        state: 'monitoring',
        element: <MonitoringPage />,
        sidebarProps: {
            displayText: 'Monitoring',
            icon: <MonitorHeartOutlinedIcon />,
        },
    },
];

export default appRoutes;
