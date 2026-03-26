import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from '../../pages/AsideTabs/Dashboard';
import UserManagement from '../../pages/AsideTabs/UserManagement';
import DataAnalytics from '../../pages/AsideTabs/DataAnalytics';
import Reports from '../../pages/AsideTabs/Reports';
import TaskAutomation from '../../pages/AsideTabs/TaskAutomation';
import SystemSettings from '../../pages/AsideTabs/SystemSettings';

import UserList from '../../pages/UserManagementSubTabs/UserList';
import AddUser from '../../pages/UserManagementSubTabs/AddUser';
import RolesPermissions from '../../pages/UserManagementSubTabs/RolesPermissions';
import ActivityLogsAny from '../../pages/UserManagementSubTabs/ActivityLogs';
import UserAnalytics from '../../pages/UserManagementSubTabs/UserAnalytics';

import NotificationPanel from '../Notification/NotificationPanel';

const HeroScreen = () => {
    return (
        <div className="rounded-md h-full overflow-y-auto">
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/user-management" element={<UserManagement />}>
                    <Route index element={<Navigate to="user-list" replace />} />
                    <Route path="user-list" element={<UserList />} />
                    <Route path="add-user" element={<AddUser />} />
                    <Route path="roles-permissions" element={<RolesPermissions />} />
                    <Route path="activity-logs" element={<ActivityLogsAny />} />
                    <Route path="user-analytics" element={<UserAnalytics />} />
                </Route>

                <Route path="/data-analytics" element={<DataAnalytics />} />
                <Route path="/reports" element={<Reports/>}/>
                <Route path="/task-automation" element={<TaskAutomation />} />
                <Route path="/system-settings" element={<SystemSettings />} />
            </Routes>

            {/* Global Modal */}
            <NotificationPanel/>
        </div>
    )
}

export default HeroScreen;