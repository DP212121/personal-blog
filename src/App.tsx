import './App.css';
import Header from './components/Header';
import BioSection from './components/BioSection';
import Timeline from './components/Timeline';
import ColorLegend from './components/ColorLegend';
import DeepDiveSection from './components/DeepDiveSection';
import BlogGrid from './components/BlogGrid';
import FooterBar from './components/FooterBar';

function App() {
  return (
    <div className="page-container">
      <Header />
      <BioSection />
      <Timeline />
      <ColorLegend />
      <DeepDiveSection />
      <BlogGrid />
      <FooterBar />
    </div>
  );
}

export default App;