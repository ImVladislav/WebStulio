import React, { useRef, useState } from 'react';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const ThreeScene: React.FC = () => {
  const containerNormal = useRef<HTMLDivElement>(null);
  const containerLogZBuf = useRef<HTMLDivElement>(null);
  const border = useRef<HTMLDivElement>(null);

  const [screensplit, setScreensplit] = useState(0.25);
  const [mouse, setMouse] = useState<[number, number]>([0.5, 0.5]);
  const [zoompos, setZoompos] = useState(-100);
  const [minzoomspeed, setMinZoomspeed] = useState(0.015);
  const [zoomspeed, setZoomspeed] = useState(minzoomspeed);

  // ... Continue defining and converting the logic from the original script ...

  return (
    <>
      <div id="container">
        <div ref={containerNormal} id="container_normal">
          <h2 className="renderer_label">normal z-buffer</h2>
        </div>
        <div ref={containerLogZBuf} id="container_logzbuf">
          <h2 className="renderer_label">logarithmic z-buffer</h2>
        </div>
        <div ref={border} id="renderer_border"></div>
      </div>

      <div id="info">
        <a href="https://threejs.org" target="_blank" rel="noopener">
          three.js
        </a>{' '}
        - cameras - logarithmic depth buffer<br />
        mousewheel to dolly out
      </div>
    </>
  );
};

export default ThreeScene;