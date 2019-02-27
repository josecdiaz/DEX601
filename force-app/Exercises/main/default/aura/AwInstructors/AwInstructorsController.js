({
	onNavSelect: function (component, event, helper) {
		var selectionName = event.getParam('name');
		if (selectionName == 'students') {
			component.set('v.viewMode', 'students');
			component.set('v.certificationId', '');
		} else {
			component.set('v.viewMode', 'certifications');
			var key = selectionName.split(',');
			component.set('v.certificationId', key[0]);
			component.set('v.certificationLabel', key[1]);
		}
	}
})
