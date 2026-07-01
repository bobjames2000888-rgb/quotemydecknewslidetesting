import { useEffect, useState, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('page-enter-active');

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage('page-exit-active');
    }
  }, [children, displayChildren]);

  useEffect(() => {
    if (transitionStage === 'page-exit-active') {
      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage('page-enter');
        
        // Trigger enter animation
        requestAnimationFrame(() => {
          setTransitionStage('page-enter-active');
        });
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [transitionStage, children]);

  return (
    <div className={transitionStage}>
      {displayChildren}
    </div>
  );
};

export default PageTransition;
