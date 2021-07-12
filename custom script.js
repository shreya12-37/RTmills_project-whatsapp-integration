frappe.ui.form.on('Dispatch Details', {
     before_save:function(frm){
	        let product_list = frm.doc.products;
	        let total_taxable_value=0;
	        let total_tax_applied=0;
	        
	        product_list.forEach(function(product, index){
	            total_taxable_value = total_taxable_value + parseFloat(product.ass_val);
	            total_tax_applied = total_tax_applied + parseFloat(product.igst);
	        });
	        frm.set_value("total_tax",total_tax_applied);
	        frm.set_value("total_value",total_taxable_value);
	    }
})
