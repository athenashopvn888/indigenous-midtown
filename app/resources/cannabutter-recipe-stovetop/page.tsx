import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { stringifyJsonLd } from "../../lib/storeIdentity";
import { ARTICLE_BODY } from "./body";
import styles from "./article.module.css";

const TITLE = "Cannabutter Recipe on the Stovetop: The Slow, Low, No-Drama Method";
const CANONICAL = "https://www.indigenousmidtowncannabis.ca/resources/cannabutter-recipe-stovetop";
const DESCRIPTION = "Every kitchen experiment with cannabis starts in the same place: a pot of butter, a pile of flower and a lot of questions.";
const LAST_CHECKED = "Last checked: October 30, 2026";
const ALLOWED_HREFS = new Set([
  "https://inspection.canada.ca/en/plant-varieties/plants-novel-traits/applicants/directive-94-08/biology-documents/cannabis-sativa",
  "/resources/weed-flower-guide",
  "/resources/cannabis-capsules-softgels-label-guide",
]);

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
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
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
    if (link) {
      const href = link[2];
      if (href.startsWith("/")) return <Link key={key} href={href}>{link[1]}</Link>;
      return <a key={key} href={href}>{link[1]}</a>;
    }
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
const hrefs = [...ARTICLE_BODY.matchAll(/\]\(([^)]+)\)/g)].map((match) => match[1]);
if (!heading || heading.type !== "h1" || heading.text !== TITLE) {
  throw new Error("Article H1 does not match the required title");
}
if (!blocks.some((block) => block.type === "p" && block.text === LAST_CHECKED)) {
  throw new Error("Article is missing the visible Last checked line");
}
const blockedToken = ["3", ".", "5"].join("");
if (
  ARTICLE_BODY.includes(blockedToken)
  || DESCRIPTION.includes(blockedToken)
  || TITLE.includes(blockedToken)
  || DESCRIPTION.length > 155
  || hrefs.some((href) => !ALLOWED_HREFS.has(href))
  || ARTICLE_BODY.includes("Farmers Link")
) {
  throw new Error("Article copy failed the publication check");
}

export default function CannabutterRecipeStovetopPage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(articleJsonLd) }} />
      <Navbar />
      <article className={styles.article}>{blocks.map(renderBlock)}</article>
      <Footer />
    </main>
  );
}
