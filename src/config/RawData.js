import { GiLaurelCrown as CEO } from "react-icons/gi";
import { GrUserAdmin as Admin } from "react-icons/gr";
import { GrUserManager as Manager } from "react-icons/gr";
import { FaUsersViewfinder as Viewer } from "react-icons/fa6";
import { MdOutlineDeveloperMode as Developer } from "react-icons/md";
import { SiSpeedtest as QATester } from "react-icons/si";
import { VscAzureDevops as Devops } from "react-icons/vsc";
import { SiTestcafe as Tester } from "react-icons/si";
import { SiVorondesign as Designer } from "react-icons/si";

import { IoBalloonSharp as AllStatus } from "react-icons/io5";
import { MdAirplanemodeActive as Active, MdAirplanemodeInactive as Inactive } from "react-icons/md";
import { TbLockCog as Suspend } from "react-icons/tb";

// Log Types
import AllEventIcon from '../assets/AllEventsIcon.svg?react';
import AllActions from '../assets/AllActions.svg?react';
import LoginIcon from '../assets/LoginIcon.svg?react';
import LogoutIcon from '../assets/LogoutIcon.svg?react';
import UpdateIcon from '../assets/UpdateIcon.svg?react';
import SecurityIcon from '../assets/SecurityIcon.svg?react';


export const rolesItem = [
    {
        title: "All Roles",
        desc: "Strategic business leadership",
        color: "gray",
        textCol: "text-gray-500",
        bgCol: "bg-gray-500/10",
        borderCol: "border-gray-500",
        Icon: CEO,
        users: 13
    },
    {
        title: "Admin",
        desc: "System and user management",
        color: "blue",
        textCol: "text-blue-500",
        bgCol: "bg-blue-500/10",
        borderCol: "border-blue-500",
        Icon: Admin,
        users: 30
    },
    {
        title: "Manager",
        desc: "Team and task supervision",
        color: "orange",
        textCol: "text-orange-500",
        bgCol: "bg-orange-500/10",
        borderCol: "border-orange-500",
        Icon: Manager,
        users: 40
    },
    {
        title: "Viewer",
        desc: "Read-only data access",
        color: "purple",
        textCol: "text-purple-500",
        bgCol: "bg-purple-500/10",
        borderCol: "border-purple-500",
        Icon: Viewer,
        users: 200
    },
    {
        title: "Developer",
        desc: "Builds and maintains code",
        color: "cyan",
        textCol: "text-cyan-500",
        bgCol: "bg-cyan-500/10",
        borderCol: "border-cyan-500",
        Icon: Developer,
        users: 4000
    },
    {
        title: "QA Tester",
        desc: "Software quality assurance",
        color: "emerald",
        textCol: "text-emerald-500",
        bgCol: "bg-emerald-500/10",
        borderCol: "border-emerald-500",
        Icon: QATester,
        users: 7000
    },
    {
        title: "DevOps",
        desc: "Deployment and infrastructure management",
        color: "indigo",
        textCol: "text-indigo-500",
        bgCol: "bg-indigo-500/10",
        borderCol: "border-indigo-500",
        Icon: Devops,
        users: 545

    },
    {
        title: "Tester",
        desc: "Functional testing and validation",
        color: "pink",
        textCol: "text-pink-500",
        bgCol: "bg-pink-500/10",
        borderCol: "border-pink-500",
        Icon: Tester,
        users: 8753
    },
    {
        title: "UI/UX",
        desc: "User interface and experience design",
        color: "amber",
        textCol: "text-amber-500",
        bgCol: "bg-amber-500/10",
        borderCol: "border-amber-500",
        Icon: Designer,
        users: 3465
    },
];

export const statusItem = [
    {
        title: "All Status",
        desc: "Can't do anything",
        color: "cyan",
        textCol: "text-cyan-500",
        bgCol: "bg-cyan-500/10",
        borderCol: "border-cyan-500",
        Icon: AllStatus
    },
    {
        title: "Active",
        desc: "Can login immediately",
        color: "green",
        textCol: "text-emerald-500",
        bgCol: "bg-emerald-500/10",
        borderCol: "border-emerald-500",
        Icon: Active
    },
    {
        title: "Inactive",
        desc: "Login disabled",
        color: "gray",
        textCol: "text-gray-500",
        bgCol: "bg-gray-500/10",
        borderCol: "border-gray-500",
        Icon: Inactive
    },
    {
        title: "Suspended",
        desc: "Unable to login",
        color: "red",
        textCol: "text-red-500",
        bgCol: "bg-red-500/10",
        borderCol: "border-red-500",
        Icon: Suspend
    },
];

export const logTypes = [
    {
        title: "All Actions",
        textCol: "text-gray-500",
        bgCol: "bg-yellow-500/20",
        Icon: AllActions,
        counts: 1700,
        col: "gray",
        border: "border-gray-500"
    },
    {
        title: "Logins",
        textCol: "text-green-500",
        bgCol: "bg-green-500/20",
        Icon: LoginIcon,
        counts: 700,
        col: "green",
        border: "border-green-500"
    },
    {
        title: "Logouts",
        textCol: "text-red-500",
        bgCol: "bg-red-500/20",
        Icon: LogoutIcon,
        counts: 400,
        col: "red",
        border: "border-red-500"

    },
    {
        title: "Updates",
        textCol: "text-orange-500",
        bgCol: "bg-orange-500/20",
        Icon: UpdateIcon,
        counts: 300,
        col: "orange",
        border: "border-orange-500"
    },
    {
        title: "Security Alerts",
        textCol: "text-yellow-500",
        bgCol: "bg-yellow-500/20",
        Icon: SecurityIcon,
        counts: 400,
        col: "yellow",
        border: "border-yellow-500"
    },
]

export const eventLogs = [
    {
        user: {
            name: "User One",
            role: "Operator"
        },
        email: "userone@gmail.com",
        action: {
            title: "Login",
            bgCol: "bg-green-500/20",
            textCol: "text-green-500",
            border: "border-green-500",
            col: "green"
        },
        description: {
            desc: "Successful login via web",
            subDesc: "Session #S-10456 Chrome 123"
        },
        ipaddress: "192.168.1.43",
        timestamp: {
            day: "Apr 23, 2024",
            time: "10:45 AM"
        }
    },
    {
        user: {
            name: "User Two",
            role: "Manager"
        },
        email: "usertwo@gmail.com",
        action: {
            title: "Update",
            bgCol: "bg-orange-500/20",
            textCol: "text-orange-500",
            border: "border-orange-500",
            col: "orange"
        },
        description: {
            desc: "Updated user permissions",
            subDesc: "Target: User one Role changed"
        },
        ipaddress: "192.168.1.43",
        timestamp: {
            day: "Apr 23, 2024",
            time: "10:45 AM"
        }
    },
    {
        user: {
            name: "User Three",
            role: "Admin"
        },
        email: "userthree@gmail.com",
        action: {
            title: "Logout",
            bgCol: "bg-red-500/20",
            textCol: "text-red-500",
            border: "border-red-500",
            col: "red"
        },
        description: {
            desc: "Session ended - user logout",
            subDesc: "Session duration: 3hr 42m"
        },
        ipaddress: "192.168.1.43",
        timestamp: {
            day: "Apr 23, 2024",
            time: "10:45 AM"
        }
    },
    {
        user: {
            name: "User Four",
            role: "Manager"
        },
        email: "userfour@gmail.com",
        action: {
            title: "Login",
            bgCol: "bg-green-500/20",
            textCol: "text-green-500",
            border: "border-green-500",
            col: "green"
        },
        description: {
            desc: "Successful login via mobile",
            subDesc: "Session #s-34353 ios Safari"
        },
        ipaddress: "192.168.1.43",
        timestamp: {
            day: "Apr 23, 2024",
            time: "10:45 AM"
        }
    },
    {
        user: {
            name: "User Five",
            role: "Viewer"
        },
        email: "userfive@gmail.com",
        action: {
            title: "Security",
            bgCol: "bg-yellow-500/20",
            textCol: "text-yellow-500",
            border: "border-yellow-500",
            col: "yellow"
        },
        description: {
            desc: "Failed login - 3 attempts",
            subDesc: "Account temporarily locked"
        },
        ipaddress: "192.168.1.43",
        timestamp: {
            day: "Apr 23, 2024",
            time: "10:45 AM"
        }
    },
    {
        user: {
            name: "User Five",
            role: "Viewer"
        },
        email: "userfive@gmail.com",
        action: {
            title: "Security",
            bgCol: "bg-yellow-500/20",
            textCol: "text-yellow-500",
            border: "border-yellow-500",
            col: "yellow"
        },
        description: {
            desc: "Failed login - 3 attempts",
            subDesc: "Account temporarily locked"
        },
        ipaddress: "192.168.1.43",
        timestamp: {
            day: "Apr 23, 2024",
            time: "10:45 AM"
        }
    },
    {
        user: {
            name: "User Five",
            role: "Viewer"
        },
        email: "userfive@gmail.com",
        action: {
            title: "Security",
            bgCol: "bg-yellow-500/20",
            textCol: "text-yellow-500",
            border: "border-yellow-500",
            col: "yellow"
        },
        description: {
            desc: "Failed login - 3 attempts",
            subDesc: "Account temporarily locked"
        },
        ipaddress: "192.168.1.43",
        timestamp: {
            day: "Apr 23, 2024",
            time: "10:45 AM"
        }
    },
    {
        user: {
            name: "User Five",
            role: "Viewer"
        },
        email: "userfive@gmail.com",
        action: {
            title: "Security",
            bgCol: "bg-yellow-500/20",
            textCol: "text-yellow-500",
            border: "border-yellow-500",
            col: "yellow"
        },
        description: {
            desc: "Failed login - 3 attempts",
            subDesc: "Account temporarily locked"
        },
        ipaddress: "192.168.1.43",
        timestamp: {
            day: "Apr 23, 2024",
            time: "10:45 AM"
        }
    },
    {
        user: {
            name: "User Five",
            role: "Viewer"
        },
        email: "userfive@gmail.com",
        action: {
            title: "Security",
            bgCol: "bg-yellow-500/20",
            textCol: "text-yellow-500",
            border: "border-yellow-500",
            col: "yellow"
        },
        description: {
            desc: "Failed login - 3 attempts",
            subDesc: "Account temporarily locked"
        },
        ipaddress: "192.168.1.43",
        timestamp: {
            day: "Apr 23, 2024",
            time: "10:45 AM"
        }
    },

]

export const activeUsers = [
    { id: 1, name: "John Smith", role: "Admin", score: 284 },
    { id: 2, name: "Ashley Davis", role: "User", score: 213 },
    { id: 3, name: "Michael Brown", role: "Operator", score: 198 },
    { id: 4, name: "Emma Wilson", role: "Admin", score: 260 },
    { id: 5, name: "Olivia Taylor", role: "User", score: 175 },
    { id: 6, name: "James Anderson", role: "User", score: 240 },
    { id: 7, name: "Sophia Thomas", role: "Operator", score: 190 },
    { id: 8, name: "William Jackson", role: "Admin", score: 300 },
    { id: 9, name: "Isabella White", role: "User", score: 210 },
    { id: 10, name: "Daniel Harris", role: "User", score: 150 },
    { id: 11, name: "Mia Martin", role: "Operator", score: 220 },
    { id: 12, name: "Ethan Thompson", role: "Admin", score: 275 },
    { id: 13, name: "Charlotte Garcia", role: "User", score: 165 },
    { id: 14, name: "Benjamin Martinez", role: "User", score: 205 },
    { id: 15, name: "Amelia Robinson", role: "Operator", score: 195 },
    { id: 16, name: "Lucas Clark", role: "Admin", score: 285 },
    { id: 17, name: "Harper Rodriguez", role: "User", score: 170 },
    { id: 18, name: "Henry Lewis", role: "User", score: 225 },
    { id: 19, name: "Evelyn Lee", role: "Operator", score: 200 },
    { id: 20, name: "Alexander Walker", role: "Admin", score: 290 }
];

export const COLOR_MAP = {
  gray: "#6B7280",
  blue: "#3B82F6",
  orange: "#F97316",
  purple: "#8B5CF6",
  cyan: "#06B6D4",
  emerald: "#10B981",
  indigo: "#6366F1",
  pink: "#EC4899",
  amber: "#F59E0B",
};

// Raw data for UserManagement -> User Analytics
export const roleDistribution = rolesItem.map((item) => ({
    name: item.title,
    value: item.users,
    col: item.color
}));