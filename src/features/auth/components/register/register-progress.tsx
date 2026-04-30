interface RegisterProgressProps {
  currentStep: number;
}

export default function RegisterProgress({
  currentStep,
}: RegisterProgressProps) {
  return (
    <div className="flex items-center w-full max-w-xl px-5 mb-6">
      {[1, 2, 3, 4].map((step, index) => {
        const status =
          step < currentStep
            ? "completed"
            : step === currentStep
              ? "active"
              : "upcoming";

        return (
          <div key={step} className="flex items-center flex-1 last:flex-none">
            <div className="flex items-center">
              {status === "completed" && (
                <div className="w-2.5 h-2.5 bg-blue-600 -rotate-45" />
              )}

              {status === "active" && (
                <div className="relative">
                  <div className="absolute w-2.5 h-2.5 bg-blue-600 -rotate-45 z-10 -translate-y-1/2" />
                  <div className="absolute inset-0 w-5.5 h-5.5 bg-blue-100 -rotate-45 -translate-x-1/4 -translate-y-1/2" />
                </div>
              )}

              {status === "upcoming" && (
                <div className="w-2.5 h-2.5 outline-1 outline-blue-600 bg-blue-50 -rotate-45" />
              )}
            </div>

            {index < 3 && (
              <div
                className={
                  step < currentStep
                    ? "flex-1 outline-1 outline-blue-600 mx-2"
                    : "flex-1 h-0.5 border-t-2 border-dashed border-blue-600 mx-2"
                }
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
