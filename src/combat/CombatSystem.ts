export class CombatSystem {
  attack(attacker: any, target: any) {
    const damage = Math.max(1, attacker.attack - target.defense)
    target.health -= damage
    console.log("Hit for", damage)
  }
}
