const Footer = () => {
  return (
    <div className="bg-neutral-900 ">
      <div className="mx-auto max-w-[1420px] xl:px-20 md:px-10 px-6 py-14 flex flex-col justify-between md:flex-row ">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-neutral-200 text-xl font-bold pb-4">영선산업</p>
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex flex-col items-center gap-2 md:items-start">
              <p className="text-neutral-200 text-sm">CONTAT US</p>
              <p className="text-neutral-200 text-xl font-bold">010-4945-7422</p>
            </div>
            <p className="text-neutral-200 text-sm">상담가능시간: 평일 10:00 ~ 18:00</p>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex gap-4 flex-col md:flex-row items-center">
            <p className="text-neutral-200 text-sm md:pr-4 md:border-r">대표 김영선</p>
            <p className="text-neutral-200 text-sm md:pr-4 md:border-r">사업자 번호 305-26-32033</p>
            <p className="text-neutral-200 text-sm">주소 대전 동구 가양2동 408-7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
