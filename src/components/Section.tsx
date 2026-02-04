import * as React from "react";

type SectionProps = {
  id?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  contentClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 ${className}`}>
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        {(title || subtitle) && (
          <header className="text-center">
            {title ? (
              <h2 className="text-4xl font-semibold tracking-tight lg:text-5xl">
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                {subtitle}
              </p>
            ) : null}
          </header>
        )}

        <div className={`mt-12 ${contentClassName}`}>{children}</div>
      </div>
    </section>
  );
}
