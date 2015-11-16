	
angular.module("myApp",[]).controller('myController',function($scope){

	
	function House(name, address, city, state, zip, saleStatus, listPrice, zEstimate, deal, mortgage, image){
		this.name = name;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.saleStatus = saleStatus;
		this.listPrice = listPrice;
		this.zEstimate = zEstimate;
		this.deal = deal;
		this.mortgage = mortgage;
		this.image = image;
	}
	var houseArray = [];
	houseArray.push(new House("The Villa","4747 Northside Dr NW","Atlanta","GA","30327","For Sale","2,999,000","4,031,664","A good deal!! (25% off!)","11,179","http://photos3.zillowstatic.com/p_h/IShf3c5r7s3xw60000000000.jpg"));
	houseArray.push(new House("The Pool House","1101 Garmon Dr NW","Atlanta","GA","30327","For Sale","2,399,000","2,684,662","Average Deal","8,943","http://photos2.zillowstatic.com/p_h/IS1n6j1pnfqv2b1000000000.jpg"));
	houseArray.push(new House("The Awesome","914 Davis Dr NW","Atlanta","GA","30327","NOT For Sale","-","2,134,055","-","-","http://ak.t1.tiles.virtualearth.net/tiles/cmd/ObliqueHybrid?a=03200231131-48125-20-101&g=4510"));
	houseArray.push(new House("Versailles","5115 Northside Dr NW","Atlanta","GA","30327","For Sale","8,000,000","12,360,014","A crazy deal!! (30% off!)","29,821","http://photos3.zillowstatic.com/p_h/ISx35uo0fixyhb0000000000.jpg"));
	$scope.houses = houseArray;
	
	var index = $scope.houses.length;

	$scope.addHouse = function(){
		setView('add');
		
	}
	$scope.confirmAddHouse = function(){
		var name = $('#house-name').val();
		var address = $('#address').val();
		var city = $('#city').val();
		var state = $('#state').val();
		var zip = $('#zip').val();
		var saleStatus = $('#sale-status').val();
		var listPrice = $('#price').val();
		var zEstimate = $('#zestimate').val();
		var deal = $('#deal-quality').val();
		var mortgage = $('#mortgage').val();
		var photo = $('#photo-url').val();
		$('.new-house').val('');
		$scope.houses.push(new House(name,address,city,state,zip,saleStatus,listPrice,zEstimate,deal,mortgage,photo));
		setView('list');
	}
	$scope.deleteHouse = function(){
		$scope.name = this.house.name;
		$scope.url = this.house.image;
		index = houseArray.indexOf(this.house);
		setView('delete');
	}
	$scope.enableAdd = function(){
		return index < houseArray.length;
	}
	$scope.removeHouse = function(){
		setView('list');
		var firstHalf = houseArray.slice(0,index);
		var secondHalf = houseArray.slice(index+1,houseArray.length)
		houseArray = firstHalf.concat(secondHalf)
		$scope.houses = houseArray;
	}
	$scope.editHouse = function(){
		setView('edit');
		index = houseArray.indexOf(this.house); 
	}
	$scope.updateName = function(){
		setView('list'); 
		$scope.houses[index].name = $("#update-name").val();
		$('#update-name').val('');
	}
	$scope.listView = function(){
		setView('list');
	}
	$scope.view = 'list';

	function setView(view){
		$scope.view = view;
	}




});