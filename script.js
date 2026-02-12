const fs = require("fs");
const {
    Document,
    Packer,
    Paragraph,
    TextRun,
    HeadingLevel,
    Table,
    TableRow,
    TableCell,
    WidthType,
    AlignmentType,
    Header,
    Footer,
    PageNumber,
    TableOfContents,
    LevelFormat,
    PageOrientation,
} = require("docx");

const doc = new Document({
    numbering: {
        config: [
            {
                reference: "bullet-list",
                levels: [
                    {
                        level: 0,
                        format: LevelFormat.BULLET,
                        text: "•",
                        alignment: AlignmentType.LEFT,
                        style: {
                            paragraph: {
                                indent: { left: 720, hanging: 360 },
                            },
                        },
                    },
                ],
            },
            {
                reference: "number-list",
                levels: [
                    {
                        level: 0,
                        format: LevelFormat.DECIMAL,
                        text: "%1.",
                        alignment: AlignmentType.LEFT,
                        style: {
                            paragraph: {
                                indent: { left: 720, hanging: 360 },
                            },
                        },
                    },
                ],
            },
        ],
    },

    sections: [
        {
            properties: {
                page: {
                    size: {
                        width: 12240,
                        height: 15840,
                    },
                },
            },

            headers: {
                default: new Header({
                    children: [
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [new TextRun("DOCX Generator Project")],
                        }),
                    ],
                }),
            },

            footers: {
                default: new Footer({
                    children: [
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun("Page "),
                                new TextRun({
                                    children: [PageNumber.CURRENT],
                                }),
                            ],
                        }),
                    ],
                }),
            },

            children: [
                // Title
                new Paragraph({
                    text: "Professional DOCX Report",
                    heading: HeadingLevel.HEADING_1,
                }),

                new Paragraph("Generated using docx-js"),

                // TOC
                new Paragraph({
                    children: [new TextRun("")],
                }),

                new TableOfContents("Table of Contents", {
                    hyperlink: true,
                    headingStyleRange: "1-3",
                }),

                // Section 1
                new Paragraph({
                    text: "Introduction",
                    heading: HeadingLevel.HEADING_2,
                }),

                new Paragraph(
                    "This document is automatically generated using Node.js and docx library."
                ),

                // Bullet List
                new Paragraph({
                    text: "Easy to use",
                    numbering: { reference: "bullet-list", level: 0 },
                }),
                new Paragraph({
                    text: "Professional formatting",
                    numbering: { reference: "bullet-list", level: 0 },
                }),

                // Number List
                new Paragraph({
                    text: "Install dependencies",
                    numbering: { reference: "number-list", level: 0 },
                }),
                new Paragraph({
                    text: "Run the script",
                    numbering: { reference: "number-list", level: 0 },
                }),

                // Table Section
                new Paragraph({
                    text: "Data Table",
                    heading: HeadingLevel.HEADING_2,
                }),

                new Table({
                    width: { size: 9360, type: WidthType.DXA },
                    columnWidths: [4680, 4680],
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    width: { size: 4680, type: WidthType.DXA },
                                    children: [new Paragraph("Name")],
                                }),
                                new TableCell({
                                    width: { size: 4680, type: WidthType.DXA },
                                    children: [new Paragraph("Score")],
                                }),
                            ],
                        }),
                        new TableRow({
                            children: [
                                new TableCell({
                                    width: { size: 4680, type: WidthType.DXA },
                                    children: [new Paragraph("Alice")],
                                }),
                                new TableCell({
                                    width: { size: 4680, type: WidthType.DXA },
                                    children: [new Paragraph("95")],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        },
    ],
});

// Generate file
Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("Report.docx", buffer);
    console.log("Document created successfully!");
});
