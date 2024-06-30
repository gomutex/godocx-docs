# Images

This section provides an overview of how to add and customize pictures in a DOCX document using the `godocx` library. We will cover the basics of inserting an image, specifying dimensions, and saving the document.

## Example Code

Here is an example demonstrating how to add a picture to a DOCX document:

```go
package main

import (
	"log"

	"github.com/gomutex/godocx"
	"github.com/gomutex/godocx/common/units"
)

func main() {
	document, err := godocx.NewDocument()
	if err != nil {
		log.Fatal(err)
	}

	// Adding a picture to the document
	document.AddPicture("gopher.png", units.Inch(2.9), units.Inch(2.9))

	err = document.SaveTo("pic.docx")
	if err != nil {
		log.Fatal(err)
	}
}
```

## Explanation

### 1. Creating a New Document

```go
document, err := godocx.NewDocument()
if err != nil {
	log.Fatal(err)
}
```

- **`godocx.NewDocument()`**: Initializes a new DOCX document.
- **Error Handling**: Check for errors to ensure the document was created successfully.

### 2. Adding a Picture to the Document

```go
document.AddPicture("gopher.png", units.Inch(2.9), units.Inch(2.9))
```

- **`AddPicture(filePath string, width units.Unit, height units.Unit)`**: Adds a picture to the document.
  - **`filePath`**: Path to the image file to be inserted.
  - **`width`**: Width of the picture, specified as a `units.Inch` (in this example, 2.9 inches).
  - **`height`**: Height of the picture, specified as a `units.Inch` (in this example, 2.9 inches).

### 3. Saving the Document

```go
err = document.SaveTo("pic.docx")
if err != nil {
	log.Fatal(err)
}
```

- **`SaveTo(filename string)`**: Saves the document to a specified file path.
- **Error Handling**: Ensure that the document was saved successfully.

## Key Methods for Pictures

Here are the essential methods for working with pictures in `godocx`:

- **`AddPicture(filePath string, width units.Unit, height units.Unit)`**: Adds an image to the document with specified dimensions.
