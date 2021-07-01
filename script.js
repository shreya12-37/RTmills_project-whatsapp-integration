frappe.listview_settings['Dispatch Details'] = {
    onload: function(listview) {

        listview.page.add_actions_menu_item(__("Do Something"), function() {
                //console.log("list button");
                const docnames = listview.get_checked_items(true).map(docname => docname.toString());
                //var name=docnames[0];
                /*frappe.call({
                    method:frappe.utils.print_format.download_pdf,
                    type:'GET',
                    args:{'doctype':'Dispatch Details','name':name},
                    callback:function(r){
                                   r.message;}
                })*/
                for (var i in docnames) {
                    var name = docnames[i];
                    name = name.replace("/", "%2F");
                    var url = "" + name + "";
                    window.open(url);

                }
                console.log(docnames);
                //console.log(frm.attachments);
            }

        )

    }
}
