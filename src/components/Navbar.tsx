"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MegaMenu, { type MegaMenuContent } from "@/components/MegaMenu";
import {
  industryMenu,
  platformMenu,
  solutionsMenu,
} from "@/lib/navigation";

type NavLink = {
  label: string;
  href: string;
  menu?: MegaMenuContent;
};

const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Platform", href: "/platform", menu: platformMenu },
  { label: "Solutions", href: "/solutions", menu: solutionsMenu },
  { label: "Industry", href: "/industry", menu: industryMenu },
  { label: "Case Study", href: "/case-study" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  // Small grace period so moving the pointer from the trigger into the
  // panel doesn't close the menu mid-travel.
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  // Stop the page scrolling behind the open drawer.
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  const active = navLinks.find((link) => link.label === openMenu);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-black/[.06] bg-white/80 backdrop-blur-md"
      onMouseLeave={scheduleClose}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <Image
            src="/images/home/updatedLogo.png"
            alt="OrbitOps"
            width={1861}
            height={402}
            className="h-5 w-auto sm:h-6"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-expanded={link.menu ? openMenu === link.label : undefined}
              onMouseEnter={() => {
                cancelClose();
                setOpenMenu(link.menu ? link.label : null);
              }}
              onFocus={() => setOpenMenu(link.menu ? link.label : null)}
              className={`text-xs font-semibold transition-colors hover:text-zinc-950 ${
                openMenu === link.label ? "text-zinc-950" : "text-zinc-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#signin"
            className="hidden text-xs font-semibold text-zinc-700 hover:text-zinc-950 lg:block"
          >
            Sign in
          </Link>
          <Link
            href="/demo"
            className="rounded-sm bg-[#0b1220] px-3 py-2 text-[11px] font-semibold text-white transition-colors hover:bg-[#1a2436] sm:px-4"
          >
            Book a Consultation
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="-mr-1 flex h-9 w-9 items-center justify-center rounded-sm text-zinc-800 transition-colors hover:bg-zinc-100 lg:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden
            >
              {mobileOpen ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="max-h-[calc(100vh-57px)] overflow-y-auto overscroll-contain border-t border-black/[.06] bg-white lg:hidden">
          <nav className="px-6 py-4">
            {navLinks.map((link) =>
              link.menu ? (
                <div
                  key={link.label}
                  className="border-b border-black/[.06] last:border-0"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 py-3.5 text-sm font-semibold text-zinc-900"
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`${
                        mobileSection === link.label ? "Collapse" : "Expand"
                      } ${link.label} links`}
                      aria-expanded={mobileSection === link.label}
                      onClick={() =>
                        setMobileSection((current) =>
                          current === link.label ? null : link.label,
                        )
                      }
                      className="-mr-2 flex h-10 w-10 items-center justify-center text-zinc-400"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${
                          mobileSection === link.label ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      >
                        <path d="M6 8l4 4 4-4" />
                      </svg>
                    </button>
                  </div>

                  {mobileSection === link.label ? (
                    <div className="pb-3">
                      {[
                        ...link.menu.items,
                        ...(link.menu.moreItems ?? []),
                      ].map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2.5 pl-3 text-xs text-zinc-600 hover:text-zinc-950"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-black/[.06] py-3.5 text-sm font-semibold text-zinc-900 last:border-0"
                >
                  {link.label}
                </Link>
              ),
            )}

            <Link
              href="#signin"
              onClick={() => setMobileOpen(false)}
              className="mt-4 block text-sm font-semibold text-zinc-600"
            >
              Sign in
            </Link>
          </nav>
        </div>
      ) : null}

      {active?.menu ? (
        <div
          className="absolute inset-x-0 top-full hidden border-t border-black/[.06] bg-white shadow-[0_20px_40px_-24px_rgba(15,23,42,0.35)] lg:block"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <MegaMenu content={active.menu} />
        </div>
      ) : null}
    </header>
  );
}
