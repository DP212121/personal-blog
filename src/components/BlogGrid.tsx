import { useState } from 'react';

type Post = {
    title: string;
    tags: string[];
    content: string;
  };

const posts = [
    { title: 'Why Python Clicked for Me', tags: ['Projects'], content: `I had tried Python a few times before, but it finally clicked when I automated a personal finance tracker...` },
    { title: 'Macro Thoughts Before Coffee', tags: ['Shower Thoughts'], content: `Markets don't care if you're tired — but your trades might show it...` },
    { title: 'Weekly Markets Recap', tags: ['Weekly Markets'], content: `This week saw volatility in oil, tech earnings surprises, and renewed speculation on interest rates...` }
  ];
  
const BlogGrid = () => {
  const [activePost, setActivePost] = useState<Post | null>(null);

  return (
    <section className="section">
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Blog</h2>

      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {posts.map((post, idx) => (
          <div
            key={idx}
            onClick={() => setActivePost(post)}
            style={{
              background: '#111',
              borderRadius: '8px',
              padding: '1rem',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1.0)')}
          >
            <h3>{post.title}</h3>
            <p style={{ fontSize: '0.8rem', color: '#ccc' }}>{post.tags.join(', ')}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activePost && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
          }}
          onClick={() => setActivePost(null)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#1a1a1a',
              color: 'white',
              padding: '2rem',
              borderRadius: '12px',
              maxWidth: '600px',
              maxHeight: '80vh',
              overflowY: 'auto',
              boxShadow: '0 0 30px rgba(0,0,0,0.5)',
            }}
          >
            <h2>{activePost.title}</h2>
            <p style={{ fontSize: '0.9rem', color: '#888' }}>{activePost.tags.join(', ')}</p>
            <div style={{ marginTop: '1.5rem', lineHeight: '1.6', fontSize: '1.1rem' }}>
              {activePost.content}
            </div>
            <button
              onClick={() => setActivePost(null)}
              style={{
                marginTop: '2rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#333',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
  
  export default BlogGrid;