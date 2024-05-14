// eslint-disable-next-line unused-imports/no-unused-imports
import { JSpreadsheetElement } from 'jspreadsheet-ce'

declare module 'jspreadsheet-ce' {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface JSpreadsheetElement {
    updateNestedHeader: (_x: number, _y: number, _title: string) => void;
  }
}
