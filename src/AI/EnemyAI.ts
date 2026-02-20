import * as THREE from "three"

export class EnemyAI {
  mesh: THREE.Mesh
  speed = 0.03
  player: THREE.Object3D

  constructor(scene: THREE.Scene, player: THREE.Object3D) {
    this.player = player

    const geo = new THREE.BoxGeometry(1, 1, 1)
    const mat = new THREE.MeshStandardMaterial({ color: 0xff0000 })

    this.mesh = new THREE.Mesh(geo, mat)
    this.mesh.position.set(5, 0, 5)

    scene.add(this.mesh)
  }

  update() {
    const dir = new THREE.Vector3()
    dir.subVectors(this.player.position, this.mesh.position).normalize()
    this.mesh.position.addScaledVector(dir, this.speed)
  }
}
