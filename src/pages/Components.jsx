import Value from "../components/Value";
import Adder from "../components/Adder";
import Timer from "../components/Timer";
import { useState } from "react";
import Temperatures from "../components/Temperatures";

const Components = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div
      style={{
       
        backgroundImage: "url('/bg.jpg')", // ใส่ภาพพื้นหลังใน public/bg.jpg
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      {/* หัวข้อหลัก */}
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 30px",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "22px",
          textAlign: "center",
        }}
      >
        REACT COMPONENTS
      </div>

      {/* พื้นที่หลัก: Counter + Timer ทางซ้าย, Adder ทางขวา */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "30px",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {/* กลุ่มซ้าย: Counter + Timer */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#e8e8e8",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            <Value name="COUNTER" value={counter} setValue={setCounter} />
          </div>

          <div
            style={{
              backgroundColor: "#e8e8e8",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            <Timer />
          </div>
        </div>

        {/* ด้านขวา: Adder */}
        <div
          style={{
            backgroundColor: "#e8e8e8",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          <Adder initA={0} initB={0} />
        </div>
      </div>

      {/* ด้านล่าง: Temperature */}
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          backgroundColor: "#e8e8e8",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        <Temperatures />
      </div>

      {/* ชื่อด้านล่าง */}
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "8px 20px",
          borderRadius: "6px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
      </div>
    </div>
  );
};

export default Components;