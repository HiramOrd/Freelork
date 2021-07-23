import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExportExcelService {


  constructor() { }

  exportExcel(excelData) {

    // Title, Header & Data
    const title = excelData.title;
    const header = excelData.headers;
    const data = excelData.data;

    // Create a workbook with a worksheet
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet(title);


    // Add Row and formatting
    worksheet.mergeCells('A1', 'I1');
    const titleRow = worksheet.getCell('A1');
    titleRow.value = title;
    titleRow.font = {
      name: 'Calibri',
      size: 16,
      bold: true,
      color: { argb: '000000  ' }
    };
    titleRow.alignment = { vertical: 'middle', horizontal: 'left' };

    // Date
    worksheet.mergeCells('A2:B2');
    const d = new Date();
    const date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
    const dateCell = worksheet.getCell('A2');
    dateCell.value = 'Reporte generado del dia ' + date;
    dateCell.font = {
      name: 'Calibri',
      size: 12,
    };
    dateCell.alignment = { vertical: 'middle', horizontal: 'left' };

    // Add Image
    // const myLogoImage = workbook.addImage({
    //   base64: logo.imgBase64,
    //   extension: 'png',
    // });
    // worksheet.mergeCells('A1:B4');
    // worksheet.addImage(myLogoImage, 'A1:B4');

    // Blank Row
    worksheet.addRow([]);

    // Adding Header Row
    const headerRow = worksheet.addRow(header);
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '000000' },
        bgColor: { argb: '' }
      };
      cell.font = {
        bold: true,
        color: { argb: 'FFFFFF' },
        size: 12
      };
    });
    headerRow.alignment = { vertical: 'middle', horizontal: 'center' };


    // Adding Data with Conditional Formatting
    data.forEach( content => {
        const row = worksheet.addRow(content);

        const sales = row.getCell(6);
      }
    );
    worksheet.getColumn(1).width = excelData.sizeColumns[0];
    worksheet.getColumn(2).width = excelData.sizeColumns[1];
    worksheet.getColumn(3).width = excelData.sizeColumns[2];
    worksheet.getColumn(4).width = excelData.sizeColumns[3];
    worksheet.getColumn(5).width = excelData.sizeColumns[4];
    worksheet.addRow([]);

    // Footer Row
    // const footerRow = worksheet.addRow(['Reporte generado el día: ' + date]);
    // footerRow.getCell(1).fill = {
    //   type: 'pattern',
    //   pattern: 'solid',
    //   fgColor: { argb: '000000' },
    // };
    // footerRow.getCell(1).font = {
    //     color: { argb: 'FFFFFF' },
    //     size: 12
    // };

    // Merge Cells
    // worksheet.mergeCells(`A${footerRow.number}:F${footerRow.number}`);

    // Generate & Save Excel File
    workbook.xlsx.writeBuffer().then( content => {
      const blob = new Blob([content], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, title + '_' + date + '.xlsx');
    });

  }
}
