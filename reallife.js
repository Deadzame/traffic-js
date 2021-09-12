mp.game.ped.removeScenarioBlockingArea(0,true);
mp.game.streaming.setPedPopulationBudget(3);
mp.game.ped.setCreateRandomCops(true);
mp.game.vehicle.setRandomBoats(true);
mp.game.vehicle.setRandomTrains(true);
mp.game.vehicle.setGarbageTrucks(true);
mp.game.streaming.setVehiclePopulationBudget(3);
mp.game.invoke('0x34AD89078831A4BC'); // SET_ALL_VEHICLE_GENERATORS_ACTIVE
mp.game.vehicle.setAllLowPriorityVehicleGeneratorsActive(true);
mp.game.vehicle.setNumberOfParkedVehicles(-1);
mp.game.vehicle.displayDistantVehicles(true);
mp.game.graphics.disableVehicleDistantlights(false);