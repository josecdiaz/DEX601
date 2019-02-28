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
	},
	onNotification: function (component, event, helper) {
		var notifService = component.find('notifLib');
		var config = event.getParam('config');
		if (event.getParam('type') == 'toast') {
			notifService.showToast(config);
		} else {
			notifService.showNotice(config);
		}

	},
	doInit: function (component, event, helper) {
		helper.showToast(
			component,
			"Welcome",
			"Don't forget to check back here for updated class schedules and assignments"
		);
	}

})
