var localCreateExcel = {
  "wb" : "",
  "wbx" : "",
  "ws" : "",
  "wsx" : "",
  "ws_name" : "",
  "wsx_name" : "",
  "sheetcols" : "",
  "wbout" : "",
  "wbxout" : "",
	"currDate" : "",
	"countLee" : 0,
	"countChe" : 0,
	"salesDate" : ""
};

localCreateExcel.currDate = formatDate(new Date());
localCreateExcel.countLee = accountingLocalVars.countLee + 1;
localCreateExcel.countChe = accountingLocalVars.countChe + 1;

if (accountingLocalVars.dateStart != "") {
	localCreateExcel.salesDate = accountingLocalVars.dateStart;
} else {
	localCreateExcel.salesDate = localCreateExcel.currDate;
}

$("#button-a").click(function(){
	prepairDataToSave("reports");
   saveAs(new Blob([s2ab(localCreateExcel.wbout)],{type:"application/octet-stream"}), 'отчет_'+ localCreateExcel.currDate +'.xlsx');
});

$("#saveAccountantChe").click(function(){
	prepairDataToSave("accountant");
  saveAs(new Blob([s2ab(localCreateExcel.wbout)],{type:"application/octet-stream"}), accountingLocalVars.checkedValue +'_накладные_Че_за_'+ localCreateExcel.salesDate +'_сформирован_'+ localCreateExcel.currDate +'_'+ localCreateExcel.countChe +'.xls');
});

$("#saveAccountantLee").click(function(){
	prepairDataToSave("accountant");
	saveAs(new Blob([s2ab(localCreateExcel.wbxout)],{type:"application/octet-stream"}), accountingLocalVars.checkedValue +'_накладные_Ли_за_'+ localCreateExcel.salesDate +'_сформирован_'+ localCreateExcel.currDate +'_'+ localCreateExcel.countLee +'.xls');
});

$("#printReport").click(function(){
	prepairDataToSave("reports");
   saveAs(new Blob([s2ab(localCreateExcel.wbout)],{type:"application/octet-stream"}), 'отчет.xlsx');
});

function prepairDataToSave(param) {
	// var wb = XLS.utils.table_to_book(document.getElementById('tableData'),{sheet:"Sheet JS"});
	if (param == "reports") {
		localCreateExcel.wb = XLSX.utils.book_new();
		localCreateExcel.ws = XLSX.utils.table_to_sheet(document.getElementById('tableData'));
		localCreateExcel.ws_name = "Отчет";
		localCreateExcel.sheetcols = [
			{wch: 3},
			{wch: 7},
			{wch: 40},
			{wch: 8},
			{wch: 9},
			{wch: 5}
		];
		localCreateExcel.ws['!cols'] = localCreateExcel.sheetcols;
		// ws['!rows'] = wsrows;
		localCreateExcel.wb.SheetNames.push(localCreateExcel.ws_name);
		localCreateExcel.wb.Sheets[localCreateExcel.ws_name] = localCreateExcel.ws;
		// XLS.utils.book_append_sheet(wb, ws, ws_name);
		localCreateExcel.wbout = XLSX.write(localCreateExcel.wb, {bookType:'xlsx', bookSST:true, type:'binary'});
	}
	if (param == "accountant") { alert(2);
		localCreateExcel.wb = XLS.utils.book_new();
		localCreateExcel.wbx = XLS.utils.book_new();
		localCreateExcel.ws = XLS.utils.table_to_sheet(document.getElementById('tableDataChe'));
		localCreateExcel.wsx = XLS.utils.table_to_sheet(document.getElementById('tableDataLee'));
		localCreateExcel.ws_name = "Продажи Че";
		localCreateExcel.wsx_name = "Продажи Ли";
		localCreateExcel.sheetcols = [
			{wch: 3},
			{wch: 7},
			{wch: 10},
			{wch: 40},
			{wch: 9},
			{wch: 5},
			{wch: 3},
			{wch: 7},
			{wch: 10},
			{wch: 8},
			{wch: 9},
			{wch: 10}
		];
		localCreateExcel.ws['!cols'] = localCreateExcel.sheetcols;
		localCreateExcel.wb.SheetNames.push(localCreateExcel.ws_name);
		localCreateExcel.wb.Sheets[localCreateExcel.ws_name] = localCreateExcel.ws;

		localCreateExcel.wsx['!cols'] = localCreateExcel.sheetcols;
		localCreateExcel.wbx.SheetNames.push(localCreateExcel.wsx_name);
		localCreateExcel.wbx.Sheets[localCreateExcel.wsx_name] = localCreateExcel.wsx;
		localCreateExcel.wbout = XLS.write(localCreateExcel.wb, {bookType:'xls', bookSST:true, type:'binary'});
		localCreateExcel.wbxout = XLS.write(localCreateExcel.wbx, {bookType:'xls', bookSST:true, type:'binary'});
	}
}

function s2ab(s) {
	var buf = new ArrayBuffer(s.length);
	var view = new Uint8Array(buf);
	for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
	return buf;
}

function formatDate(date) {
  var monthNames = [
    "01", "02", "03",
    "04", "05", "06", "07",
    "08", "09", "10",
    "11", "12"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + '-' + monthNames[monthIndex] + '-' + year;
}
