import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import contours from '../assets/logoContours.json';

type Polygon = { outline: number[][]; holes: number[][][] };

function makeShape(polygon: Polygon) {
  const point = ([x, y]: number[]) => new THREE.Vector2(x - 4.745, 2.61 - y);
  const shape = new THREE.Shape(polygon.outline.map(point));
  for (const hole of polygon.holes) shape.holes.push(new THREE.Path(hole.map(point)));
  return shape;
}

export default function Logo3D() {
  const mount = useRef<HTMLDivElement>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const container = mount.current;
    if (!container) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' }); }
    catch { setFallback(true); return; }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.45;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.setAttribute('aria-label', 'โลโก้สามมิติ A2 ART PLUS ลากเพื่อเอียงดูได้ในมุมด้านหน้า');
    renderer.domElement.setAttribute('role', 'img');
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(37, 1, 0.1, 100);
    const group = new THREE.Group();
    scene.add(group);

    const redSide = new THREE.MeshPhysicalMaterial({ color: 0xd00009, metalness: 0.42, roughness: 0.16, clearcoat: 1, clearcoatRoughness: 0.06 });
    const graphite = new THREE.MeshPhysicalMaterial({ color: 0x24262b, metalness: 0.7, roughness: 0.23, clearcoat: 0.8, clearcoatRoughness: 0.12 });
    const graphiteEdge = new THREE.MeshPhysicalMaterial({ color: 0x121316, metalness: 0.75, roughness: 0.3 });
    const chrome = new THREE.MeshPhysicalMaterial({ color: 0xf2f3f2, metalness: 0.52, roughness: 0.14, clearcoat: 1, clearcoatRoughness: 0.06 });
    const chromeEdge = new THREE.MeshPhysicalMaterial({ color: 0x7b838c, metalness: 0.8, roughness: 0.22 });
    const raisedText = new THREE.MeshPhysicalMaterial({ color: 0xf0f2f3, metalness: 0.35, roughness: 0.26, clearcoat: 0.8 });
    const materials = [redSide, graphite, graphiteEdge, chrome, chromeEdge, raisedText];
    const geometries: THREE.BufferGeometry[] = [];

    const add = (polygons: Polygon[], depth: number, z: number, face: THREE.Material, side: THREE.Material, bevel = 0.025) => {
      for (const polygon of polygons) {
        const geometry = new THREE.ExtrudeGeometry(makeShape(polygon), {
          depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel,
          bevelSegments: 2, curveSegments: 8, steps: 1,
        });
        geometries.push(geometry);
        const mesh = new THREE.Mesh(geometry, [face, side]);
        mesh.position.z = z;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        group.add(mesh);
      }
    };
    add(contours.a, 0.36, -0.16, redSide, redSide, 0.035);
    add(contours.two, 0.36, -0.16, redSide, redSide, 0.035);
    add(contours.a, 0.32, 0.02, graphite, graphiteEdge, 0.018);
    add(contours.two, 0.32, 0.02, chrome, chromeEdge, 0.018);
    // The last tiny contour is a stray white triangle beside the A, not part of the lettering.
    add(contours.letters.slice(0, -1), 0.13, 0.37, raisedText, chromeEdge, 0.007);

    scene.add(new THREE.AmbientLight(0xdce6f2, 0.7));
    const key = new THREE.DirectionalLight(0xffffff, 5.8);
    key.position.set(-4, 7, 9); key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.left = -8; key.shadow.camera.right = 8;
    key.shadow.camera.top = 8; key.shadow.camera.bottom = -8;
    key.shadow.bias = -0.0001;
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xff222c, 4.8);
    rim.position.set(5, 3, -3); scene.add(rim);
    const fill = new THREE.DirectionalLight(0xdce8ff, 2.1);
    fill.position.set(6, -2, 6); scene.add(fill);
    const strip = new THREE.PointLight(0xffffff, 65, 30);
    strip.position.set(-5, 5, 5); scene.add(strip);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    group.rotation.set(-0.035, -0.12, 0);
    let dragging = false;
    let dragX = 0;
    let dragY = 0;
    let pointerX = 0;
    let pointerY = 0;
    let startX = 0;
    let startY = 0;
    const pointerDown = (event: PointerEvent) => {
      dragging = true;
      pointerX = event.clientX;
      pointerY = event.clientY;
      startX = group.rotation.x;
      startY = group.rotation.y;
      renderer.domElement.setPointerCapture(event.pointerId);
      renderer.domElement.classList.add('is-dragging');
    };
    const pointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      dragY = THREE.MathUtils.clamp(startY + (event.clientX - pointerX) * 0.003, -0.48, 0.38);
      dragX = THREE.MathUtils.clamp(startX + (event.clientY - pointerY) * 0.002, -0.16, 0.12);
    };
    const pointerUp = () => {
      dragging = false;
      renderer.domElement.classList.remove('is-dragging');
    };
    renderer.domElement.addEventListener('pointerdown', pointerDown);
    renderer.domElement.addEventListener('pointermove', pointerMove);
    renderer.domElement.addEventListener('pointerup', pointerUp);
    renderer.domElement.addEventListener('pointercancel', pointerUp);
    camera.position.set(0, 0.3, 13);
    camera.lookAt(0, 0, 0);

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;
      camera.aspect = width / height;
      const halfTan = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      const distance = Math.max(5.6 / (2 * halfTan), 10 / (2 * halfTan * camera.aspect)) * 1.18;
      camera.position.set(0, 0.25, distance);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();
    let frame = 0;
    const started = performance.now();
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const phase = (performance.now() - started) / 1000;
      const targetY = dragging ? dragY : reducedMotion.matches ? -0.12 : -0.12 + Math.sin(phase * 0.75) * 0.29;
      const targetX = dragging ? dragX : reducedMotion.matches ? -0.035 : -0.035 + Math.sin(phase * 0.75 + 0.8) * 0.045;
      group.rotation.y += (targetY - group.rotation.y) * (dragging ? 0.22 : 0.045);
      group.rotation.x += (targetX - group.rotation.x) * (dragging ? 0.22 : 0.045);
      renderer.render(scene, camera);
    };
    animate();
    const lost = (event: Event) => { event.preventDefault(); setFallback(true); };
    renderer.domElement.addEventListener('webglcontextlost', lost);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      renderer.domElement.removeEventListener('pointerdown', pointerDown);
      renderer.domElement.removeEventListener('pointermove', pointerMove);
      renderer.domElement.removeEventListener('pointerup', pointerUp);
      renderer.domElement.removeEventListener('pointercancel', pointerUp);
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(material => material.dispose());
      renderer.domElement.removeEventListener('webglcontextlost', lost);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="dp-model-wrap">
    <div className="dp-model-glow" aria-hidden="true" />
    <div className="dp-model-shadow" aria-hidden="true" />
    <div className="dp-model-canvas" ref={mount}>
      {fallback && <img src="/logo/a2-3d-preview.webp" alt="โลโก้ A2 ART PLUS" className="dp-model-fallback" />}
    </div>
  </div>;
}
