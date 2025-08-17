import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
  isActive?: boolean; 
  onComplete?: () => void;
}

const TypingText: React.FC<TypingTextProps> = ({ 
  text, 
  speed = 100, 
  className = "", 
  isActive = true, 
  onComplete 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const completeCalled = useRef(false);
  const typingInterval = useRef<ReturnType<typeof setInterval> | null>(null);


  // Друкування з паузою/продовженням
  useEffect(() => {
    if (!isActive || currentIndex >= text.length) {
      if (typingInterval.current) clearInterval(typingInterval.current);
      return;
    }

    typingInterval.current = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev < text.length) {
          return prev + 1;
        } else {
          if (typingInterval.current) clearInterval(typingInterval.current);
          if (onComplete && !completeCalled.current) {
            completeCalled.current = true;
            onComplete();
          }
          return prev;
        }
      });
    }, speed);

    return () => {
      if (typingInterval.current) clearInterval(typingInterval.current);
    };
  }, [isActive, speed, text, currentIndex, onComplete]);

  // Блимання курсора
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <motion.div
      className={`font-serif ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-1,5xl md:text-2xl lg:text-4xl font-light text-gray-800 tracking-wide text-center">
        {text.slice(0, currentIndex)}
        <span 
          className={`inline-block w-1 h-8 bg-green-800 ml-1 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-100`}
        />
      </h3>
    </motion.div>
  );
};

export default TypingText;
