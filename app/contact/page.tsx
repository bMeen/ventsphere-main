import { Metadata } from "next";
import Container from "../_components/Container";
import Tag from "../_components/Tag";
import Form from "../_components/contactUs/Form";

export const metadata: Metadata = {
  title: "Contact",
};

function Page() {
  return (
    <section className="px-4 pt-24 pb-36 bg-isabelline">
      <Container>
        <div className="grid grid-cols-2 gap-28">
          <div className="w-[549px] space-y-7">
            <Tag>JOIN VENTSPHERE</Tag>
            <h2 className="text-5xl">Partner With Us</h2>
            <div className="w-[417px] text-lg">
              <p className="mb-7">
                Fill out the form and our team will get back to you shortly to
                discuss how we can support your growth and success.
              </p>

              <p>
                For more inquiries, reach us at <br />
                <span className="font-medium text-space-cadet">
                  contact@ventsphere.com.
                </span>
              </p>
            </div>
          </div>
          <Form />
        </div>
      </Container>
    </section>
  );
}

export default Page;
