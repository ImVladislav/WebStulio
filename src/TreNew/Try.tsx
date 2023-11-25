import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Try = () => {
    // Створення посилання на DOM-елемент, який буде містити канвас
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Створення і налаштування візуалізатора WebGL
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Отримання елементу канвасу для відображення
        const canvas = renderer.domElement;

        // Додавання канвасу до контейнера, якщо він існує
        if (canvasRef.current) {
            canvasRef.current.appendChild(canvas);
        }

        // Створення та налаштування камери для перегляду сцени
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
        camera.position.set(0, 0, 100);
        camera.lookAt(0, 0, 0);

        // Створення нової сцени
        const scene = new THREE.Scene();

        // Налаштування матеріалу для об'єкту
        const material = new THREE.LineBasicMaterial({
            color: 0xffffff,
            linewidth: 1,
            linecap: 'round', // Ігнорується WebGLRenderer
            linejoin: 'round' // Ігнорується WebGLRenderer
        });

        // Створення точок для об'єкту лінії
        const points = [];
        points.push(new THREE.Vector3(-5, 0, 0));
        points.push(new THREE.Vector3(0, 5, 0));
        points.push(new THREE.Vector3(1, 0, 3));

        // Створення геометрії та об'єкту лінії за допомогою точок та матеріалу
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material);

        // Додавання лінії до сцени
        scene.add(line);

        // Функція для анімації та рендерингу сцени
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        // Запуск анімації
        animate();

        // Зворотна функція, яка видаляє рендерер при виході з компоненту
        return () => {
            renderer.domElement.remove();
        };
    }, []);

    

    // Повернення DOM-елементу для відображення канвасу
    return <div ref={canvasRef}></div>;
}

export default Try;