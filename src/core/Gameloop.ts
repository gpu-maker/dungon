export class GameLoop {
  private systems: (() => void)[] = []

  addSystem(system: () => void) {
    this.systems.push(system)
  }

  start() {
    const loop = () => {
      this.systems.forEach(s => s())
      requestAnimationFrame(loop)
    }
    loop()
  }
}
