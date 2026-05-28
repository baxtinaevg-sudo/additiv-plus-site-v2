<template>
  <canvas ref="canvasRef" class="molecule-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import gsap from 'gsap'

const canvasRef = ref(null)
let renderer, scene, camera, points, animationId, clock
let mouseX = 0, mouseY = 0

function getTextPositions(text, fontSize, maxWidth, maxHeight) {
  const canvas = document.createElement('canvas')
  canvas.width = maxWidth
  canvas.height = maxHeight
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, maxWidth, maxHeight)

  ctx.fillStyle = '#fff'
  ctx.font = `bold ${fontSize}px "Cormorant Garamond", serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  // Single line centered
  ctx.fillText(text, maxWidth / 2, maxHeight / 2)

  const imageData = ctx.getImageData(0, 0, maxWidth, maxHeight)
  const positions = []
  const step = 1

  for (let y = 0; y < maxHeight; y += step) {
    for (let x = 0; x < maxWidth; x += step) {
      const i = (y * maxWidth + x) * 4
      if (imageData.data[i] > 128) {
        const px = (x / maxWidth - 0.5) * 8
        const py = -(y / maxHeight - 0.5) * 3
        const pz = (Math.random() - 0.5) * 0.15
        positions.push({ x: px, y: py, z: pz })
      }
    }
  }

  return positions
}

onMounted(() => {
  const canvas = canvasRef.value
  const parent = canvas.parentElement
  const width = parent.clientWidth
  const height = parent.clientHeight

  renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
  camera.position.z = 5
  clock = new THREE.Clock()

  // Single line of text
  const textPositions = getTextPositions('MINUS AQUA PLUS FIRMITAS', 160, 4096, 512)

  const count = textPositions.length
  console.log('Particle count:', count)

  const geometry = new THREE.BufferGeometry()
  const randomPositions = new Float32Array(count * 3)
  const targetPositions = new Float32Array(count * 3)
  const positions = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  const offsets = new Float32Array(count)
  const colors = new Float32Array(count * 3)

  const palette = [
    new THREE.Color('#FFFFFF'),
    new THREE.Color('#F0E6D6'),
    new THREE.Color('#D4C4A8'),
    new THREE.Color('#E8DCC8'),
    new THREE.Color('#FFFFFF'),
  ]

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = 2 + Math.random() * 3

    randomPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    randomPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    randomPositions[i * 3 + 2] = r * Math.cos(phi)

    targetPositions[i * 3] = textPositions[i].x
    targetPositions[i * 3 + 1] = textPositions[i].y
    targetPositions[i * 3 + 2] = textPositions[i].z

    positions[i * 3] = randomPositions[i * 3]
    positions[i * 3 + 1] = randomPositions[i * 3 + 1]
    positions[i * 3 + 2] = randomPositions[i * 3 + 2]

    sizes[i] = 1.2 + Math.random() * 1.5
    offsets[i] = Math.random() * Math.PI * 2

    const color = palette[Math.floor(Math.random() * palette.length)]
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))
  geometry.setAttribute('aOffset', new THREE.BufferAttribute(offsets, 1))
  geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3))

  const material = new THREE.ShaderMaterial({
    vertexShader: `
      attribute float aSize;
      attribute float aOffset;
      attribute vec3 aColor;
      uniform float uTime;
      uniform float uPixelRatio;
      uniform float uAssembled;
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        vColor = aColor;
        vec3 pos = position;

        // Subtle floating when assembled
        float floatAmt = 0.02 * uAssembled;
        pos.x += sin(uTime * 0.5 + aOffset) * floatAmt;
        pos.y += cos(uTime * 0.4 + aOffset * 1.3) * floatAmt;
        pos.z += sin(uTime * 0.3 + aOffset * 0.7) * floatAmt;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;

        gl_PointSize = aSize * uPixelRatio * (1.0 / -mvPosition.z) * 3.5;

        vAlpha = 0.7 + 0.3 * uAssembled;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;

        float alpha = smoothstep(0.5, 0.15, dist) * vAlpha;
        gl_FragColor = vec4(vColor, alpha);
      }
    `,
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      uAssembled: { value: 0 },
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })

  points = new THREE.Points(geometry, material)
  scene.add(points)

  // Animate assembly after 3 seconds
  const posAttr = geometry.getAttribute('position')
  const animObj = { progress: 0 }

  gsap.to(animObj, {
    progress: 1,
    duration: 4,
    ease: 'power2.inOut',
    delay: 3,
    onUpdate: () => {
      const p = animObj.progress
      for (let i = 0; i < count; i++) {
        const stagger = (i / count) * 0.15
        const localP = Math.max(0, Math.min(1, (p - stagger) / (1 - stagger)))

        posAttr.array[i * 3] = randomPositions[i * 3] + (targetPositions[i * 3] - randomPositions[i * 3]) * localP
        posAttr.array[i * 3 + 1] = randomPositions[i * 3 + 1] + (targetPositions[i * 3 + 1] - randomPositions[i * 3 + 1]) * localP
        posAttr.array[i * 3 + 2] = randomPositions[i * 3 + 2] + (targetPositions[i * 3 + 2] - randomPositions[i * 3 + 2]) * localP
      }
      posAttr.needsUpdate = true
    },
    onUpdateParams: [],
  })

  // Also animate uAssembled uniform for visual effects
  gsap.to(material.uniforms.uAssembled, {
    value: 1,
    duration: 4,
    ease: 'power2.inOut',
    delay: 3,
  })

  function onMouseMove(e) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2
  }
  window.addEventListener('mousemove', onMouseMove)

  function animate() {
    animationId = requestAnimationFrame(animate)
    const elapsed = clock.getElapsedTime()
    material.uniforms.uTime.value = elapsed

    camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.02
    camera.position.y += (-mouseY * 0.3 - camera.position.y) * 0.02
    camera.lookAt(0, 0, 0)

    renderer.render(scene, camera)
  }
  animate()

  function onResize() {
    const w = parent.clientWidth
    const h = parent.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  window.addEventListener('resize', onResize)

  canvas._cleanup = () => {
    window.removeEventListener('resize', onResize)
    window.removeEventListener('mousemove', onMouseMove)
    if (animationId) cancelAnimationFrame(animationId)
    geometry.dispose()
    material.dispose()
    renderer.dispose()
  }
})

onUnmounted(() => {
  if (canvasRef.value && canvasRef.value._cleanup) {
    canvasRef.value._cleanup()
  }
})
</script>