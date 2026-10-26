import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { stringifyJsonLd } from "../../lib/storeIdentity";
import { ARTICLE_BODY } from "./body";
import styles from "./article.module.css";

const TITLE = "Cannabis Capsules and Softgels: How to Read the Label, Line by Line";
const CANONICAL = "https://www.indigenousmidtowncannabis.ca/resources/cannabis-capsules-softgels-label-guide";
const DESCRIPTION = "They look like the vitamin bottle in your kitchen cupboard, which is exactly why they deserve a careful read.";

const ARITHMETIC = "2.5 \u00d7 30 = 75";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-10-26",
  dateModified: "2026-10-26",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL,
    url: CANONICAL,
  },
  url: CANONICAL,
  author: { "@type": "Organization", name: "Indigenous Midtown Cannabis" },
  publisher: { "@type": "Organization", name: "Indigenous Midtown Cannabis" },
};

type Block =
  | { type: "h1" | "h2" | "p"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "table"; rows: string[][] };

function isSeparator(line: string) {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim());
}

function splitRow(line: string) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

function parseMarkdown(markdown: string): Block[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let list: { type: "ul" | "ol"; items: string[] } | null = null;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push({ type: "p", text: paragraph.join(" ") });
    paragraph = [];
  };
  const flushList = () => {
    if (!list) return;
    blocks.push(list);
    list = null;
  };

  for (let index = 0; index < lines.length; index += 1) {
    const trimmed = lines[index].trim();
    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }
    if (trimmed.startsWith("|")) {
      flushParagraph();
      flushList();
      const tableLines: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        tableLines.push(lines[index].trim());
        index += 1;
      }
      index -= 1;
      blocks.push({ type: "table", rows: tableLines.filter((row) => !isSeparator(row)).map(splitRow) });
      continue;
    }
    const heading2 = trimmed.match(/^##\s+(.+)$/);
    if (heading2) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h2", text: heading2[1] });
      continue;
    }
    const heading1 = trimmed.match(/^#\s+(.+)$/);
    if (heading1) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h1", text: heading1[1] });
      continue;
    }
    const bullet = trimmed.match(/^-\s+(.+)$/);
    if (bullet) {
      flushParagraph();
      if (!list || list.type !== "ul") {
        flushList();
        list = { type: "ul", items: [] };
      }
      list.items.push(bullet[1]);
      continue;
    }
    const numbered = trimmed.match(/^\d+\.\s+(.+)$/);
    if (numbered) {
      flushParagraph();
      if (!list || list.type !== "ol") {
        flushList();
        list = { type: "ol", items: [] };
      }
      list.items.push(numbered[1]);
      continue;
    }
    flushList();
    paragraph.push(trimmed);
  }
  flushParagraph();
  flushList();
  return blocks;
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean).map((token, index) => {
    const key = `${keyPrefix}-${index}`;
    const strong = token.match(/^\*\*(.+)\*\*$/);
    if (strong) return <strong key={key}>{strong[1]}</strong>;
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <Link key={key} href={link[2]}>{link[1]}</Link>;
    return token;
  });
}

function renderBlock(block: Block, index: number): ReactNode {
  const key = `block-${index}`;
  if (block.type === "h1") return <h1 key={key}>{block.text}</h1>;
  if (block.type === "h2") return <h2 key={key}>{block.text}</h2>;
  if (block.type === "p") return <p key={key}>{renderInline(block.text, key)}</p>;
  if (block.type === "ul") {
    return <ul key={key}>{block.items.map((item, itemIndex) => <li key={itemIndex}>{renderInline(item, `${key}-${itemIndex}`)}</li>)}</ul>;
  }
  if (block.type === "ol") {
    return <ol key={key}>{block.items.map((item, itemIndex) => <li key={itemIndex}>{renderInline(item, `${key}-${itemIndex}`)}</li>)}</ol>;
  }
  if (block.type !== "table") return null;
  const [header, ...rows] = block.rows;
  if (!header) return null;
  return (
    <div key={key} className={styles.tableWrap}>
      <table>
        <thead>
          <tr>{header.map((cell, cellIndex) => <th key={cellIndex} scope="col">{renderInline(cell, `${key}-h-${cellIndex}`)}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{renderInline(cell, `${key}-${rowIndex}-${cellIndex}`)}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const blocks = parseMarkdown(ARTICLE_BODY);
const heading = blocks.find((block) => block.type === "h1");
if (!heading || heading.type !== "h1" || heading.text !== TITLE) {
  throw new Error("Article H1 does not match the required title");
}
if (!ARTICLE_BODY.includes(ARITHMETIC) || ARTICLE_BODY.includes("3.5") || DESCRIPTION.includes("3.5") || TITLE.includes("3.5")) {
  throw new Error("Article copy failed the label arithmetic check");
}

export default function CannabisCapsulesSoftgelsLabelGuidePage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(articleJsonLd) }} />
      <Navbar />
      <article className={styles.article}>{blocks.map(renderBlock)}</article>
      <Footer />
    </main>
  );
}
