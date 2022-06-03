# Copyright (c) 2022, Faris Ansari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Father(Document):
    @frappe.whitelist()
    def add_son(self, son_name):
        doc = frappe.new_doc('Son Doc')
        doc.name1 = son_name[0]
        doc.parent_link = self.name1
        doc.insert()
        doc.run_method('submit')
        frappe.db.commit()
