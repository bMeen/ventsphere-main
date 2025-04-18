type FooterNavProps = {
  heading: string;
  lists: string[];
  className?: string;
};

function FooterNav({ heading, lists, className }: FooterNavProps) {
  return (
    <div className={`space-y-3 lg:space-y-7 ${className}`}>
      <p className="text-base lg:text-lg font-medium text-space-cadet">
        {heading}
      </p>
      <ul className="space-y-2 lg:space-y-5 text-sm lg:text-base">
        {lists.map((li, i) => (
          <li key={i}>{li}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterNav;
