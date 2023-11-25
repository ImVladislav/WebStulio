import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';

import { Text } from 'troika-three-text'

declare module 'troika-three-text' {
  const content: any;
  export default content;
}
  // Або інші імпортовані об'єкти, якщо це потрібно:
  export const myObject: {
    property1: string;
    property2: number;
  };
}
const Text3d: React.FC = () => {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        const canvas = renderer.domElement;
        if (canvasRef.current) {
            canvasRef.current.appendChild(canvas);
        }

        const camera = new THREE.PerspectiveCamera(2, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.set(0, 0, 100);
        camera.lookAt(0, 0, 0);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();

        const scene = new THREE.Scene();

        const geometry = new THREE.BoxGeometry(0.05, 2, 2);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const edges = new THREE.EdgesGeometry(geometry);
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
        const wireframe = new THREE.LineSegments(edges, lineMaterial);
        cube.add(wireframe);

        
const loader = new FontLoader();

loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
    const textGeometry = new TextGeometry('Hello three.js!', {
        font: font,
        size: 180,
        height: 20,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5
    });

    const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Використовуйте потрібний матеріал
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

    // Позиція тексту
    textMesh.position.set(-0.1, 0, 0);

    // Додайте текстовий меш до сцени
    cube.add(textMesh);
});

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            controls.update();
        }

        animate();

        return () => {
            renderer.domElement.remove();
        };
    }, []);

    return <div ref={canvasRef}></div>;
}

export default Text3d;
    




// Methods
    // .getSize () : Object
    // Returns an object containing the width and height of the renderer.
    
    // .render ( scene : Scene, camera : Camera ) : undefined
    // Renders a scene using a camera.
    // .setSize (width : Number, height : Number) : undefined
    // Resizes the renderer to (width, height).