({
	onInit: function (component, event, helper) {
		helper.queryStudents(component,helper,"","");
	},
	queryStudents: function (component, helper, instructorId, courseDeliveryId) {
		helper.callServer(
			component,
			"c.getStudents",
			(response) => {
				component.set('v.studentList', response);
			}, {
				instructorId: instructorId,
				courseDeliveryId: courseDeliveryId
			}
		);
	}
})

