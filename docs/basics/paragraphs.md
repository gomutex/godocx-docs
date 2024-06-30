# Paragraphs

This section provides an overview of how to create and manipulate paragraphs using the `godocx` library. We'll cover the basics of adding a paragraphs to a document, styling it.

## Example Code

Here is an example demonstrating how to add and customize paragraphs in a DOCX document:

```go
package main

import (
	"log"

	"github.com/gomutex/godocx"
	"github.com/gomutex/godocx/wml/stypes"
)

func main() {
	document, err := godocx.NewDocument()
	if err != nil {
		log.Fatal(err)
	}

	// Simple addition of paragraph text
	p := document.AddParagraph("Hello, World.")
	r := p.AddText(" Italic")
	r.Italic(true)

	// Add empty paragraph element then later add text with run
	p1 := document.AddEmptyParagraph()
	// Using Run
	r1 := p1.AddText("Hello, Parallel World")
	r1.Color("bc00d6")
	r1.Bold(true)

	document.AddEmptyParagraph().AddText("Strike").Strike(true)
	document.AddEmptyParagraph().AddText("Underline").Underline(stypes.UnderlineSingle)
	document.AddEmptyParagraph().AddText("Highlight").Highlight(stypes.ColorIndexBlue)
	document.AddEmptyParagraph().AddText("Shading").Shading(stypes.ShdSolid, "auto", "FF00A0")

	jp1 := document.AddParagraph("Center Justified")
	jp1.Justification("center")

	err = document.SaveTo("paragraph.docx")
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

### 2. Adding a Paragraph with Text

```go
p := document.AddParagraph("Hello, World.")
r := p.AddText(" Italic")
r.Italic(true)
```

- **`AddParagraph(text string)`**: Adds a new paragraph with the specified text.
AddText(text string): Adds text to the existing paragraph and returns a Run object.
- **`Italic(true)`**: Applies italic formatting to the text. In this example the text " Italic" gets formatted in italic style.

### 3. Adding an Empty Paragraph and Later Adding Text

```go
p1 := document.AddEmptyParagraph()
r1 := p1.AddText("Hello, Parallel World")
r1.Color("bc00d6")
r1.Bold(true)
```

- **`AddEmptyParagraph()`**: Adds a new empty paragraph to the document.
- **`AddText(text string)`**: Adds text to the existing paragraph and returns a Run object.
- **Styles** : The word "Hello, Parallel World" gets the following style:
- **`Color(color string)`**: Sets the text color.
- **`Bold(true)`**: Applies bold formatting to the text.

### 4. Adding Paragraphs with Various Styles

```go
document.AddEmptyParagraph().AddText("Strike").Strike(true)
document.AddEmptyParagraph().AddText("Underline").Underline(stypes.UnderlineSingle)
document.AddEmptyParagraph().AddText("Highlight").Highlight(stypes.ColorIndexBlue)
document.AddEmptyParagraph().AddText("Shading").Shading(stypes.ShdSolid, "auto", "FF00A0")
```

- **`Strike(true)`**: Applies strikethrough text formatting.
- **`Underline(underlineType stypes.Underline)`**: Applies underline formatting.
- **`Highlight(color stypes.ColorIndex)`**: Adds highlight color to the text.
- **`Shading(fill string, val string, color string)`**: Adds shading to the text.

### 5. Justifying Paragraph Text

```go
jp1 := document.AddParagraph("Center Justified")
jp1.Justification("center")
```

- **`Justification(alignment string)`**: Sets the text alignment for the paragraph (e.g., "center").

### 6. Saving the Document

```go
err = document.SaveTo("paragraph.docx")
if err != nil {
	log.Fatal(err)
}
```

- **`SaveTo(filename string)`**: Saves the document to a specified file path.
- **Error Handling**: Ensure that the document was saved successfully.

## Key Methods for Paragraphs

Here are some of the essential methods for working with paragraphs in `godocx`:

- **`AddParagraph(text string)`**: Creates a new paragraph with the provided text.
- **`AddEmptyParagraph()`**: Adds a new, empty paragraph.
- **`AddText(text string)`**: Adds a text run to the paragraph.
- **`Italic(enabled bool)`**: Sets italic formatting for the text.
- **`Bold(enabled bool)`**: Sets bold formatting for the text.
- **`Underline(underlineType stypes.Underline)`**: Sets underline style for the text.
- **`Strike(enabled bool)`**: Applies strikethrough formatting.
- **`Highlight(color stypes.ColorIndex)`**: Adds a highlight color to the text.
- **`Shading(fill string, val string, color string)`**: Applies shading to the text.
- **`Justification(alignment string)`**: Sets the text alignment for the paragraph.

## Further Reading

For more information on the full range of paragraph-related functions available in the `godocx` library, please refer to the [official documentation on pkg.go.dev](https://pkg.go.dev/github.com/gomutex/godocx/docx#Paragraph).
