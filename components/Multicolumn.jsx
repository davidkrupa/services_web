"use client";

import { useEffect, useState } from "react";

const Multicolumn = ({ cols, children }) => {
  let gridTemplate = `grid-cols-1 md:grid-cols-${cols}`;

  console.log(gridTemplate);

  return (
    <div
      className={`grid ${gridTemplate} max-w-[400px] md:max-w-5xl gap-6 px-4 py-10`}
    >
      {children}
    </div>
  );
};

export default Multicolumn;
