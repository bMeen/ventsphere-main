function Tag({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={`tag tracking-[0.11em] font-medium text-xs md:text-sm text-olive-green uppercase ${className}`}
    >
      {children}
    </p>
  );
}

export default Tag;
