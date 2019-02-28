({
	doInit: function (component, event, helper) {
		helper.onInit(component);
	},
	setSelection: function (component, event, helper) {
		var id = event.getParam('arguments').Id;
		component.find('datagridtable').setSelection(id);
	}
})
