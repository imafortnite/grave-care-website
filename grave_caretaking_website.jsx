"use client";
import React, { useState } from "react";

export default function GraveCareSite() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [zip, setZip] = useState("");
  const [zipResult, setZipResult] = useState(null);

  const serviceZips = ["18966", "18974", "18954", "19090"];

  const checkZip = () => {
    if (serviceZips.includes(zip)) {
      setZipResult("We service your area ✅");
    } else {
      setZipResult("Contact us to confirm availability in your area.");
    }
  };

  const plans = [
    { name: "Basic Visit", price: "$75", desc: "Grave cleaning and simple maintenance." },
    { name: "Full Care Package", price: "$150", desc: "Includes flowers, decorations, cleaning, and photo update." },
    { name: "Monthly Care", price: "$400/mo", desc: "Weekly visits with full maintenance and seasonal decorations." },
  ];

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>Eternal Care Services</h1>
      <p>Respectful, reliable grave care for your loved ones.</p>

      <h2>Pricing</h2>
      {plans.map((plan, i) => (
        <div key={i} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }} onClick={() => setSelectedPlan(plan)}>
          <h3>{plan.name}</h3>
          <p>{plan.price}</p>
          <p>{plan.desc}</p>
        </div>
      ))}

      <h2>Check Service Area</h2>
      <input value={zip} onChange={(e) => setZip(e.target.value)} placeholder="ZIP code" />
      <button onClick={checkZip}>Check</button>
      {zipResult && <p>{zipResult}</p>}

      <h2>Our Work</h2>
      <img src="/grave.jpg" width="300" />
      <p>After Care Example</p>

      <h2>Book</h2>
      <button>{selectedPlan ? `Book ${selectedPlan.name}` : "Select a Plan First"}</button>
    </div>
  );
}
