import getMynquiry from "../actions/getMyInquiries";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import MyInquiryClient from "./MyInquiry";

const MyInquiry = async () => {
  const myInquiries = await getMynquiry();

  return (
    <ClientOnly>
      <Container>
        <MyInquiryClient myInquiries={myInquiries} />
      </Container>
    </ClientOnly>
  );
};

export default MyInquiry;

export const dynamic = "force-dynamic";
