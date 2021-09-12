mp.game.ped.removeScenarioBlockingArea(0,true);
mp.game.streaming.setPedPopulationBudget(3);
mp.game.ped.setCreateRandomCops(true); // Рандомные менты на карте( может пройти мини процесс стрелки)
mp.game.vehicle.setRandomBoats(true); // Рандомные NPC катаются по карте
mp.game.vehicle.setRandomTrains(true); // Рандомные поезда( нет смысла не доделана синхра)
mp.game.vehicle.setGarbageTrucks(true); // Поставить мусоровозов на карту
mp.game.streaming.setVehiclePopulationBudget(3);
mp.game.invoke('0x34AD89078831A4BC'); // Поставить генератор авто, на активный уровень
mp.game.vehicle.setAllLowPriorityVehicleGeneratorsActive(true);
mp.game.vehicle.setNumberOfParkedVehicles(-1);
mp.game.vehicle.displayDistantVehicles(true);
mp.game.graphics.disableVehicleDistantlights(false);
// Закоментированно самое главное, остальное на среднечке, главный баг будет в том что при нажатии F1 не будет работать та меню, но кому надо - пофиксит!
