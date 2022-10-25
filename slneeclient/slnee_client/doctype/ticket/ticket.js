// Copyright (c) 2022, baha and contributors
// For license information, please see license.txt

frappe.ui.form.on('Ticket', {
	refresh: function(frm) {
		if (frm.doc.name.includes("new")) {
			frm.doc.user=frappe.session.user_fullname;
			frm.doc.email=frappe.session.user_email;
			refresh_field("email");
			refresh_field("user");

		}
	},
	reason:function(frm){
		if (frm.doc.reason=="Server not running"){
			frm.doc.priority="High";
			refresh_field("priority")
		}
	}
});
