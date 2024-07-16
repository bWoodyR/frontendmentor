import Image from "next/image";

const QRCodeComponent = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-light-gray font-outfit">
      <div className="flex flex-col gap-4 p-4 rounded-[20px] bg-white text-black w-[320px] text-center ">
        <Image src="/assets/images/qr-code-component/image-qr-code.png" alt="qr-code" width={100} height={50} className="w-full rounded-[20px]" />
        <h1 className="font-bold text-2xl text-qr-dark-blue px-2">Improve your front-end skill by building projects</h1>
        <p className="font-normal text-[15px] text-qr-grayish-blue px-3 mb-3">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </section>
  );
};

export default QRCodeComponent;
