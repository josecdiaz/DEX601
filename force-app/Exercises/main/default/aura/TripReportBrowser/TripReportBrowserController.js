({
	doInit: function(component, event, helper) {
		helper.onInit(component);
	},
	onDataGridClick: function(component, event, helper) {
		component.set('v.selectedRecordId', event.getParam('pk'));
	}
})
