import { FC } from 'react';

const VaporwaveGrid: FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="w-full h-full relative">
        {/* Horizontal lines */}
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={`h-${index}`}
            className="absolute h-px w-full bg-vaporwave-grid/60"
            style={{ top: `${(index + 1) * 5}%`, transform: 'perspective(500px) rotateX(60deg)' }}
          />
        ))}
        
        {/* Vertical lines */}
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={`v-${index}`}
            className="absolute w-px h-full bg-vaporwave-grid/60"
            style={{ 
              left: `${(index + 1) * 5}%`, 
              transform: 'perspective(500px) rotateX(60deg)' 
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default VaporwaveGrid;
