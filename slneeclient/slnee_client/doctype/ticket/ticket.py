# Copyright (c) 2022, baha and contributors
# For license information, please see license.txt

import frappe
import requests
from frappe.model.document import Document

class Ticket(Document):


	def on_submit(self):
		
