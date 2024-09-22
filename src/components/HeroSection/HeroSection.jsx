import banner from "../../assets/images/student.png";
export default function HeroSection() {
  return (
    <>
      <div className="grid md:grid-cols-2 items-center w-10/12 mx-auto text-white">
        <div>
          <h1 className="text-4xl lg:text-[56px] font-bold leading-[1.1] mb-8">
            Empowering the Future of Learning by Putting Students First.
          </h1>
          <a className="px-5 py-2.5 bg-[#038C61] rounded-[44px]" href="#">Learn More</a>
        </div>
        <div>
          <img
            className="md:order-2 object-cover ml-auto animate-updown w-[500px] h-[500px]"
            src={banner}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
