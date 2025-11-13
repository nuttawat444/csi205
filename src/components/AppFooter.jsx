import f from "/img/F.png";
import ig from "/img/IG.png";

const AppFooter = () => {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>SPU-SIT-CSI</h3>
      <div>
        <a href="https://www.instagram.com/nuttawatx_/" target="_blank">
          <img src={ig} style={{ width: "30px", height: "30px" }} />
        </a>
        <a href="https://www.facebook.com/boeing.gtavrzo.9" target="_blank">
          <img src={f} style={{ width: "30px", height: "30px" }} />
        </a>
      </div>
    </>
  );
};

export default AppFooter;
