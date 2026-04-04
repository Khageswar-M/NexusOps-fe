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

export const rolesItem = [
    {
        title: "All Roles",
        desc: "Strategic business leadership",
        color: "gray",
        textCol: "text-gray-500",
        bgCol: "bg-gray-500/10",
        borderCol: "border-gray-500",
        Icon: CEO
    },
    {
        title: "Admin",
        desc: "System and user management",
        color: "blue",
        textCol: "text-blue-500",
        bgCol: "bg-blue-500/10",
        borderCol: "border-blue-500",
        Icon: Admin
    },
    {
        title: "Manager",
        desc: "Team and task supervision",
        color: "orange",
        textCol: "text-orange-500",
        bgCol: "bg-orange-500/10",
        borderCol: "border-orange-500",
        Icon: Manager
    },
    {
        title: "Viewer",
        desc: "Read-only data access",
        color: "purple",
        textCol: "text-purple-500",
        bgCol: "bg-purple-500/10",
        borderCol: "border-purple-500",
        Icon: Viewer
    },
    {
        title: "Developer",
        desc: "Builds and maintains code",
        color: "cyan",
        textCol: "text-cyan-500",
        bgCol: "bg-cyan-500/10",
        borderCol: "border-cyan-500",
        Icon: Developer
    },
    {
        title: "QA Tester",
        desc: "Software quality assurance",
        color: "emerald",
        textCol: "text-emerald-500",
        bgCol: "bg-emerald-500/10",
        borderCol: "border-emerald-500",
        Icon: QATester
    },
    {
        title: "DevOps",
        desc: "Deployment and infrastructure management",
        color: "indigo",
        textCol: "text-indigo-500",
        bgCol: "bg-indigo-500/10",
        borderCol: "border-indigo-500",
        Icon: Devops

    },
    {
        title: "Tester",
        desc: "Functional testing and validation",
        color: "pink",
        textCol: "text-pink-500",
        bgCol: "bg-pink-500/10",
        borderCol: "border-pink-500",
        Icon: Tester
    },
    {
        title: "UI/UX",
        desc: "User interface and experience design",
        color: "amber",
        textCol: "text-amber-500",
        bgCol: "bg-amber-500/10",
        borderCol: "border-amber-500",
        Icon: Designer
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
]