// Step 1: Define the type
type TimelineEntry = {
  month: string;
  text: string;
  color?: string;
  gradient?: [string, string];
};

// Step 2: Define the grouped timeline object
const timeline: Record<string, TimelineEntry[]> = {
  "2025": [
    { month: 'May', text: 'Launched this site', color: '#1E90FF' },
    { month: 'May', text: 'Started Dev\'ing a Hearts of Iron IV mod (Planning to release by end of Summer)', color: '#1E90FF' },
    { month: 'Jan-March', text: 'Interned at a major Canadian bank on the trading floor, also helped team automate daily workflow', gradient: ['#32CD32', '#1E90FF'] }
  ],
  "2024": [
    { month: 'Sept-Dec', text: 'Second Big4 Accounting Firm Internship, earmarked promotion to F2', color: '#FF6347' },
    { month: 'May-Sept', text: 'Micro search fund intern, developed investment theses & automated collection/organization of sales data', gradient: ['#32CD32', '#1E90FF'] },
    { month: 'Jan-May', text: 'First Big4 Accounting Firm Internship, busy season months (painful workweeks for those that know)', color: '#FF6347' }
  ],
  "2023": [
    { month: 'May-Dec', text: 'VP of Ontario\'s largest accounting conference; created and pitched sponsorship plan to company execs, created TTC case content w/ data given by management', color: '#FF6347' },
    { month: 'Apr-Dec', text: 'VP of largest club on campus, worked with faculty and dep\'t to create events for business students on campus (total attendance >500)', color: '#708090' },
    { month: 'Feb-Dec', text: 'Analyst at campus fund, created slide deck and pitched two companies in Natural Resources field that were both accepted and earned strong ROI (ARC +19% Nov 2023-24, FNV +40% Apr 2024-2025)', color: '#32CD32' }
  ],
  "Pre-2023": [
    { month: '', text: 'VP of student team at JA Central Ontario, our designed appliance achieved >200% ROI', color: '#708090' },
    { month: '', text: 'Exec at our High School\'s business SHSM branch - set up an investment curriculum and stock market challenge that was widely adopted', color: '#32CD32' },
  ]
};

// Step 3: Component logic
const Timeline = () => (
  <section className="section">
    <h2>My Timeline</h2>
    <div style={{ borderLeft: '2px solid #666', paddingLeft: '1rem' }}>
      {Object.keys(timeline)
        .sort((a, b) => {
          if (a === 'Pre-2023') return 1;
          if (b === 'Pre-2023') return -1;
          return Number(b) - Number(a);
        })
        .map(year => (
          <div key={year} style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              {year}
            </div>
            {timeline[year].map((item, idx) => (
              <div key={idx} style={{ marginBottom: '1rem', paddingLeft: '1rem' }}>
                {item.month && (
                  <div style={{ color: '#aaa', fontSize: '0.85rem' }}>{item.month}</div>
                )}
                <div
                  style={{
                    background: item.gradient
                      ? `linear-gradient(90deg, ${item.gradient[0]} 50%, ${item.gradient[1]} 50%)`
                      : item.color || '#333',
                    padding: '0.5rem',
                    borderRadius: '4px',
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  </section>
);

export default Timeline;