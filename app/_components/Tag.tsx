function Tag({ children }: { children: React.ReactNode }) {
  return (
    <p className="tag tracking-[0.11em] font-medium text-sm text-olive-green uppercase">
      {children}
    </p>
  );
}

export default Tag;
