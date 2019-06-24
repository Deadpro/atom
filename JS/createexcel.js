// var wb = XLS.utils.table_to_book(document.getElementById('tableData'),{sheet:"Sheet JS"});
var wb = XLSX.utils.book_new();
var ws = XLSX.utils.table_to_sheet(document.getElementById('tableData'));

var ws_name = "Отчет";

var wscols = [
	{wch: 3},
	{wch: 7},
   {wch: 40},
   {wch: 8},
   {wch: 9},
   {wch: 5}
];
// var wsrows = [
// 	{hpt: 120}, // "points"
// 	{hpx: 160}, // "pixels"
// 	,
// 	{hpx: 240, level:3},
// 	{hidden: true}, // hide row
// 	{hidden: false}
// ];
ws['!cols'] = wscols;
// ws['!rows'] = wsrows;
wb.SheetNames.push(ws_name);
wb.Sheets[ws_name] = ws;
// XLS.utils.book_append_sheet(wb, ws, ws_name);


var wbout = XLS.write(wb, {bookType:'xlsx', bookSST:true, type:'binary'});

function s2ab(s) {
   var buf = new ArrayBuffer(s.length);
   var view = new Uint8Array(buf);
   for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
   return buf;
}

$("#button-a").click(function(){
   saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'отчет.xlsx');
});

if (true) {
	$("#printReport").click(function(){
	   saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'отчет.xlsx');
	});
}
