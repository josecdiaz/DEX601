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
	},
	setSelection: function (component, event, helper) {
		var params = event.getParam('arguments');
		var pk = params.Id;
		var targets = component.find("datarow");
		for (var i = 0; i < targets.length; i++) {
			if (targets[i].getElement().getAttribute('data-pk') == pk) {
				helper.setSelectedRow(component, targets[i]);
				break;
			}
		}
	}
})
