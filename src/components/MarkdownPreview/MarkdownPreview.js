import React, { useState } from "react";
import "./MarkdownPreview.scss";
import ReactMarkdown from "react-markdown";

export default function MarkdownPreview() {
    const [markdown, setMarkdown] = useState("# Markdown");

    return (
        <section className="markdown-preview">
            <div className="editor-wrap">
                <h3>Editor</h3>
                <textarea
                    name="editor"
                    id="editor"
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                ></textarea>
            </div>
            <div className="preview-wrap">
                <h3>Preview</h3>
                <article id="preview">
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </article>
            </div>
        </section>
    )
}
