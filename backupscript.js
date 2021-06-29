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
            // console.log(url);
            publicdocument(url,"Dispatch Details",name);
             
         }
        // console.log(url);
        //  console.log(docnames);
        //console.log(frm.attachments);
        function publicdocument(url, doctype, docname) {
            console.log("url",url,"doctype",doctype,"docname", docname);
            var blob = null;
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            var splittedParts = url.split("/");
            var splitByQuestionMark = splittedParts[5].split('?');
            var filename = splitByQuestionMark[0];
            console.log("file name",filename,"doctype",doctype,"docname",docname);
            
            xhr.responseType = "blob"; //force the HTTP response, response-type header to be blob
            xhr.onload = function() {
                blob = xhr.response; //xhr.response is now a blob object
                var reader = new FileReader();
                console.log("File Reader",reader);
                reader.readAsDataURL(blob);
                reader.onloadend = function() {
                    var base64data = reader.result;
                    console.log("ye base64data mila", base64data);
                    console.log("file name",filename,"doctype",doctype,"docname",docname);
                    frappe.call({
                        method: "uploadfile",
                        type: 'POST',
                        args: {
                            doctype:doctype,
                            docname:docname,
                            filename:filename,
                            filedata:base64data,
                            is_public:1
                        },
                        async: false,
                        callback: function(r) {
                            // console.log("helppppppoppssojihusfad")
                            // frappe.msgprint(r)
                            // console.log("file name",filename,"doctype",doctype,"docname",docname);
                            console.log(r);
                            // frappe.call
                        },
                        error: function(data) {
                            console.log("Inside Error",data);
                        }
                        
                    });
                };
            };
            xhr.send();
        }
        // publicdocument(url,"Dispatch Details","Dispatch_details");
    }
    
    );
        
    }
};
