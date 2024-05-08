import React from "react";

type Props = {};

export const Directories = (props: Props) => {
  return (
    <div className="w-full h-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <h2 className="text-3xl font-bold text-midnight-blue-950 text-center">
          Directories
        </h2>
        <div className="flex items-center justify-center gap-10">
          <EmployeeInfoCard />
          <EmployeeInfoCard />
          <EmployeeInfoCard />
        </div>
      </div>
    </div>
  );
};

const EmployeeInfoCard = () => (
  <div className="flex gap-5">
    <div className="w-20 aspect-square bg-amber-100"></div>
    <div>
      <h2 className="text-lg font-bold text-slate-800">Name</h2>
      <p className="text-slate-600 font-medium">Designation</p>
    </div>
  </div>
);
