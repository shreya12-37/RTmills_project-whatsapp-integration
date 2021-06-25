frappe.response["args"]=(frappe.form_dict)
pdf = frappe.response["args"]["url"]
user_no = frappe.response["args"]["user_no"]
customer_no = frappe.response["args"]["customer_no"]
url = "https://pickyassist.com/app/api/v2/push"
headers={}
payload = {
    "token":"",
    "priority":"0",
    "application": "1",
    "globalmessage": "Please find attached dispatch detaisl",
    "globalmedia": "pdf",
    "data":[
        {
            "number":customer_no,
            "message":""
        }]
}
response=frappe.make_get_request(url=url,headers=headers,payload=payload,auth=None)
