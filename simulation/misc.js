if (Game.spawns['Spawn1'].energy === Game.spawns['Spawn1'].energyCapacity) {
    creep.memory.role = 'builder';
} else {
    creep.memory.role = 'harvester';
}