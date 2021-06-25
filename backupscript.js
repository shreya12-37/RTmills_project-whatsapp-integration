frappe.listview_settings['Dispatch Details'] = {
    onload: function(listview) {

    listview.page.add_actions_menu_item(__("Send to WhatsApp"), function() {
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
         var url;
         for(var i in docnames){
             var name = docnames[i];
             name = name.replace("/","%2F");
             url = "http://rtmills.onehash.ai/api/method/frappe.utils.print_format.download_pdf?doctype=Dispatch%20Details&name="+name+"&format=Standard&no_letterhead=0&letterhead=RT%20MILLS%20Letter%20Head&settings=%7B%7D&_lang=en-US";
            //  window.open(url);
             
         }
        //  console.log(docnames);
        //console.log(frm.attachments);
        function publicdocument(url, Dispatch Details, Dispatch_details, Dispatch_details)
        {
            var blob = null;
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            var splittedParts = url.split("/");
            var splitByQuestionMark = splittedParts[6].split('?');
            filename = splitByQuestionMark[0];
            xhr.responseType = "blob";
            
        }
        // frappe.call
    }
    
    );
        
    }
};
