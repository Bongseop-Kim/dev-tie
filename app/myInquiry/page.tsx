import getInquires from "../actions/getMyInquiries";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import MyInquiryClient from "./MyInquiry";

const MyInquiry = async () => {
  const myInquiries = await getInquires();

  return (
    <ClientOnly>
      <Container>
        <MyInquiryClient myInquiries={myInquiries} />
      </Container>
    </ClientOnly>
  );
};

export default MyInquiry;
