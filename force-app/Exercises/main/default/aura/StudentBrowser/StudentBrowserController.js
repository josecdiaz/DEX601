({
	doInit: function (component, event, helper) {
		helper.onInit(component, event, helper);
	},
	onStudentFilterChange: function (component, event, helper) {
		var instructorId = event.getParam('instructorId');
		var courseDeliveryId = event.getParam('courseDeliveryId');
		component.set('v.selectedCourseDeliveryId', courseDeliveryId); helper.queryStudents(component, helper, instructorId,
			courseDeliveryId);
	},
	onStudentSelected: function (component, event, helper) {
		var contactId = event.getParam('contactId');
		component.set('v.selectedContactId', contactId);
		helper.broadcastStudentSelected(component);
	}

})

