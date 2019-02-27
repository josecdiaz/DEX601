({
	onCertificationIdChange: function (component, event, helper) {
		helper.callServer(
			component,
			"c.getCertifiedStudents",
			function (response) {
				var contacts = [];
				for (var i = 0; i < response.length; i++) {
					var rec = response[i];
					contacts.push({
						certificationHeldId: rec.Id,
						contactId: rec.Certified_Professional__r.Id,
						name: rec.Certified_Professional__r.Name,
						date: rec.Date_Achieved__c,
						email: rec.Certified_Professional__r.Email,
						phone: rec.Certified_Professional__r.Phone
					});
				}
				component.set('v.contacts', contacts);
			}, {
				certificationId: component.get('v.certificationId')
			}
		);
	},
	doInit: function (component, event, helper) {
		component.set('v.columns', [
			{ label: 'Name', fieldName: 'name', type: 'text' },
			{ label: 'Date', fieldName: 'date', type: 'text' },
			{ label: 'Email', fieldName: 'email', type: 'email' },
			{ label: 'Phone', fieldName: 'phone', type: 'phone' }
		]);
	}
})
