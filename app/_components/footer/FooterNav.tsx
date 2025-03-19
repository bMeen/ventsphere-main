type FooterNavProps = {
  heading: string;
  lists: string[];
};

function FooterNav({ heading, lists }: FooterNavProps) {
  return (
    <div className="space-y-7">
      <p className="text-lg font-medium text-space-cadet">{heading}</p>
      <ul className="space-y-5">
        {lists.map((li, i) => (
          <li key={i}>{li}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterNav;
