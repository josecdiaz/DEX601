({
    onInit : function(component, event, helper) {
		helper.callServer(
			component,
			"c.getInstructors",
			function(response) {
				component.set('v.instructors', response);
			}
		); 
	}
})
