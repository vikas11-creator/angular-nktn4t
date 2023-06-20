import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tableForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.initializeForm();
    document
      .getElementById('tableContainer')
      .addEventListener('click', function (e) {
        // e.target is the clicked element!
        console.log(e);
        // If it was a list item
        if (e.target) {
          // List item found!  Output the ID!
          console.log(e.target);
        }
      });
  }

  initializeForm() {
    this.tableForm = this.fb.group({
      row: [''],
      column: [''],
    });
  }

  setRowColoum() {
    let rowLength = this.tableForm.value.row;
    let columnLength = this.tableForm.value.column;
    this.createTable(rowLength, columnLength);
  }

  createTable(rowLength, columnLength) {
    var tableContainer = document.getElementById('tableContainer');
    var table = document.createElement('table');
    for (var i = 0; i < rowLength; i++) {
      var row = document.createElement('tr');
      row.setAttribute('id', `para${i}`);
      for (var j = 0; j < columnLength; j++) {
        var cell = document.createElement('td');
        cell.textContent = 'col';
        row.appendChild(cell);
      }

      table.appendChild(row);
    }
    tableContainer.appendChild(table);
  }

  mergeColumns() {
    var table = document.getElementById('tableContainer');
    console.log(table);
    let rows = this.tableForm.value.row;
    // console.log(rowEl)

    if (rows.length < 1) {
      alert('There are not enough rows to merge columns.');
      return;
    }

    for (var i = 0; i < rows.length; i++) {
      var rowEl = document.getElementById(`para${i}`);
      console.log('rowEl', rowEl);
      var cells = rowEl[i].cells;

      if (cells.length < 2) {
        alert('There are not enough columns in row ' + i + ' to merge.');
        return;
      }

      cells[0].rowSpan = 2;
      cells[1].style.display = 'none';
      console.log('dsdas');
    }
  }
}
