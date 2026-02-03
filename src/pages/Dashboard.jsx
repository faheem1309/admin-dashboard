import { useEffect, useState } from "react";
import { stats } from "../data/mockData";
import StatCard from "../components/StatCard";

export default function Dashboard() {
const [data, setData] = useState([]);
useEffect(() => {
        const timer = setTimeout(() => {
setData(stats);
}, 500);
return () => clearTimeout(timer);
}, []);

return (
<div className="dashboard">
{data.map((item, index) => (
<StatCard key={index} title={item.title} value={item.value} />
))}
</div>
);
}