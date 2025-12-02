
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';

const QuizView = ({ quiz }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleOptionClick = (index) => {
        if (isSubmitted) return;
        setSelectedOption(index);
    };

    const handleSubmit = () => {
        if (selectedOption === null) return;
        setIsSubmitted(true);
    };

    const isCorrect = selectedOption === quiz.correctAnswer;

    return (
        <div className="glass-panel" style={{ marginTop: '2rem', borderTop: '4px solid var(--secondary)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <HelpCircle size={20} color="var(--secondary)" />
                Knowledge Check
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'white' }}>{quiz.question}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {quiz.options.map((option, index) => {
                    let backgroundColor = 'rgba(255,255,255,0.05)';
                    let borderColor = 'transparent';

                    if (isSubmitted) {
                        if (index === quiz.correctAnswer) {
                            backgroundColor = 'rgba(0, 255, 157, 0.2)';
                            borderColor = 'var(--success)';
                        } else if (index === selectedOption && index !== quiz.correctAnswer) {
                            backgroundColor = 'rgba(255, 0, 85, 0.2)';
                            borderColor = 'var(--error)';
                        }
                    } else if (selectedOption === index) {
                        backgroundColor = 'rgba(0, 242, 255, 0.1)';
                        borderColor = 'var(--primary)';
                    }

                    return (
                        <motion.div
                            key={index}
                            onClick={() => handleOptionClick(index)}
                            whileHover={!isSubmitted ? { scale: 1.01, backgroundColor: 'rgba(255,255,255,0.1)' } : {}}
                            whileTap={!isSubmitted ? { scale: 0.99 } : {}}
                            style={{
                                padding: '16px',
                                borderRadius: '8px',
                                cursor: isSubmitted ? 'default' : 'pointer',
                                backgroundColor,
                                border: `1px solid ${borderColor}`,
                                transition: 'background-color 0.3s',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <span>{option}</span>
                            {isSubmitted && index === quiz.correctAnswer && <CheckCircle size={20} color="var(--success)" />}
                            {isSubmitted && index === selectedOption && index !== quiz.correctAnswer && <XCircle size={20} color="var(--error)" />}
                        </motion.div>
                    );
                })}
            </div>

            {!isSubmitted ? (
                <motion.button
                    className="btn btn-primary"
                    style={{ marginTop: '20px', width: '100%' }}
                    onClick={handleSubmit}
                    disabled={selectedOption === null}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Check Answer
                </motion.button>
            ) : (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        style={{ marginTop: '20px', overflow: 'hidden' }}
                    >
                        <div style={{
                            padding: '16px',
                            borderRadius: '8px',
                            background: isCorrect ? 'rgba(0, 255, 157, 0.1)' : 'rgba(255, 0, 85, 0.1)',
                            borderLeft: `4px solid ${isCorrect ? 'var(--success)' : 'var(--error)'}`
                        }}>
                            <h4 style={{ color: isCorrect ? 'var(--success)' : 'var(--error)', marginBottom: '8px' }}>
                                {isCorrect ? 'Correct!' : 'Incorrect'}
                            </h4>
                            <p style={{ color: 'white', fontSize: '0.95rem' }}>{quiz.explanation}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
};

export default QuizView;
