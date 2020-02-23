import React from 'react';
import styled, { css } from 'styled-components';
import transitions from '../../lib/styles/transitions';

const OpaqueLayerBlock = styled.div<{
  animate: boolean;
  visible: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  ${props =>
    props.visible
      ? css`
          animation: ${transitions.fadeIn} 0.25s forwards;
        `
      : css`
          animation: ${transitions.fadeOut} 0.25s forwards;
        `}
`;

interface OpaqueLayerProps {
  visible: boolean;
}

const { useState, useEffect, useRef } = React;

const OpaqueLayer: React.FC<OpaqueLayerProps> = ({ visible }) => {
  const [animate, setAnimate] = useState(false);
  const timeoutId = useRef<number | null>(null);
  const mounted = useRef(false);
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    document.body.style.overflowY = visible ? 'hidden' : 'initial';

    // animate
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setAnimate(true);
      timeoutId.current = setTimeout(() => {
        setAnimate(false);
        if (!visible) {
          setClosed(true);
        }
      }, 250);
    }

    if (visible) {
      setClosed(false);
    }

    return () => {
      if (!timeoutId.current) return;
      clearTimeout(timeoutId.current);
    };
  }, [visible]);

  useEffect(() => {
    return () => {
      document.body.style.overflowY = 'initial';
    };
  }, []);

  if (!animate && !visible && closed) return null;

  return <OpaqueLayerBlock animate={animate} visible={visible} />;
};

export default OpaqueLayer;
