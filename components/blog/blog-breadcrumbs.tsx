import Link from "next/link";

const olClass =
  "m-0 flex list-none flex-wrap items-center gap-x-2 gap-y-1 p-0 text-[11px] font-medium uppercase tracking-[0.22em] text-lux-ink/45";

export function BlogBreadcrumbs({
  items,
}: {
  items: readonly { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className={olClass}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-x-2">
              {item.href && !isLast ?
                <Link href={item.href} className="transition-colors hover:text-lux-ink hover:underline">
                  {item.label}
                </Link>
              : <span className={isLast ? "text-lux-ink/58" : undefined}>{item.label}</span>}
              {!isLast ? <span aria-hidden className="text-lux-ink/24">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
