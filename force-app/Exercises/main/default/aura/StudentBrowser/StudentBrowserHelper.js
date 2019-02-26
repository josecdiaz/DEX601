({
	onInit: function (component, event, helper) {
		var students = [];
		var studentNames = ['Rad', 'Stuart', 'Andres', 'Rahul', "Amit", "Simon"];
		studentNames.forEach((studentName, index) => {
			students.push(
				{
					'sobjectType': 'Contact',
					'Name': studentName,
					'PhotoUrl': '/services/images/photo/003B0FakePictId',
					'Id': index
				}
			);
		})

		// TODO: Set component attribute here
		component.set('v.studentList', students);

	}
})

