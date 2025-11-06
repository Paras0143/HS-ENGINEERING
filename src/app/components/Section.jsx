export default function Section({ 
  id, 
  children, 
  className = "", 
  backgroundColor = "white",
  minHeight = "min-h-screen" 
}) {
  const bgClass = backgroundColor === "white" 
    ? "bg-white dark:bg-slate-800" 
    : "bg-sky-50 dark:bg-slate-900";

  return (
    <section
      id={id}
      className={`${minHeight} flex items-center justify-center ${bgClass} ${className}`}
    >
      {children}
    </section>
  );
}
