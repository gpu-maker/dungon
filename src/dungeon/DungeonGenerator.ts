import * as THREE from "three"

export class DungeonGenerator {
  generate(scene: THREE.Scene) {
    for (let i = 0; i < 30; i++) {
      const room = new THREE.Mesh(
        new THREE.BoxGeometry(5, 0.5, 5),
        new THREE.MeshStandardMaterial({ color: 0x444444 })
      )

      room.position.set(
        Math.random() * 50 - 25,
        -1,
        Math.random() * 50 - 25
      )

      scene.add(room)
    }
  }
}
