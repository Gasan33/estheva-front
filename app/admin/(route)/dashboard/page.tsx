import Chart from '@/components/admin/chart/chart'
import React from 'react'
import styles from "./dashboard.module.css"
import Transactions from '@/components/admin/transactions/transactions'
import TopBox from '@/components/admin/topBox/TopBox'
import ChartBox from '@/components/admin/chartBox/ChartBox'
import BarChartBox from '@/components/admin/barChartBox/BarChartBox'
import BigChartBox from '@/components/admin/bigChartBox/BigChartBox'
import PieChartBox from '@/components/admin/pieChartBox/PieChartBox'
import "./home.scss"
const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
        { name: "Sun", users: 400 },
        { name: "Mon", users: 600 },
        { name: "Tue", users: 500 },
        { name: "Wed", users: 700 },
        { name: "Thu", users: 400 },
        { name: "Fri", users: 500 },
        { name: "Sat", users: 450 },
    ],
}


const chartBoxService = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Services",
    number: "238",
    dataKey: "services",
    percentage: 21,
    chartData: [
        { name: "Sun", services: 400 },
        { name: "Mon", services: 600 },
        { name: "Tue", services: 500 },
        { name: "Wed", services: 700 },
        { name: "Thu", services: 400 },
        { name: "Fri", services: 500 },
        { name: "Sat", services: 450 },
    ],
}

const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$56.238",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
        { name: "Sun", revenue: 400 },
        { name: "Mon", revenue: 600 },
        { name: "Tue", revenue: 500 },
        { name: "Wed", revenue: 700 },
        { name: "Thu", revenue: 400 },
        { name: "Fri", revenue: 500 },
        { name: "Sat", revenue: 450 },
    ],
}


const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
        { name: "Sun", ratio: 400 },
        { name: "Mon", ratio: 600 },
        { name: "Tue", ratio: 500 },
        { name: "Wed", ratio: 700 },
        { name: "Thu", ratio: 400 },
        { name: "Fri", ratio: 500 },
        { name: "Sat", ratio: 450 },
    ],
}



const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        {
            name: "Sun",
            profit: 4000
        },
        {
            name: "Mon",
            profit: 3000
        },
        {
            name: "Tue",
            profit: 5000
        },
        {
            name: "Wed",
            profit: 2000
        },
        {
            name: "Thu",
            profit: 3500
        },
        {
            name: "Fri",
            profit: 2500
        },
        {
            name: "Sat",
            profit: 5000
        },
    ]
}


const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
        {
            name: "Sun",
            visit: 6000
        },
        {
            name: "Mon",
            visit: 3000
        },
        {
            name: "Tue",
            visit: 5000
        },
        {
            name: "Wed",
            visit: 2000
        },
        {
            name: "Thu",
            visit: 3500
        },
        {
            name: "Fri",
            visit: 2500
        },
        {
            name: "Sat",
            visit: 5000
        },
    ]
}
const Dashboard = () => {
    return (
        <div className="home">
            <div className="box box1 shadow-lg">
                <TopBox />
            </div>
            <div className="box box2 shadow-lg"><ChartBox {...chartBoxUser} /></div>
            <div className="box box3 shadow-lg"><ChartBox {...chartBoxService} /></div>
            <div className="box box4 shadow-lg"><PieChartBox /></div>
            <div className="box box5 shadow-lg"><ChartBox {...chartBoxConversion} /></div>
            <div className="box box6 shadow-lg"><ChartBox {...chartBoxRevenue} /></div>
            <div className="box box7"><BigChartBox /></div>
            <div className="box box8"><BarChartBox {...barChartBoxVisit} /></div>
            <div className="box box9"><BarChartBox {...barChartBoxRevenue} /></div>
        </div>
    )
}

export default Dashboard