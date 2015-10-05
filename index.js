module.exports = CallbackCollector;

function CallbackCollector(mainCallBack, required) {
	required = required || 0;

	var have = 0;

	//this is for backwards compatibility; sorry
	add.add = add;

	return add;

	function add (callback) {
		required++;

		return function () {
			have++;

			callback.apply(callback, arguments);

			if (have == required) {
				mainCallBack();
			}
		}
	}
}
