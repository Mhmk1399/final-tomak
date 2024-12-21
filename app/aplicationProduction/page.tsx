import Banner from "@/components/services/Banner";
import WhyUs from "../../components/services/WhyUs";
import Options from "../../components/services/Options";
import KindOfServices from "@/components/services/KindOfServices";

const Page = () => {
  return (
    <div className="mx-8 my-32">
      <Banner
        src="/assets/images/heade-application-development-min-2048x725.jpg"
        text="Services"
        category="Services"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <div className="mt-12">
        <Options />
      </div>
      <div className="mt-12">
        <WhyUs />
      </div>
      <div className="mt-12">
        <KindOfServices />
        </div>
    </div>
  );
};

export default Page;
