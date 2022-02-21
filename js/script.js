const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");

const createVehicle = function (type, numWheels, color) {
  const vehicle = {
    type: type,
    numWheels: numWheels,
    color: color
  };
  return vehicle;
};

const bike = createVehicle("bike", 2, "green");
const car = createVehicle("car", 4, "blue");
const skateboard = createVehicle("skateboard", 4, "red");

const myVehicles = [bike, car, skateboard];
for (let vehicle of myVehicles) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}

bike.needsRepair = true;
skateboard.needsRepair = true;

button.addEventListener("click", function () {
  repairList.innerHTML = "";
  const vehicleRepairList = myVehicles.filter(function (vehicle) {
    return vehicle.needsRepair === true;
  });

  for (let vehicle of vehicleRepairList) {
    const li = document.createElement("li");
    li.innerHTML = `My <span>${vehicle.type}</span> needs some 💜`;
    repairList.append(li);
  }
});
