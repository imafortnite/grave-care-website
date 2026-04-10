import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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

  const addons = [
    "Holiday Decorations (+$40)",
    "Premium Flower Arrangement (+$60)",
    "Same-Day Visit (+$50)",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <div className="bg-green-900 text-white p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Eternal Care Services</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Respectful, reliable grave care for your loved ones when you can't be there.
        </p>
        <Button className="mt-6">Get Started</Button>
      </div>

      {/* Pricing */}
      <div className="bg-white p-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <Card key={i} className="rounded-2xl shadow-xl cursor-pointer border-2" onClick={() => setSelectedPlan(plan)}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-green-900 mb-2">{plan.price}</p>
                <p>{plan.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* ZIP Checker */}
      <div className="bg-gray-100 p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Check Service Availability</h2>
        <div className="max-w-md mx-auto">
          <input
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="Enter ZIP code"
            className="w-full p-2 border rounded mb-3"
          />
          <Button onClick={checkZip}>Check</Button>
          {zipResult && <p className="mt-4">{zipResult}</p>}
        </div>
      </div>

      {/* Add-ons */}
      <div className="bg-white p-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Add-On Services</h2>
        <div className="flex flex-col gap-3 max-w-md mx-auto">
          {addons.map((addon, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-xl shadow">
              {addon}
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-gray-50 p-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { src: "/mnt/data/e7ae1977-7b8a-4311-a57d-e289225dfb24.png", label: "After Care Example" }
          ].map((img, i) => (
            <div key={i} className="bg-white rounded-xl shadow overflow-hidden">
              <img src={img.src} alt={img.label} className="w-full h-48 object-cover" />
              <p className="p-2 text-sm">{img.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-white p-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["Amazing service, very respectful.", "They keep my parents' grave beautiful.", "Highly recommend, very reliable."].map((review, i) => (
            <Card key={i} className="rounded-xl shadow">
              <CardContent className="p-6">
                <p>"{review}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Booking */}
      <div className="bg-gray-100 p-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Book a Service</h2>
        <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow">
          <input className="w-full mb-3 p-2 border rounded" placeholder="Your Name" />
          <input className="w-full mb-3 p-2 border rounded" placeholder="Email" />
          <input className="w-full mb-3 p-2 border rounded" placeholder="Grave Location" />
          <textarea className="w-full mb-3 p-2 border rounded" placeholder="Special Requests" />
          <Button className="w-full">
            {selectedPlan ? `Book ${selectedPlan.name}` : "Select a Plan First"}
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white text-center p-4">
        <p>© 2026 Eternal Care Services. All rights reserved.</p>
      </div>
    </div>
  );
}
