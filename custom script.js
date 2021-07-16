frappe.ui.form.on('Product Dispatch', {
    setup:function(frm){
	        let product_list = frm.doc.product_details;
	        let final_gst=0.0;
	        let amt=0;
	        console.log("gst", product_list)
	        product_list.forEach(function(product, index){
	           // console.log("test",product_list[0].igst)
	            final_gst = final_gst + parseFloat(product_list[0].igst) + parseFloat(product_list[0].sgst) + parseFloat(product_list[0].cgst);
	            amt = amt + parseFloat(product_list[0].amount)
	           // console.log("hy", final_gst)
	        });
	       // console.log("test", final_gst);
	       //console.log("test",amt)
	       frm.set_value("total_gst",final_gst);
	       frm.set_value("amount",taxable_amount)
	       // frm.set_value("amount",total_taxable_value);
	    }
})
