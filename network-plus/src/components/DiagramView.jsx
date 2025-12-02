import React from 'react';
import { motion } from 'framer-motion';

const DiagramView = ({ type }) => {
    if (!type) return null;

    const renderDiagram = () => {
        switch (type) {
            case 'encapsulation':
                return <EncapsulationDiagram />;
            case 'osi-layers':
                return <OsiLayersDiagram />;
            case 'topology-star':
            case 'topology-mesh':
            case 'topology-bus':
                return <TopologyDiagram type={type} />;
            case 'fiber-modes':
                return <FiberDiagram />;
            case 'tcp-handshake':
                return <TcpHandshakeDiagram />;
            case 'wifi-channels':
                return <WifiChannelsDiagram />;
            default:
                return <div className="p-4 text-center text-gray-500">Diagram not found: {type}</div>;
        }
    };

    return (
        <div className="diagram-container glass-panel" style={{ height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)', overflow: 'hidden', position: 'relative' }}>
            {renderDiagram()}
        </div>
    );
};

// ------------------------------------------------------------------
// 1. Encapsulation Diagram
// ------------------------------------------------------------------
const EncapsulationDiagram = () => {
    const steps = [
        { label: "Data", sub: "User Data", color: "#bd00ff" },
        { label: "Segment", sub: "TCP Header + Data", color: "#00f2ff" },
        { label: "Packet", sub: "IP Header + Segment", color: "#00ff9d" },
        { label: "Frame", sub: "MAC Header + Packet + FCS", color: "#ff0055" },
        { label: "Bits", sub: "101101001...", color: "#ffffff" },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '80%' }}>
            <h4 style={{ textAlign: 'center', marginBottom: '10px' }}>Visualizing Encapsulation</h4>
            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.5, duration: 0.5 }}
                    style={{
                        background: `linear-gradient(90deg, ${step.color}22, transparent)`,
                        borderLeft: `4px solid ${step.color}`,
                        padding: '10px',
                        borderRadius: '4px',
                        color: 'white',
                        position: 'relative'
                    }}
                >
                    <div style={{ fontWeight: 'bold' }}>{step.label}</div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{step.sub}</div>
                    {index > 0 && (
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ delay: index * 0.5 + 0.2, duration: 0.3 }}
                            style={{
                                position: 'absolute', top: 0, left: 0, bottom: 0,
                                border: `1px dashed ${step.color}`, borderRadius: '4px', pointerEvents: 'none'
                            }}
                        />
                    )}
                </motion.div>
            ))}
        </div>
    );
};

// ------------------------------------------------------------------
// 2. OSI Layers Diagram
// ------------------------------------------------------------------
const OsiLayersDiagram = () => {
    const layers = ["Application", "Presentation", "Session", "Transport", "Network", "Data Link", "Physical"];
    return (
        <div style={{ width: '100%', maxWidth: '300px' }}>
            {layers.map((layer, index) => (
                <motion.div
                    key={layer}
                    whileHover={{ scale: 1.05, x: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    style={{
                        padding: '8px 16px', margin: '4px 0', border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '4px', cursor: 'default', display: 'flex', justifyContent: 'space-between'
                    }}
                >
                    <span>Layer {7 - index}</span>
                    <strong style={{ color: 'var(--primary)' }}>{layer}</strong>
                </motion.div>
            ))}
        </div>
    );
};

// ------------------------------------------------------------------
// 3. Topology Diagram (Star, Mesh, Bus)
// ------------------------------------------------------------------
const TopologyDiagram = ({ type }) => {
    const nodes = [0, 1, 2, 3, 4];

    // Star: Center (0) connects to 1,2,3,4
    // Mesh: Everyone connects to everyone
    // Bus: Line connects 1-2-3-4

    return (
        <div style={{ position: 'relative', width: '300px', height: '300px' }}>
            <h4 style={{ textAlign: 'center', position: 'absolute', top: 0, width: '100%' }}>
                {type.replace('topology-', '').toUpperCase()} Topology
            </h4>

            {/* Central Hub for Star */}
            {type === 'topology-star' && (
                <motion.div
                    style={{
                        position: 'absolute', top: '50%', left: '50%', width: '40px', height: '40px',
                        background: 'var(--primary)', borderRadius: '50%', transform: 'translate(-50%, -50%)',
                        zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                >Hub</motion.div>
            )}

            {/* Nodes */}
            {nodes.map((i) => {
                const angle = (i * 72) * (Math.PI / 180);
                const radius = 100;
                const x = type === 'topology-bus' ? (i * 60) + 30 : 150 + Math.cos(angle) * radius;
                const y = type === 'topology-bus' ? 150 : 150 + Math.sin(angle) * radius;

                return (
                    <React.Fragment key={i}>
                        <motion.div
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }}
                            style={{
                                position: 'absolute', left: x, top: y, width: '20px', height: '20px',
                                background: 'var(--secondary)', borderRadius: '50%', transform: 'translate(-50%, -50%)', zIndex: 5
                            }}
                        />

                        {/* Connections */}
                        {type === 'topology-star' && (
                            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                                <motion.line
                                    x1="150" y1="150" x2={x} y2={y}
                                    stroke="rgba(255,255,255,0.3)" strokeWidth="2"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 + i * 0.1 }}
                                />
                            </svg>
                        )}

                        {type === 'topology-mesh' && nodes.map(j => {
                            if (i >= j) return null; // Avoid duplicates
                            const angleJ = (j * 72) * (Math.PI / 180);
                            const xJ = 150 + Math.cos(angleJ) * radius;
                            const yJ = 150 + Math.sin(angleJ) * radius;
                            return (
                                <svg key={`${i}-${j}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                                    <motion.line
                                        x1={x} y1={y} x2={xJ} y2={yJ}
                                        stroke="rgba(255,255,255,0.1)" strokeWidth="1"
                                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1 }}
                                    />
                                </svg>
                            );
                        })}
                    </React.Fragment>
                );
            })}

            {type === 'topology-bus' && (
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                    <motion.line
                        x1="30" y1="150" x2="270" y2="150"
                        stroke="white" strokeWidth="4"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    />
                </svg>
            )}
        </div>
    );
};

// ------------------------------------------------------------------
// 4. Fiber Modes Diagram
// ------------------------------------------------------------------
const FiberDiagram = () => {
    return (
        <div style={{ width: '100%', padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
                <h5 style={{ color: '#ffeb3b' }}>Single Mode (SMF) - Laser</h5>
                <div style={{ height: '40px', background: '#333', borderRadius: '20px', position: 'relative', overflow: 'hidden', border: '2px solid #ffeb3b' }}>
                    <motion.div
                        style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '2px', background: '#ffeb3b', marginTop: '-1px' }}
                        initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    />
                </div>
            </div>

            <div>
                <h5 style={{ color: '#00f2ff' }}>Multi Mode (MMF) - LED</h5>
                <div style={{ height: '60px', background: '#333', borderRadius: '30px', position: 'relative', overflow: 'hidden', border: '2px solid #00f2ff' }}>
                    {[0, 1, 2].map(i => (
                        <motion.div
                            key={i}
                            style={{ position: 'absolute', top: '50%', left: 0, width: '20px', height: '20px', background: '#00f2ff', borderRadius: '50%', marginTop: '-10px', opacity: 0.6 }}
                            initial={{ x: 0, y: 0 }}
                            animate={{ x: 300, y: [0, i === 0 ? -20 : i === 1 ? 0 : 20, 0] }}
                            transition={{ repeat: Infinity, duration: 2, delay: i * 0.2, ease: 'linear' }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// ------------------------------------------------------------------
// 5. TCP Handshake Diagram
// ------------------------------------------------------------------
const TcpHandshakeDiagram = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', height: '200px', position: 'relative' }}>
            <div style={{ width: '4px', background: 'var(--primary)', height: '100%' }}><span style={{ marginLeft: '10px' }}>Client</span></div>
            <div style={{ width: '4px', background: 'var(--secondary)', height: '100%' }}><span style={{ marginLeft: '-50px' }}>Server</span></div>

            {/* SYN */}
            <motion.div
                initial={{ x: 0, y: 20, opacity: 0 }}
                animate={{ x: 220, opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                style={{ position: 'absolute', top: 20, left: 10, color: 'var(--primary)', fontWeight: 'bold' }}
            >
                SYN -----------------&gt;
            </motion.div>

            {/* SYN-ACK */}
            <motion.div
                initial={{ x: 220, y: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1, repeat: Infinity, repeatDelay: 3 }}
                style={{ position: 'absolute', top: 80, left: 10, color: 'var(--secondary)', fontWeight: 'bold' }}
            >
                &lt;----------------- SYN-ACK
            </motion.div>

            {/* ACK */}
            <motion.div
                initial={{ x: 0, y: 140, opacity: 0 }}
                animate={{ x: 220, opacity: 1 }}
                transition={{ duration: 1, delay: 2, repeat: Infinity, repeatDelay: 3 }}
                style={{ position: 'absolute', top: 140, left: 10, color: 'var(--success)', fontWeight: 'bold' }}
            >
                ACK -----------------&gt;
            </motion.div>
        </div>
    );
};

// ------------------------------------------------------------------
// 6. Wi-Fi Channels Diagram
// ------------------------------------------------------------------
const WifiChannelsDiagram = () => {
    return (
        <div style={{ width: '100%', height: '150px', position: 'relative', marginTop: '50px' }}>
            <h4 style={{ textAlign: 'center' }}>2.4 GHz Non-Overlapping</h4>
            {[1, 6, 11].map((channel, i) => (
                <div key={channel} style={{ position: 'absolute', left: `${i * 33}%`, width: '33%', bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <motion.div
                        initial={{ height: 0 }} animate={{ height: 80 }} transition={{ delay: i * 0.3 }}
                        style={{
                            width: '100%', borderTopLeftRadius: '50px', borderTopRightRadius: '50px',
                            border: '2px solid var(--primary)', borderBottom: 'none', background: 'rgba(0, 242, 255, 0.1)'
                        }}
                    />
                    <span style={{ marginTop: '5px', fontWeight: 'bold' }}>Ch {channel}</span>
                </div>
            ))}
        </div>
    );
};

export default DiagramView;
