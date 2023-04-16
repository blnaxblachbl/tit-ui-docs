import { useState, useEffect } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import highligh from "rehype-highlight";
import toc from "remark-toc";
//@ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//@ts-ignore
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";

const Container = styled.div`
  display: block;
  .table-container {
    height: 400px;
    width: 400px;
    margin: 0 auto;
  }

  ol {
    padding-inline-start: 12px;
  }
  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid #ccc;
    padding: 5px;
  }
`;

export const MarkDown = ({ children }: ReactMarkdownOptions) => {
  return (
    <Container>
      <ReactMarkdown
        children={children}
        remarkPlugins={[remarkGfm, highligh, toc]}
        rehypePlugins={[]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={oneDark} // theme
                language={match[1]}
                PreTag="section" // parent tag
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </Container>
  );
};
