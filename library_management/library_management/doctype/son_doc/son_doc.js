// Copyright (c) 2022, Faris Ansari and contributors
// For license information, please see license.txt
frappe.ui.form.on('Son Doc', {
	before_submit: function (frm) {
		frappe.db.get_value('Son Doc', frm.docname, 'parent_link')
			.then(r => {
				frm.set_value('father', r.message.parent_link);
				frm.refresh_field('father');
				frm.call('add_child').then(r => {

				})
			});
	}
});
