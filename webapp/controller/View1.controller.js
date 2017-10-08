sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
	
], function(Controller,Filter,FilterOperator) {
	"use strict";

	return Controller.extend("MockServerMockServer.controller.View1", {
    onFilterProducts: function(oEvent){
    	//build filter query
    	var aFilter = [], 
    	sQuery = oEvent.getParameter("query"),
    	
    	//retrieve list control
    	oList = this.getView().byId("productList"),
    	//get binding for aggregation "items"
    	oBinding = oList.getBinding("items");

		//pushes filtered values in the array based on ProductID   	
    	if(sQuery){
    		aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
    	}
		
		//incase aFilter is empty it will display all values
		//or it will display filtered values
        oBinding.filter(aFilter);    	
    }
	});
});