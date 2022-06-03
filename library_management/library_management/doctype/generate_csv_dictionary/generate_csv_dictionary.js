// Copyright (c) 2022, Faris Ansari and contributors
// For license information, please see license.txt


frappe.ui.form.on('Generate CSV Dictionary', {
	refresh: function (frm) {
		frm.call('validate_file').then(r => {
			if (r.message) {
				frm.call('get_sheet_name').then(r => {
					frm.set_df_property('sheet_title', 'options', r.message);
				})

				console.log(r.message);
				frm.add_custom_button('Generate Dictionary', () => {
					frm.call('get_dict').then(r => {
						frappe.show_alert({
							message: 'Dictionary Generated Successfully!',
							indicator: 'green'
						}, 5);
					})
				})
			}
			else
				frm.set_df_property('sheet_title', 'options', []);
		});





	}


});