import { useState } from 'react';

type Post = {
    title: string;
    tags: string[];
    content: string;
  };

const posts = [
    { title: 'Renaissance Man', tags: ['Shower Thoughts'], content: `Will we see fewer Renaissance Men over time?
      
      There has been a long established desire from the Renaissance era centuries ago, especially present now in certain Asian cultures, to be a person of many talents and skills, in today's age this generally means parents urging their children to pick up an instrument, participate in a sport, and pursue a hard sciences/mathematics formal education. The ultimate goal is that by having this breadth of excellence, you will be a more learned individual while also remaining curious through multi-faceted experiences.
      
      A lot of these activities aren't pursued in tandem with each other by adults today, due to the need of deep specialization; many services and businesses feel much more commoditized due to globalization and rapid increases in convenience for accessing products i.e. if you created a journal or gazette today, if it doesn't appeal to readers as much as one created over 4000 km away, you're out of luck, even despite the difference. Therefore, it takes much more effort not just to get the word out about your product but also to make it the best anywhere on the globe.
      
      Further to this, the activites that we do end up pursuing feel broadly inefficient doing them yourself when you can leverage machine learning or AI tools - why write this myself when I can get it done much faster with a quick AI prompt that may very well use more concice wording than what I've come up with? And so we inevitably will end up using AI for many inconveniences to us to make the final product better and faster made.
      
      The issue is that in doing this, we lose touch with the craft needed to make the product, and going back to the first concept, the huge benefit we enjoy as a byproduct of doing something new, growing our curiosity and breadth of knowledge, is gone or at least diluted. I heavily used AI to create much of this website and it has probably deprived me of much learning and I might've even been curious to further applications in a website if I handcrafted it (though it would've taken much more time to do so).
      
      So then do we just ditch AI and do everything from scratch? I honestly don't know if that's the answer either, because AI tools may help ease you into a subject or task that needs an overwhelming amount of foundational info and it may give you a good starting place.
      
      I'm still trying to figure out where AI will fit in with the modern Renaissance Man, if at all. We're all trying to figure out if we will need Renaissance Men in the future or if humans will need not apply. Will the use of AI tools allow us to bring back the ideal of being a polymath by giving us a headstart on every subject we ask it? Will it destroy our neural muscle and thirst for curiosity by spoonfeeding us the answer in a matter of seconds without us ever needing to ask a real person for the answer, or try to reason with ourselves to create one on our own? 
      
      For now, the only constant seems to be that curiosity in any form is something to be nurtured. Maybe that is the modern Renaissance Man's boiled-down playbook.`
     },
    { title: 'HOI4 Modding - Update', tags: ['Projects'], content: `Tried creating a major overhaul mod borrowing from Magna Europa's expanded map, but it proved to be too difficult to fully implement due to unpackaging problems with the mod code itself. I've also realized that HOI4 is set up in a way where it would take a very long time for a single person to edit certain fundamental aspects of the game like ideology - everything is done in text files and there's thousands of them littered across the game files. Scripts are possible but the consequence is you'll be streamlining how countries look when it feels nicer to specialize the details on each nation. Will begin working on a much more scaled down version of a mod so I can finish it in a reasonable time window.

      Update 1: I've moved over to optimizing current existing mods on the Steam market and tailoring them a bit better to suit reality, e.g. there's a GDP window mod that is supposed to be an accurate tracker of how each country's economy is doing... I think there are much better variables that can be used to make it a more faithful representation of what is happening in the game, but the UI looks nice so I will borrow it. I'll also create a separate subsection beyond features within other mods to make it feel a bit more like my own but also because there's a lot I'm hoping to do with HOI4's decisions and national focus mechanics. My goal at the end is to create a game start scenario where France is fractured into duchies which all hang in the balance of integration with the Parisian government, war, or subjugation by larger neighbors - variables are relation and economy based and will be decided in more detail later.
      
      Current thoughts: this has been a pretty fun passion project so far. I enjoy the feeling of creating something, even if it's small and won't be seen by many (if you want to see it yourself, "Crown's Twilight" on Steam workshop). It's been pretty cool seeing exactly how everything in the game works and functions, and how other modmakers interpreted what tools they have to work with to create custom game scenarios - I've seen some pretty creative things! Not sure how much more time I'll commit to this, I do want to learn about the macro side of markets over the Summer but I'll keep the project on the side.`
     },
    { title: 'Productive Procrastination', tags: ['Shower Thoughts'], content: `I've noticed that a lot of the time, when I feel like I have enough immediate capacity to take on something that could make for a good learning experience or prepare me better for the future (through better employability, cash flow etc.), my mind gravitates towards getting the groundwork done... and then staying on that loop seemingly forever as it's a comfortable spot to be in. One foot in and one foot out. 
      
      
      Setting out and trying to be productive is a great effort, but there is this persistent trap of productive procrastination that seems to follow closely. If you're always passively learning by reading material and creating lists of things you're going to do to get to the final goal, but not taking the really tough experimental steps, you end up missing out on 90% of the learning and benefit. 
      
      
      Long story short, what seems to work for me best (and what other friends have told me works for them too) is keeping the planning phase as short as possible and ideally, all you'll be planning is which tasks are the most approachable ones to do first, so you can gather momentum to get to the big stuff later. 
      
      
      Ignore what other people are doing in this very moment. They might be getting slam dunks because they're already in motion. What's important for you is to start running so you can set yourself up to catch the ball the next time it comes.` },
    { title: 'Weekly Markets Recap', tags: ['Weekly Markets'], content: `This is a placeholder, I'll be updating this section with my ideas on how the weekly market changes meshed with my macro views.` }
  ];
  
const BlogGrid = () => {
  const [activePost, setActivePost] = useState<Post | null>(null);

  return (
    <section className="section">
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Thoughts</h2>

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
              {activePost.content.split('\n').map((line, idx) => (
                <p key={idx} style={{ marginBottom: '1rem' }}>{line}</p>
              ))}
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