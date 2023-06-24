import getInquiryById from "@/app/actions/getInquiryById";
import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import DetailClient from "./DetailClient";
import Banner from "@/app/components/Banner";

interface IParams {
  inquiryId?: number;
}

const Detail = async ({ params }: { params: IParams }) => {
  const inquiry = await getInquiryById(params);
  return (
    <ClientOnly>
      <Banner
        img="/images/contactBg.png"
        title="견적 및 문의"
        p1="영선산업에서 제공하는 최상의 품질과 기술력을 직접 경험해보세요."
        p2="문의를 남겨주시면 최대한 빠르게 답변드리겠습니다."
      />
      <Container>
        <DetailClient inquiry={inquiry} />
      </Container>
    </ClientOnly>
  );
};

export default Detail;
