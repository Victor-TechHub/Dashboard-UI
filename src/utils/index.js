import { FaChartPie } from "react-icons/fa";
import { RiBarChartLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { IoBagHandleOutline, IoCart } from "react-icons/io5";
import { AiOutlineLineChart } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import { MdOutlineSettingsSuggest, MdPeople, MdStackedBarChart } from "react-icons/md";
import { RxExit } from "react-icons/rx";

export const SideBarLinks = [
    { name: "Dashboard", icon: FaChartPie },
    { name: "Leaderboard", icon: RiBarChartLine },
    { name: "Order", icon: FiShoppingCart },
    { name: "Products", icon: IoBagHandleOutline },
    { name: "Sales Report", icon: AiOutlineLineChart },
    { name: "Messages", icon: TiMessages },
    { name: "Settings", icon: MdOutlineSettingsSuggest },
    { name: "Sign Out", icon: RxExit },
]

export const sales = [
    {
        name: "Total Sales",
        amount: 1,
        increase: 15,
        accent: "hsl(350, 100%, 88%)",
        accentLight: "hsl(350, 100%, 88%, 0.230)",
        icon: MdStackedBarChart
    },
    {
        name: "Total Order",
        amount: 300,
        increase: 9,
        accent: "hsl(47, 94%, 49%)",
        accentLight: "hsl(47, 94%, 49%, 0.230)",
        icon: IoCart
    },
    {
        name: "Product Sold",
        amount: 5,
        increase: 12,
        accent: "hsl(120, 90%, 36%)",
        accentLight: "hsl(120, 90%, 36%, 0.230)",
        icon: AiOutlineLineChart
    },
    {
        name: "New Customers",
        amount: 8,
        increase: 8.5,
        accent: "hsl(270, 50%, 40%)",
        accentLight: "hsl(270, 50%, 40%, 0.230)",
        icon: MdPeople
    }
]