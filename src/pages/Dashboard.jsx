import { useEffect, useState } from "react";
import { charts, stats } from "../data/mockData";
import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";

export default function Dashboard() {
const [statData, setStatData] = useState([]);
const [chartData, setChartData] = useState([]);
useEffect(() => {
        const timer = setTimeout(() => {
setStatData(stats);
setChartData(charts);
}, 500);
return () => clearTimeout(timer);
}, []);

return (
<div className="dashboard">
<div className="dashboard-stats">
{statData.map((item, index) => (
<StatCard key={index} title={item.title} value={item.value} />
))}
</div>
<div className="dashboard-charts">
{chartData.map((item, index) => (
<ChartCard
key={index}
title={item.title}
value={item.value}
trend={item.trend}
data={item.data}
accent={item.accent}
/>
))}
</div>
</div>
);
}
