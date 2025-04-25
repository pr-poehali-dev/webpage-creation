import { FC } from 'react';

interface FloatingObjectProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

const FloatingObject: FC<FloatingObjectProps> = ({ 
  children, 
  className = "", 
  delay = "0s" 
}) => {
  return (
    <div 
      className={`animate-float ${className}`}
      style={{ 
        animationDelay: delay,
      }}
    >
      {children}
    </div>
  );
};

export default FloatingObject;
