export default function ChartCard({ title, value, trend, data, accent }) {
return (
<div className="chart-card">
<div className="chart-header">
<div>
<h4>{title}</h4>
<p className="chart-value">{value}</p>
</div>
<span className="chart-trend">{trend}</span>
</div>
<div className={`chart chart-${accent}`}>
{data.map((point, index) => (
<span
key={`${title}-${index}`}
className="bar"
style={{ height: `${point * 8}px` }}
/>
))}
</div>
</div>
);
}
