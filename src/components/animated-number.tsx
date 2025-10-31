'use client';

import { useEffect, useState, useRef } from 'react';

interface AnimatedNumberProps {
  value: number;
}

export default function AnimatedNumber({ value }: AnimatedNumberProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 1500; // Animation duration in ms
          const startTime = Date.now();

          const frame = () => {
            const now = Date.now();
            const elapsedTime = now - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Ease-out function
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const animatedValue = Math.floor(easedProgress * value);

            setCurrentValue(animatedValue);

            if (progress < 1) {
              requestAnimationFrame(frame);
            } else {
              setCurrentValue(value); // Ensure it ends exactly on the target value
            }
          };
          
          requestAnimationFrame(frame);
          observer.disconnect(); // Animate only once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value]);

  return <span ref={elementRef}>{currentValue.toLocaleString()}</span>;
}
