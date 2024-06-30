# Tables

This section provides an overview of how to create and manipulate tables using the `godocx` library. We'll cover the basics of adding a table to a document, styling it, and populating it with data.

## Adding a Table

To add a table to a document, use the `AddTable` method. You can then style the table and add rows and cells as needed.

### Example: Adding and Styling a Table

```go
package main

import (
    "log"
    "github.com/gomutex/godocx"
)

func main() {
    document, err := godocx.NewDocument()
    if err != nil {
        log.Fatal(err)
    }

   records := []struct{ Qty, ID, Desc string }{
        {"5", "A001", "Laptop"},
        {"10", "B202", "Smartphone"},
        {"2", "E505", "Smartwatch"},
    }

    // Add a new table to the document
	table := document.AddTable()

    // Set the table style 
	table.Style("LightList-Accent4")

    // Add New row to the table
	hdrRow := table.AddRow()

    // Add cells and add parargraph to those cells
	hdrRow.AddCell().AddParagraph("Qty")
	hdrRow.AddCell().AddParagraph("ID")
	hdrRow.AddCell().AddParagraph("Description")

	for _, record := range records {
		row := table.AddRow()
		row.AddCell().AddParagraph(record.Qty)
		row.AddCell().AddParagraph(record.ID)
		row.AddCell().AddParagraph(record.Desc)
	}

    // Save the document
    err = document.SaveTo("table.docx")
    if err != nil {
        log.Fatal(err)
    }
}
```

In this example:

* A new table is added to the document.
* The table is styled using a predefined style.
* A header row is added with three columns: "Qty", "ID", and "Description".
* Data rows are added to the table from a slice of records.

### Another Example
Here is one more example, showing how to create a table, add rows and cells, and save the document.

```go
package main

import (
    "log"
    "github.com/gomutex/godocx"
)

func main() {
    document, err := godocx.NewDocument()
    if err != nil {
        log.Fatal(err)
    }

    // Add a new table to the document
    table := document.AddTable()
    // Apply a predefined style to the table
    table.Style("LightList-Accent2")

    // Add the first row
    tblRow := table.AddRow()
    cell00 := tblRow.AddCell()
    cell00.AddParagraph("Column1")
    cell01 := tblRow.AddCell()
    cell01.AddParagraph("Column2")

    // Add the second row
    tblRow1 := table.AddRow()
    cell10 := tblRow1.AddCell()
    cell10.AddParagraph("Row2 - Column 1")
    cell11 := tblRow1.AddCell()
    cell11.AddParagraph("Row2 - Column 2")

    // Save the document
    err = document.SaveTo("table.docx")
    if err != nil {
        log.Fatal(err)
    }
}
```

In this example:

* A new table is added and styled.
* Two rows are added, each with two cells containing text.
* The document is saved to a file named table.docx.

### Table Styles

The following table styles can be used in the default template:

- "LightShading"
- "LightShading-Accent1"
- "LightShading-Accent2"
- "LightShading-Accent3"
- "LightShading-Accent4"
- "LightShading-Accent5"
- "LightShading-Accent6"
- "LightList"
- "LightList-Accent1" ... "LightList-Accent6"
- "LightGrid"
- "LightGrid-Accent1" ... "LightGrid-Accent6"
- "MediumShading"
- "MediumShading-Accent1" ... "MediumShading-Accent6"
- "MediumShading2"
- "MediumShading2-Accent1" ... "MediumShading2-Accent6"
- "MediumList1"
- "MediumList1-Accent1" ... "MediumList1-Accent6"
- "MediumList2"
- "MediumList2-Accent1" ... "MediumList2-Accent6"
- "TableGrid"
- "MediumGrid1"
- "MediumGrid1-Accent1" ... "MediumGrid1-Accent6"
- "MediumGrid2"
- "MediumGrid2-Accent1" ... "MediumGrid2-Accent6"
- "MediumGrid3"
- "MediumGrid3-Accent1" ... "MediumGrid3-Accent6"
- "DarkList"
- "DarkList-Accent1" ... "DarkList-Accent6"
- "ColorfulShading"
- "ColorfulShading-Accent1" ... "ColorfulShading-Accent6"
- "ColorfulList"
- "ColorfulList-Accent1" ... "ColorfulList-Accent6"
- "ColorfulGrid"
- "ColorfulGrid-Accent1" ... "ColorfulGrid-Accent6"


## Further Reading

For more information on the full range of table-related functions available in the `godocx` library, please refer to the [official documentation on pkg.go.dev](https://pkg.go.dev/github.com/gomutex/godocx/docx#Table).
