import Container from "./Container";

function Copyright() {
  return (
    <div className="p-2 lg:p-4">
      <Container className="flex flex-wrap justify-between items-center">
        <p className="text-[9px] md:text-xs lg:text-sm ">
          © 2024 Ventsphere Inc. All Rights Reserved.
        </p>
        <p className="text-[9px] md:text-xs lg:text-sm">
          Terms & Condition <span className="mx-[5px] lg:mx-[10px]">•</span>{" "}
          Privacy Policy
        </p>
      </Container>
    </div>
  );
}

export default Copyright;
