import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('../../pages/AsideTabs/Dashboard'));
const UserManagement = lazy(() => import('../../pages/AsideTabs/UserManagement'));
const DataAnalytics = lazy(() => import('../../pages/AsideTabs/DataAnalytics'));
const Reports = lazy(() => import('../../pages/AsideTabs/Reports'));
const TaskAutomation = lazy(() => import('../../pages/AsideTabs/TaskAutomation'));
const SystemSettings = lazy(() => import('../../pages/AsideTabs/SystemSettings'));

const UserList = lazy(() => import('../../pages/UserManagementSubTabs/UserList'));
const AddUser = lazy(() => import('../../pages/UserManagementSubTabs/AddUser'));
const RolesPermissions = lazy(() => import('../../pages/UserManagementSubTabs/RolesPermissions'));
const ActivityLogsAny = lazy(() => import('../../pages/UserManagementSubTabs/ActivityLogs'));
const UserAnalytics = lazy(() => import('../../pages/UserManagementSubTabs/UserAnalytics'));

import NotificationPanel from '../Notification/NotificationPanel';
import Loading from '../../components/Loading';
import ErrorBoundary from '../../components/ErrorBoundary';


const HeroScreen = () => {
    return (
        <div className="rounded-md h-full overflow-y-auto">
                <Suspense fallback={<Loading />}>
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
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/task-automation" element={<TaskAutomation />} />
                        <Route path="/system-settings" element={<SystemSettings />} />
                    </Routes>
                </Suspense>

            {/* Global Modal */}
            <NotificationPanel />

        </div>
    )
}

export default HeroScreen;