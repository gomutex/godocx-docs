# Create or Open Document

The `godocx` library allows you to create new DOCX documents as well as make modifications to existing ones.

## Opening a Document

To get started, you can either create a new document or open an existing one. Here’s a brief overview of how you can do both:

### Creating a New Document

To create a new DOCX document from scratch, you can use the `NewDocument` function. This initializes a new document with the default template and allows you to begin adding content to it.

```go
package main

import (
    "log"
    "github.com/gomutex/godocx"
)

func main() {
    // Create a new document
    document, err := godocx.NewDocument()
    if err != nil {
        log.Fatal(err)
    }
    
    // Add a heading
    document.AddHeading("Document Title", 0)
    
    // Save the document to a file
    err = document.SaveTo("demo.docx")
    if err != nil {
        log.Fatal(err)
    }
}
```

### Opening an Existing Document

If you have an existing DOCX file and want to modify it, you can open it using the `godocx.OpenDocument` function. This allows you to load the contents of the file into a `godocx.Document` object and make changes as needed.

```go
package main

import (
    "log"
    "github.com/gomutex/godocx"
)

func main() {
    // Open an existing document
    document, err := godocx.OpenDocument("existing-document.docx")
    if err != nil {
        log.Fatal(err)
    }
    
    // Modify the document content as needed
    
    // Save the modified document to a new file
    err = document.SaveTo("modified-document.docx")
    if err != nil {
        log.Fatal(err)
    }
}
```
