import * as THREE from "three"

export class PlayerController {
  mesh: THREE.Mesh
  speed = 0.1
  keys: Record<string, boolean> = {}

  constructor(scene: THREE.Scene) {
    const geometry = new THREE.BoxGeometry(1, 2, 1)
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })

    this.mesh = new THREE.Mesh(geometry, material)
    scene.add(this.mesh)

    window.addEventListener("keydown", e => this.keys[e.key] = true)
    window.addEventListener("keyup", e => this.keys[e.key] = false)
  }

  update() {
    if (this.keys["w"]) this.mesh.position.z -= this.speed
    if (this.keys["s"]) this.mesh.position.z += this.speed
    if (this.keys["a"]) this.mesh.position.x -= this.speed
    if (this.keys["d"]) this.mesh.position.x += this.speed
  }
}
