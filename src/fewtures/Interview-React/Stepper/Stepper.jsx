import { useState } from "react";

const Stepper = () => {
  const steps = [
    { label: "Personal Info", content: <div>HERE IS THE PERSONAL INFO</div> },
    { label: "Account Info", content: <div>HERE IS THE ACCOUNT INFO</div> },
    { label: "Payment Info", content: <div>HERE IS THE PAYMENT INFO</div> },
    { label: "Review Info", content: <div>HERE IS THE REVIEW INFO</div> },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="flex w-full h-screen bg-sky-50">
      {/* LEFT SIDE: Step labels */}
      <div className="w-1/4 border-r p-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 p-2 cursor-pointer
              ${index === currentStep ? "font-bold text-blue-600" : "text-gray-500"}
              ${index < currentStep ? "line-through" : ""}`}
            onClick={() => setCurrentStep(index)}
          >
            {/* Marker */}
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full border
                ${index === currentStep ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            >
              {index + 1}
            </div>
            <span>{step.label}</span>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE: Step content */}
      <div className="w-3/4 p-6">
        <div className="mb-6">{steps[currentStep].content}</div>

        <div className="flex gap-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stepper;
