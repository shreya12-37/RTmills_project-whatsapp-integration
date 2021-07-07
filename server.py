frappe.response["args"]=(frappe.form_dict)
pdf = frappe.response["args"]["pdf"]
# user_no = frappe.response["args"]["user_no"]
customer_no = frappe.response["args"]["customer_no"]
frappe.msgprint("customer number")
frappe.msgprint(customer_no)
frappe.msgprint("pdf link")
frappe.msgprint(pdf)
url = "https://pickyassist.com/app/api/v2/push"
payload = {
    "token":"",
    "priority":"0",
    "application": "919737001155",
    "globalmessage": "Please find attached dispatch details",
    "globalmedia": pdf,
    "data":[
        {"number":customer_no}
        ]
}
frappe.log_error(payload,"payload")
response=frappe.make_post_request(url=url,data=json.dumps(payload))
frappe.log_error(response,"error is this")
