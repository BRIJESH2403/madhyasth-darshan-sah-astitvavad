"use client";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="w-full light-bg-1 py-4 px-6">
      <div className="container flex flex-wrap items-center">

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div key={index} className="flex items-center">

              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition hover:text-(--color-text-title)"
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "35px",
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "35px",
                  }}
                  className={`${
                    isLast
                      ? "text-(--color-primary)"
                      : "text-(--color-text-body)"
                  }`}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span className="mx-2 text-(--color-text-muted)">
                  &gt;
                </span>
              )}
            </div>
          );
        })}

      </div>
    </div>
  );
}