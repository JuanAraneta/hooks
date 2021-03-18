import { useEffect, useState, useRef } from 'react';

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
    if (ref.current) observer.current.observe(ref.current);
    return () => {
      // Remove the observer as soon as the component is unmounted
      observer.current.disconnect();
    };
  }, []);

  return isIntersecting;
};

export const useCompleteOnScreen = (ref) => {
  const [isComplete, setIsComplete] = useState(false);

  const handleScroll = () => {
    if (ref && ref.current && ref.current.getBoundingClientRect().bottom < window.innerHeight) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isComplete;
};
