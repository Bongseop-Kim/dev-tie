import Container from "./components/Container";
import ClientOnly from "./components/ClientOnly";
import HomeClient from "./HomeClient";
import Carousel from "./components/Carousel";

export default function Home() {
  const images = [
    { id: 1, imageUrl: "/images/mainBg.jpg", routerUrl: "/" },
    { id: 2, imageUrl: "/images/contactBg.png", routerUrl: "/" },
  ];
  return (
    <ClientOnly>
      <Carousel images={images} />
      <Container>
        <HomeClient />
      </Container>
    </ClientOnly>
  );
}
