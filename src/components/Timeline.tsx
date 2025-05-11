const timeline = [
    { date: '2024', text: 'Filed taxes for 27 small businesses', color: '#FF6347' },
    { date: '2023', text: 'Built a crypto dashboard in Python', color: '#1E90FF' },
    { date: '2022', text: 'Tracked global oil prices just for fun', color: '#32CD32' }
  ];
  
  const Timeline = () => (
    <section className="section">
      <h2>Timeline</h2>
      <div style={{ borderLeft: '2px solid #666', paddingLeft: '1rem' }}>
        {timeline.map((item, idx) => (
          <div key={idx} style={{ marginBottom: '1.5rem' }}>
            <div style={{ color: '#aaa', fontSize: '0.85rem' }}>{item.date}</div>
            <div style={{ backgroundColor: item.color, padding: '0.5rem', borderRadius: '4px' }}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Timeline;