
import React from 'react';
import { motion } from 'framer-motion';
import QuizView from './QuizView';
import DiagramView from './DiagramView';

const LessonView = ({ topic }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lesson-container"
        >
            <div className="lesson-grid">
                {/* Left Column: Educational Content */}
                <div className="content-column">
                    <div className="glass-panel">
                        <h2 className="lesson-title">{topic.title}</h2>
                        <div
                            className="lesson-body"
                            dangerouslySetInnerHTML={{ __html: topic.content }}
                        />
                    </div>
                </div>

                {/* Right Column: Visuals & Quiz */}
                <div className="interactive-column">
                    {/* 1. Animated Diagram (if exists) */}
                    {topic.diagram && (
                        <div className="diagram-wrapper">
                            <DiagramView type={topic.diagram} />
                        </div>
                    )}

                    {/* 2. Interactive Quiz */}
                    {topic.quiz && (
                        <div className="quiz-wrapper">
                            <QuizView key={topic.id} quiz={topic.quiz} />
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default LessonView;
