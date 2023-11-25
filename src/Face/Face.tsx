import React, { useState, useEffect } from 'react';
import './Face.css';
import { Eye, EyesWrapper, Faceblock, Mouth, MouthWrapper, Pupil } from './FaceStyled';

const Face: React.FC = () => {
  const [isMouthOpen, setIsMouthOpen] = useState(false);
  const [pupilStyles, setPupilStyles] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      const height = window.innerHeight;
      const width = window.innerWidth;
      const faceBlock = document.querySelector('.faceblock');

      if (faceBlock) {
        const rect = faceBlock.getBoundingClientRect();
        const left = rect.left + window.scrollX;
        const top = rect.top + window.scrollY;

        if (x >= left && x <= left + rect.width && y >= top && y <= top + rect.height) {
          setIsMouthOpen(y > top + rect.height / 2);

          const deltaX = (x - (left + rect.width / 2)) / rect.width;
          const deltaY = (y - (top + rect.height / 2)) / rect.height;

          setPupilStyles({
            left: `${deltaX * 55}px` as any,
            top: `${deltaY * 55}px` as any,
          });
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Faceblock className="faceblock">
      <EyesWrapper>
        <Eye>
          <Pupil style={pupilStyles} />
        </Eye>
        <Eye>
          <Pupil style={pupilStyles} />
        </Eye>
      </EyesWrapper>
      <MouthWrapper className={isMouthOpen ? '' : 'closed'}>
        <Mouth />
      </MouthWrapper>
    </Faceblock>
  );
};

export default Face;