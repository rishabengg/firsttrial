import React from "react";

const HardwareLandingPage = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}
    >
      <div>
        {/* Header */}
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <h2 className="text-[#111318] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">
            Hardware Co.
          </h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex h-12 items-center justify-center rounded-lg bg-transparent text-[#111318] gap-2 text-base font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 py-3">
          <label className="flex flex-col h-12 w-full">
            <div className="flex w-full items-center rounded-lg h-full bg-[#f0f1f5]">
              <div className="text-[#5f6d8c] pl-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                </svg>
              </div>
              <input
                placeholder="Search for products"
                className="form-input w-full flex-1 text-[#111318] placeholder:text-[#5f6d8c] px-4 bg-[#f0f1f5] focus:outline-none"
              />
            </div>
          </label>
        </div>

        {/* Nav Tabs */}
        <div className="pb-3">
          <div className="flex border-b border-[#dbdee6] px-4 gap-8">
            {["Door Hardware", "Fittings", "Accessories"].map((item, idx) => (
              <a
                key={item}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 text-sm font-bold tracking-[0.015em] ${
                  idx === 0 ? "border-b-[#111318] text-[#111318]" : "border-b-transparent text-[#5f6d8c]"
                }`}
                href="#"
              >
                <p>{item}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Hero Banner */}
        <div className="px-4 py-3">
          <div
            className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white rounded-lg min-h-[218px]"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPtzKE2uGoQ-0YZdNIUxzDQ7zeWfrbDGhWh4etKyyi2ZCBu63p_wFIgi_-BU4WUOGCP1bSH7AcSzQxtDjt3HphReUcuH3YOhvMARQO5EbwE9Jm5BUeFKK8KjS_wkP1h4L2y1WsOOXH5VwGgVUaUAA3ZR1sN9kDXYzOgq8-ZRVU19R5ZLEqznvZZMAUicbQ6qo3Jl268FIYYoQlnKF54h9YqRHpHf6CuipLFVy0UlFVouuAwnwEjFXBNiWVMhPQvRf9bQ_oZNeTndC9")',
            }}
          >
            <div className="p-4">
              <p className="text-white text-[28px] font-bold leading-tight">Upgrade Your Home</p>
            </div>
          </div>
        </div>

        {/* More sections like Featured Products, Categories, etc., would follow... */}
      </div>
    </div>
  );
};

export default HardwareLandingPage;
