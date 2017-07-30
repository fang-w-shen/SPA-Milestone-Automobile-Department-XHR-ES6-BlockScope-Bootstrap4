{
	let showcars = function (a) {
			
		for (var i=0;i<a.cars.length;i++) {
			let carlist = a.cars[i];
			console.log("", carlist);
			todom(carlist);
			}
		
			
	}
	

	CarLot.getInventory = function() {
		CarLot.Inventory.loadInventory(showcars);
		document.getElementById("loader").style.visibility = "hidden";
			
			
			
	}
	
}