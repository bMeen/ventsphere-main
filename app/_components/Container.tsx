function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
}

export default Container;
