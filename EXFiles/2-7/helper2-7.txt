({
	callServer: function (component, method, callback, params) {
		let action = component.get(method);
		if (params) {
			action.setParams(params);
		}

		action.setCallback(
			this,
			(response) => {
				let state = response.getState();
				if (state === 'SUCCESS') {
					// pass returned value to callback function
					callback.call(this, response.getReturnValue());
				} else if (state === 'ERROR') {
					// generic error handler
					let errors = response.getError();
					if (errors) {
						let msg = "";
						errors.forEach((error) => {
							msg += `Error ${error.message} `;
						});
						console.error('Errors', msg);
						if (msg !== "") {
							throw new Error(msg);
						}
					} else {
						throw new Error('Unknown Error');
					}
				}
			}
		);

		$A.enqueueAction(action);
	}
})
