import Button from "../Button";
import Container from "../Container";
import Tag from "../Tag";
import Service from "./Service";

function Services() {
  return (
    <section id="Service" className="py-32 bg-isabelline px-4">
      <Container>
        <div className="space-y-24 mb-32">
          <div className="w-[560px] mx-auto text-center space-y-8">
            <Tag>What we do</Tag>
            <h2>Financial Backing You Need to Succeed</h2>
            <p className="w-[28.375rem] mx-auto">
              We understand that financial support is foundational to startup
              growth, which is why we offer:
            </p>
          </div>
          <Service />
        </div>
        <Button className="mx-auto" type="primary">
          Partner with Us
        </Button>
      </Container>
    </section>
  );
}

export default Services;
