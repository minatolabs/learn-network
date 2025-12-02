
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Menu, ChevronRight, Activity } from 'lucide-react';

const Layout = ({ curriculum, currentTopicId, onTopicSelect, children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <motion.div
                initial={{ width: 300 }}
                animate={{ width: isSidebarOpen ? 300 : 0 }}
                style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(20px)',
                    borderRight: '1px solid var(--border-color)',
                    overflow: 'hidden',
                    position: 'fixed',
                    height: '100vh',
                    zIndex: 100
                }}
            >
                <div style={{ padding: '20px', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Activity color="var(--primary)" />
                    <h2 style={{ margin: 0, fontSize: '1.2rem', color: 'white' }}>Net+ Master</h2>
                </div>

                <div style={{ padding: '20px', overflowY: 'auto', height: 'calc(100vh - 80px)' }}>
                    {curriculum.map((module) => (
                        <div key={module.id} style={{ marginBottom: '24px' }}>
                            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                                {module.title}
                            </h4>
                            {module.topics.map((topic) => (
                                <div
                                    key={topic.id}
                                    onClick={() => onTopicSelect(topic.id)}
                                    style={{
                                        padding: '10px 12px',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        marginBottom: '4px',
                                        background: currentTopicId === topic.id ? 'rgba(0, 242, 255, 0.1)' : 'transparent',
                                        color: currentTopicId === topic.id ? 'var(--primary)' : 'var(--text-main)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        transition: 'all 0.2s'
                                    }}
                                    className="nav-item"
                                >
                                    <span style={{ fontSize: '0.95rem' }}>{topic.title.split(':')[0]}</span>
                                    {currentTopicId === topic.id && <ChevronRight size={16} />}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Main Content */}
            <div style={{
                flex: 1,
                marginLeft: isSidebarOpen ? 300 : 0,
                transition: 'margin-left 0.3s',
                position: 'relative'
            }}>
                {/* Header */}
                <div style={{
                    padding: '20px 40px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    position: 'sticky',
                    top: 0,
                    zIndex: 90,
                    background: 'linear-gradient(to bottom, var(--bg-dark), transparent)'
                }}>
                    <button
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                    >
                        <Menu />
                    </button>
                    <div style={{ height: '1px', flex: 1, background: 'linear-gradient(to right, var(--border-color), transparent)' }}></div>
                </div>

                {/* Page Content */}
                <div style={{ padding: '20px 40px' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
