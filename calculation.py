#doctype event
final_gst=0;
amt=0;
for i in range(len(doc.product_details)):
    final_gst = float(doc.product_details[i].igst) + float(doc.product_details[i].cgst) + float(doc.product_details[i].sgst)
    amt = float(doc.product_details[i].amount)
# frappe.msgprint(amt)
# frappe.msgprint(final_gst)
doc.taxable_amount = amt 
doc.total_gst = final_gst
