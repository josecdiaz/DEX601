({
	doSuccess: function (component, event, helper) {
		helper.showToast(
			component,
			'Transaction Complete',
			'Your Trip Report was Saved.',
			null,
			'success'
		);
		var compEvent =
			component.getEvent("ontripreportmodechange"); compEvent.setParams({
				"mode": "view",
				"id": component.get('v.Id')
			});
		compEvent.fire();
	},
	onCancel: function (component, event, helper) {
		var compEvent = component.getEvent("ontripreportmodechange"); compEvent.setParams({
			"mode": "view"
		});
		compEvent.fire();
	}
})