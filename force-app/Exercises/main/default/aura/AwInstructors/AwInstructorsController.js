({
	onNavSelect: function (component, event, helper) {
		var selectionName = event.getParam('name');
		if (selectionName == 'students') {
			component.set('v.viewMode', 'students');
		} else {
			component.set('v.viewMode', 'certifications');
		}
	}
})
