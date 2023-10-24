<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'
import * as THREE from 'three';

const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    const cubeRotation = ref(0);

    onMounted(() => {
      document.getElementById('app').appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        cubeRotation.value += 0.01;
        cube.rotation.x = cubeRotation.value;
        cube.rotation.y = cubeRotation.value;
        renderer.render(scene, camera);
      };

      animate();
    });

</script>

<template>
  <div>
    {{ cube }}
  </div>
</template>

<style scoped>
</style>
