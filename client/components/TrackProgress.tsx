import React from 'react';

interface TrackProgress {
    left: number;
    right: number;
    onChange: (e) => void;
}

const TrackProgress: React.FC<TrackProgress> = ({ left, right, onChange}) => {
    return (
        <div style={{ display: 'flex'}}>
            <input type="range" min={0} max={right} value={left} onChange={onChange} style={{marginRight: '10px'}}/>
            <div> {left} / {right}</div>
        </div>
    );
};

export default TrackProgress;
