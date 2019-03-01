({
	onTripReportModeChange: function (component, event, helper) {
		component.set('v.mode', event.getParam('mode'));
		component.set('v.selectedTripReportId', event.getParam('Id'));
	},
	onCancel: function (component, event, helper) {
		var compEvent = component.getEvent("ontripreportmodechange"); compEvent.setParams({
			"mode": "view"
		});
		compEvent.fire();
	}
})
