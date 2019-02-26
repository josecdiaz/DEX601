({
	onStudentSelected: function (component, event, helper) {
		var contactId = event.getParam('contactId');
		component.set('v.contactId', contactId);
		component.find('recordLoader').reloadRecord();
	}
})
