
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import LessonView from './components/LessonView';
import { curriculum } from './data/curriculum';
import './styles/index.css';

function App() {
  // Flatten topics for easier access
  const allTopics = curriculum.flatMap(module => module.topics);
  const [currentTopicId, setCurrentTopicId] = useState(allTopics[0].id);

  const currentTopic = allTopics.find(t => t.id === currentTopicId);

  // Scroll to top on topic change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentTopicId]);

  return (
    <div className="app-container">
      <Layout
        curriculum={curriculum}
        currentTopicId={currentTopicId}
        onTopicSelect={setCurrentTopicId}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '20px' }}>
          <LessonView topic={currentTopic} />

          {/* Navigation Footer */}
          <div style={{
            marginTop: '60px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            {/* Logic for Prev/Next buttons could go here */}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
