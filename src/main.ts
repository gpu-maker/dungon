import { Engine } from "./core/Engine"
import { GameLoop } from "./core/GameLoop"
import { PlayerController } from "./player/PlayerController"
import { EnemyAI } from "./ai/EnemyAI"
import { DungeonGenerator } from "./dungeon/DungeonGenerator"

const engine = new Engine()
const loop = new GameLoop()

const dungeon = new DungeonGenerator()
dungeon.generate(engine.scene)

const player = new PlayerController(engine.scene)
const enemy = new EnemyAI(engine.scene, player.mesh)

loop.addSystem(() => player.update())
loop.addSystem(() => enemy.update())
loop.addSystem(() => engine.render())

loop.start()
