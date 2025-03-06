import Container from "../Container";
import Tag from "../Tag";
import Content from "./Content";

function AboutUs() {
  return (
    <section id="About us" className="py-40 px-4">
      <Container>
        <div className="w-[560px] mx-auto text-center mb-28   space-y-8">
          <Tag>WHO WE ARE</Tag>
          <h2>Your Dedicated Partner in Startup Success</h2>
        </div>
        <Content />
      </Container>
    </section>
  );
}

export default AboutUs;
