({
	onRowClick: function (component, event, helper) {
		var target = event.currentTarget;
		helper.setSelectedRow(component, target);

		var compEvent = component.getEvent("rowclick");
		compEvent.setParams({
			pk: target.getAttribute('data-pk'),
			domEl: target
		});
		compEvent.fire();
	}
})
