# Copyright (c) 2022, Faris Ansari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class SonDoc(Document):
    @frappe.whitelist()
    def add_child(self):
        doc = frappe.get_doc('Father', self.father)
        doc.append('children', {
            'name1': self.name1,
            'father_name': self.father
        })
        doc.save('update')
        frappe.db.commit()
