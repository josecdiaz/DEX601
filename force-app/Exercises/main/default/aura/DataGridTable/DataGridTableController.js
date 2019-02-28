({
	onRowClick : function(component, event, helper) {
		var target = event.currentTarget;
		helper.setSelectedRow(component,target);
	}
})
