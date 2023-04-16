import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";

export type MarkDownProps = Omit<ReactMarkdownOptions, "children"> & {
  src: string;
}