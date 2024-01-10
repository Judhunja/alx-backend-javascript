/// <reference path="./crud.js" />
import { RowId, RowElement } from './interface';
import * as CRUD from './crud';

let row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: typeof RowId = CRUD.insertRow(row);

const updatedRow: RowElement = {
  ...row,
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
