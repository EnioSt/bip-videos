import { Outlet } from "react-router-dom";
import banner from "../../assets/bip.png";

const Banner = () => {
  return (
    <>
      <header>
        <div>
          <img
            src={banner}
            alt="imagem do banner"
            className="w-full h-40 md:h-60 object-cover"
          />
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Banner;
