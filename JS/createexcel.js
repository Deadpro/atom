
var localCreateExcel = {
  "wb" : "",
  "wbx" : "",
  "ws" : "",
  "wsx" : "",
  "ws_name" : "",
  "wsx_name" : "",
  "sheetcols" : "",
  "wbout" : "",
  "wbxout" : ""
};

$("#button-a").click(function(){ alert(11);
	prepairDataToSave("reports");
   saveAs(new Blob([s2ab(localCreateExcel.wbout)],{type:"application/octet-stream"}), 'отчет.xlsx');
});

$("#saveAccountant").click(function(){ alert(22);
	prepairDataToSave("accountant");
   saveAs(new Blob([s2ab(localCreateExcel.wbout)],{type:"application/octet-stream"}), 'продажиЧе.xls');
	saveAs(new Blob([s2ab(localCreateExcel.wbxout)],{type:"application/octet-stream"}), 'продажиЛи.xls');
});

$("#printReport").click(function(){ alert(33);
	prepairDataToSave("reports");
   saveAs(new Blob([s2ab(localCreateExcel.wbout)],{type:"application/octet-stream"}), 'отчет.xlsx');
});

function prepairDataToSave(param) {
	// var wb = XLS.utils.table_to_book(document.getElementById('tableData'),{sheet:"Sheet JS"});
	if (param == "reports") { alert(1);
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
