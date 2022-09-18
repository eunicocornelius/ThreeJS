import './style.css'
import * as THREE from 'three'
import { MeshBasicMaterial } from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// Group up multiple meshes
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cube1)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({ color: 0x00ff00 })
)
cube2.position.x = -2
group.add(cube2)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({ color: 0x0000ff })
    )
cube3.position.x = 2
group.add(cube3)

group.position.y = 1
group.scale.y = 2
group.rotation.y = 1

// 1. Position
// Mesh adjustment functions
// Adjust axis X,Y,Z
// mesh.position.x = 1

// Adjust all positions at once
// mesh.position.set(0.7, -0.6, 1)

// Normalize length from camera to 1
// mesh.position.normalize()

// 2. Scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
// mesh.scale.set(2, 0.5, 0.5)

// 3. Rotation
// NOTE: reorder needs to take place before setting the rotation
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI / 4
// mesh.rotation.y = Math.PI / 4

// How to add axes helper? The parameter determines the length of the axes line
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)


// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

// camera.position.set(1,1,3)
scene.add(camera)

// Make camera focus on a point
// camera.lookAt(new THREE.Vector3(0,0,0))
// camera.lookAt(mesh.position)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
// NOTE: Always change and adjust position/scale/rotation/quternion etc before rendering
renderer.render(scene, camera)