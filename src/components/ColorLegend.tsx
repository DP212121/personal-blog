const legend = [
    { label: 'Accounting', color: '#FF6347' },
    { label: 'Tech Projects', color: '#1E90FF' },
    { label: 'Markets', color: '#32CD32' }
  ];
  
  const ColorLegend = () => (
    <section className="section">
      <h4>Legend:</h4>
      {legend.map((item, idx) => (
        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '16px', height: '16px', backgroundColor: item.color }}></div>
          <span>= {item.label}</span>
        </div>
      ))}
    </section>
  );
  
  export default ColorLegend;