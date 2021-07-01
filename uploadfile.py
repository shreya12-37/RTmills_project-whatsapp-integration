url = "https://rtmills.onehash.ai/"

frappe.response["args"]=(frappe.form_dict)
doctype = frappe.response["args"]["doctype"]
docname = frappe.response["args"]["docname"]
filename = frappe.response["args"]["filename"]
filedata = frappe.response["args"]["filedata"]

payload = json.loads(json.dumps({
  "data": {
    "cmd": "upload_file",
    "doctype": doctype,
    "docname": docname,
    "filename": filename,
    "filedata": filedata,
    "from_form": "1"
  }
}))

headers = {
  'Authorization': 'token key:pass',
  'Content-Type': 'application/json'
}

response = frappe.make_post_request(url = url, headers=headers, data=payload)

frappe.response['message'] = response.text
