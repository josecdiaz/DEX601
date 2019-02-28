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
	},
	isLightningExperience: function () {
		var toast = $A.get("e.force:showToast");
		if (toast) {
			return true;
		} else {
			return false;
		}
	},
	showNotification: function (component, header, title, message, variant, closeCallback) {
		if (this.isLightningExperience()) {
			var compEvent = component.getEvent("onnotification");
			compEvent.setParams({
				type: 'notification',
				config: {
					header: header,
					title: title,
					message: message,
					variant: variant,
					closeCallback: closeCallback
				}
			});
			compEvent.fire();
		}
	},
	showToast: function (component, title, message, messageData, variant, mode) {
		if (this.isLightningExperience()) {
			var compEvent = component.getEvent("onnotification"); compEvent.setParams({
				type: 'toast',
				config: {
					title: title,
					message: message,
					messageData: messageData,
					variant: variant,
					mode: mode
				}
			});
			compEvent.fire();
		}
	}
})
