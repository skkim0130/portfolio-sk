export default function Section({ id, children, className, ...props }) {
  const sectionClass = id || "";

  return (
    <section
      id={id}
      className={`section ${sectionClass} ${className || ""}`}
      {...props}
    >
      {children}
    </section>
  );
}
