# Welcome to Godocx!

Godocx is a Go library for working with DOCX files. It provides a set of functions to create, read, and modify DOCX documents with ease. This documentation will guide you through the installation, usage, and examples for the Godocx library.

## Features

- **Create New DOCX Documents**: Easily create DOCX files from scratch.
- **Read and Modify Existing Documents**: Open existing DOCX files and modify their content.
- **Add Various Elements**: Add headings, paragraphs, tables, and more.
- **Save Documents**: Save the modified documents to new files.

## Installation

To get started with `godocx`, install it using Go:

```bash
go get github.com/gomutex/godocx
```

## Usage

Here's a simple example of how to create and modify DOCX documents using `godocx`:

```go
package main

import (
    "log"
    "github.com/gomutex/godocx"
)

func main() {
    // Create a new DOCX document
    document, err := godocx.NewDocument()
    if err != nil {
        log.Fatal(err)
    }

    document.AddHeading("Document Title", 0)

    // Add a new paragraph to the document
    p := document.AddParagraph("A plain paragraph having some ")
    p.AddText("bold").Bold(true)
    p.AddText(" and some ")
    p.AddText("italic.").Italic(true)

    document.AddHeading("Heading, level 1", 1)
    document.AddParagraph("Intense quote").Style("Intense Quote")
    document.AddParagraph("first item in unordered list").Style("List Bullet")
    document.AddParagraph("first item in ordered list").Style("List Number")

    records := []struct{ Qty, ID, Desc string }{{"5", "A001", "Laptop"}, {"10", "B202", "Smartphone"}, {"2", "E505", "Smartwatch"}}

    table := document.AddTable()
    table.Style("LightList-Accent4")
    hdrRow := table.AddRow()
    hdrRow.AddCell().AddParagraph("Qty")
    hdrRow.AddCell().AddParagraph("ID")
    hdrRow.AddCell().AddParagraph("Description")

    for _, record := range records {
        row := table.AddRow()
        row.AddCell().AddParagraph(record.Qty)
        row.AddCell().AddParagraph(record.ID)
        row.AddCell().AddParagraph(record.Desc)
    }

    // Save the modified document to a new file
    err = document.SaveTo("demo.docx")
    if err != nil {
        log.Fatal(err)
    }
}
```

## Demo Output

Here's a screenshot of a demo document generated from the `godocx` library:

![Demo Screenshot](https://github.com/gomutex/godocx-examples/raw/main/demo.png)

## Inspiration

The Godocx library is inspired by [python-docx](https://github.com/python-openxml/python-docx).

## License

The Godocx library is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Additional Resources

- [GitHub Repository](https://github.com/gomutex/godocx)
- [Examples](https://github.com/gomutex/godocx-examples)
- [API Documentation](https://pkg.go.dev/github.com/gomutex/godocx)
