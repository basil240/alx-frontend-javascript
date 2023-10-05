/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {...row, age: 23};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);


export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}


export function insertRow(row) {
    console.log('Insert row', row);
    return Math.floor(Math.random() * Math.floor(1000));
  }
  
  export function deleteRow(rowId) {
    console.log('Delete row id', rowId);
    return;
  }
  
  export function updateRow(rowId, row) {
    console.log(`Update row ${rowId}`, row);
  
    return rowId;
  }

  
  import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): number;

export function deleteRow(rowId: RowID): void;

export function updateRow(rowId: RowID, row: RowElement): number;

