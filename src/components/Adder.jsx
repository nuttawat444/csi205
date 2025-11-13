import { useEffect, useState } from "react";
import Value from "./Value";

function Adder({ name, initA, initB }) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => setA(initA || 0), [initA]);
  useEffect(() => setB(initB || 0), [initB]);

  return (
    <div
      className="border border-black border-2 rounded-3 mx-auto p-2 mt-3"
      style={{ width: "fit-content" }}
    >
      <h1 className="text-center fw-bold text-primary">{name || "ADDER"}</h1>
      <div className="d-flex justify-content-between gap-2">
        <span className="badge bg-secondary fs-3">A = {a}</span>
        <span className="badge bg-primary fs-3">A + B = {a + b}</span>
        <span className="badge bg-secondary fs-3">B = {b}</span>
      </div>
      <div className="d-flex gap-2 justify-content-center">
        <div>
          <Value name="A" value={a} setValue={setA} />
        </div>
        <div>
          <Value name="B" value={b} setValue={setB} />
        </div>
      </div>
    </div>
  );
}

export default Adder;
