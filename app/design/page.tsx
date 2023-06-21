import Banner from "../components/Banner";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import DesignClient from "./DesignClient";

const Design = () => {
  return (
    <ClientOnly>
      <Banner
        img="/images/designBack.png"
        title="디자인"
        p1="자유롭게 이미지를 넣고 색상을 선택하여"
        p2="원하는 상품의 디자인을 손쉽게 구현할 수 있습니다."
      />
      <Container>
        <DesignClient />
      </Container>
    </ClientOnly>
  );
};

export default Design;
