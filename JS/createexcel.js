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
	"currDate" : formatDate(new Date()),
	"countLee" : accountingLocalVars.countLee + 1,
	"countChe" : accountingLocalVars.countChe + 1,
	"salesDate" : ""
};

// localCreateExcel.currDate = formatDate(new Date());
// localCreateExcel.countLee = accountingLocalVars.countLee + 1;
// localCreateExcel.countChe = accountingLocalVars.countChe + 1;

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
	prepairDataToSave("accountantChe");
  saveAs(new Blob([s2ab(localCreateExcel.wbout)],{type:"application/octet-stream"}), accountingLocalVars.checkedValue +'_накладные_Че_за_'+ localCreateExcel.salesDate +'_сформирован_'+ localCreateExcel.currDate +'_'+ localCreateExcel.countChe +'.xlsx');
});

$("#saveAccountantLee").click(function(){
	prepairDataToSave("accountantLee");
	saveAs(new Blob([s2ab(localCreateExcel.wbxout)],{type:"application/octet-stream"}), accountingLocalVars.checkedValue +'_накладные_Ли_за_'+ localCreateExcel.salesDate +'_сформирован_'+ localCreateExcel.currDate +'_'+ localCreateExcel.countLee +'.xlsx');
});

$("#printReport").click(function(){
	prepairDataToSave("reports");
   saveAs(new Blob([s2ab(localCreateExcel.wbout)],{type:"application/octet-stream"}), 'отчет.xlsx');
});

function prepairDataToSave(param) {
	// var wb = XLS.utils.table_to_book(document.getElementById('tableData'),{sheet:"Sheet JS"});
	if (param == "reports") { alert("Отчеты");
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
	if (param == "accountantChe") { alert("Бухгалтерия ИП Че");
		localCreateExcel.wb = XLSX.utils.book_new();
		localCreateExcel.ws = XLSX.utils.table_to_sheet(document.getElementById('tableDataChe'));
		localCreateExcel.ws_name = "Продажи Че";
    // wb.Sheets.ws_name.L3 = {t:'s',v:'2019-07-01 00:00:00'};
    var wsname = localCreateExcel.ws_name;
    var workbook = localCreateExcel.wb;
    var worksheet = localCreateExcel.ws;

    // var address_of_cell = 'L2';
    // workbook.Sheets[wsname].address_of_cell = {t:'s',v:'2019-07-01 00:00:00'};

    // delete sheet.A2.w;
    // sheet.A2.z = '0';

		localCreateExcel.sheetcols = [
			{wch: 3},
			{wch: 7},
			{wch: 10},
			{wch: 40},
			{wch: 25},
			{wch: 5},
			{wch: 3},
			{wch: 7},
			{wch: 10},
			{wch: 8},
			{wch: 9},
			{wch: 20}
		];
		worksheet['!cols'] = localCreateExcel.sheetcols;
		workbook.SheetNames.push(wsname);

    // var sheet = workbook.Sheets[workbook.SheetNames[0]];
    // var desired_cell = worksheet[address_of_cell];
    // var desired_value = (desired_cell ? desired_cell.v : undefined);
    Object.keys(worksheet).forEach(function(s) {
      if (worksheet[s].w) {
          delete worksheet[s].w;
          worksheet[s].z = '49';
      }
    });
    workbook.Sheets[wsname] = worksheet;
    // localCreateExcel.wbout = XLSX.writeFile(localCreateExcel.wb, 'MyExcel.xlsx');
		localCreateExcel.wbout = XLSX.write(workbook, {bookType:'xlsx', bookSST:true, type:'binary'});
	}
  if (param == "accountantLee") { alert("Бухгалтерия ИП Ли");
		localCreateExcel.wbx = XLSX.utils.book_new();
		localCreateExcel.wsx = XLSX.utils.table_to_sheet(document.getElementById('tableDataLee'));
		localCreateExcel.wsx_name = "Продажи Ли";
		localCreateExcel.sheetcols = [
			{wch: 3},
			{wch: 7},
			{wch: 10},
			{wch: 40},
			{wch: 25},
			{wch: 5},
			{wch: 3},
			{wch: 7},
			{wch: 10},
			{wch: 8},
			{wch: 9},
			{wch: 10}
		];
		localCreateExcel.wsx['!cols'] = localCreateExcel.sheetcols;
		localCreateExcel.wbx.SheetNames.push(localCreateExcel.wsx_name);
		localCreateExcel.wbx.Sheets[localCreateExcel.wsx_name] = localCreateExcel.wsx;
		localCreateExcel.wbxout = XLSX.write(localCreateExcel.wbx, {bookType:'xlsx', bookSST:true, type:'binary'});
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
