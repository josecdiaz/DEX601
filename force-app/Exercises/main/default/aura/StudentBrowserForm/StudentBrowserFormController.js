({
	doInit: function (component, event, helper) {
		helper.onInit(component, event, helper);
	},
	onInstructorChange: function (component, event, helper) {
		component.set('v.selectedDeliveryId', '');
		if (component.get('v.selectedInstructorId') === '') {
			component.set('v.deliveries', []);
		} else {
			helper.callServer(
				component,
				"c.getDeliveriesByInstructor",
				(response) => {
					component.set('v.deliveries', response);
				}, {
					instructorId: component.get('v.selectedInstructorId')
				}
			)
		};
	}

})
