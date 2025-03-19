import Container from "./Container";

function Copyright() {
  return (
    <div className="px-4 py-8 text-sm ">
      <Container className="flex justify-between items-center">
        <p>© 2024 Ventsphere Inc. All Rights Reserved.</p>
        <p>
          Terms & Condition <span className="mx-[10px]">•</span> Privacy Policy
        </p>
      </Container>
    </div>
  );
}

export default Copyright;
