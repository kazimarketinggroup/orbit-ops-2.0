"use client";

import Image from "next/image";
import Link from "next/link";

export type MegaItem = {
  icon: string;
  label: string;
  description: string;
  href: string;
};

export type MegaMenuContent = {
  /** Heading above the primary column(s). */
  title: string;
  items: MegaItem[];
  /** Optional secondary column, used by the Platform menu. */
  moreTitle?: string;
  moreItems?: MegaItem[];
  image: string;
  /** Primary items are laid out in two columns when there are more than three. */
  columns?: 1 | 2;
};

const iconPaths: Record<string, string> = {
  server: "M3 5h14v4H3zM3 11h14v4H3zM6 7h.01M6 13h.01",
  doc: "M5 2.5h6l4 4v11H5zM11 2.5V7h4",
  code: "M7 6l-4 4 4 4M13 6l4 4-4 4",
  warehouse: "M3 8l7-4 7 4v9H3zM7 17v-5h6v5",
  integrate: "M7 7a3 3 0 014 0l2 2a3 3 0 010 4M13 13a3 3 0 01-4 0l-2-2a3 3 0 010-4",
  flow: "M4 5h5M4 10h9M4 15h5M15 7v6M13 10h4",
  ai: "M10 2v3M10 15v3M3.5 6l2.5 1.5M14 12.5L16.5 14M3.5 14L6 12.5M14 7.5L16.5 6M10 7a3 3 0 100 6 3 3 0 000-6z",
  consult: "M10 2.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM10 7v3.5l2.5 1.5",
  bank: "M3 8l7-4 7 4M5 8v7M9 8v7M15 8v7M3 17h14",
  building: "M4 17V4h8v13M12 9h4v8M6.5 7h3M6.5 10h3M6.5 13h3",
  briefcase: "M3 7h14v9H3zM7.5 7V5h5v2",
  truck: "M2 6h9v8H2zM11 9h4l2 2.5V14h-6M5 16.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM14 16.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
  pill: "M6.5 3.5a3.5 3.5 0 015 0l5 5a3.5 3.5 0 01-5 5l-5-5a3.5 3.5 0 010-5zM9 6l5 5",
  shield: "M10 2.5l6 2.5v5c0 4-3 6.5-6 7.5-3-1-6-3.5-6-7.5V5z",
  grid: "M3 3h6v6H3zM11 3h6v6h-6zM3 11h6v6H3zM11 11h6v6h-6z",
};

function MenuIcon({ name }: { name: string }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}

function MenuLink({ item }: { item: MegaItem }) {
  return (
    <Link
      href={item.href}
      className="group flex gap-3 rounded-md p-2 transition-colors hover:bg-zinc-50"
    >
      <span className="mt-0.5 text-zinc-500 transition-colors group-hover:text-zinc-900">
        <MenuIcon name={item.icon} />
      </span>
      <span>
        <span className="block text-xs font-semibold text-zinc-900">
          {item.label}
        </span>
        <span className="mt-0.5 block text-[11px] leading-4 text-zinc-500">
          {item.description}
        </span>
      </span>
    </Link>
  );
}

export default function MegaMenu({ content }: { content: MegaMenuContent }) {
  const twoCol = (content.columns ?? (content.items.length > 3 ? 2 : 1)) === 2;

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-8 lg:grid-cols-[1fr_360px] lg:px-8">
      <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:gap-12">
        <div>
          <p className="mb-3 text-[10px] font-semibold tracking-wide text-zinc-400">
            {content.title}
          </p>
          <div
            className={`grid gap-x-10 gap-y-1 ${twoCol ? "sm:grid-cols-2" : ""}`}
          >
            {content.items.map((item) => (
              <MenuLink key={item.label} item={item} />
            ))}
          </div>
        </div>

        {content.moreItems ? (
          <div className="sm:w-52">
            <p className="mb-3 text-[10px] font-semibold tracking-wide text-zinc-400">
              {content.moreTitle}
            </p>
            <div className="grid gap-1">
              {content.moreItems.map((item) => (
                <MenuLink key={item.label} item={item} />
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="relative hidden aspect-[16/11] overflow-hidden rounded-lg lg:block">
        <Image
          src={content.image}
          alt=""
          fill
          sizes="360px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
