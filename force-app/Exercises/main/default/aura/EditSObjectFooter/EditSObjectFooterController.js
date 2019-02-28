({
	onCancel: function (component, event, helper) {
		component.find("overlayLib").notifyClose();
	},
	onSave: function (component, event, helper) {
		component.get("v.editor").saveRecord();
		component.find("overlayLib").notifyClose();
	}
})