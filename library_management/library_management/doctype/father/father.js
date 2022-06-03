// Copyright (c) 2022, Faris Ansari and contributors
// For license information, please see license.txt

frappe.ui.form.on('Father', {

	before_submit: function (frm) {
		frappe.db.get_value('Father', frm.docname, 'birth_date')
			.then(r => {
				let age = moment().diff(r.message.birth_date, 'years');
				frm.set_value('age', age);
				frm.refresh_field('age');
			})

	},

	refresh: function (frm) {
		frappe.db.get_value('Father', frm.docname, 'age')
			.then(r => {
				if (r.message.age > 0)
					frm.add_custom_button('Create Son', () => {
						frappe.prompt('Son Name', ({ value }) => {
							let row = frm.add_child('children', {
								name1: value,
								father_name: frm.docname
							});
							frm.refresh_field('children');
							frm.call('add_son', [value]).then(r => { });
						});
					})
			})

	}
});
