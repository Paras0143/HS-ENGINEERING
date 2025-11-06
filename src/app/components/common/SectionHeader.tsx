type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-50 sm:text-4xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="text-sm text-gray-600 dark:text-slate-300">{subtitle}</p>
      ) : null}
    </div>
  );
}


