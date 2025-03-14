import Container from "../Container";
import Tag from "../Tag";
import Slider from "./Slider";

function Testimonials() {
  return (
    <section className="py-32 bg-isabelline">
      <Container>
        <div className="w-[560px] mx-auto text-center mb-32   space-y-6">
          <Tag>TESTIMONIALS</Tag>
          <h2>Success Stories from Visionary Founders</h2>
        </div>
        <Slider />
      </Container>
    </section>
  );
}

export default Testimonials;
