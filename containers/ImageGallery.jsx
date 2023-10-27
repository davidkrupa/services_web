import React from "react";

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-4 gap-6 h-[500px] w-full py-14">
      <div className="rounded-3xl bg-cover bg bg-center col-span-2 bg-[url('../assets/grid1.jpg')]"></div>
      <div className="rounded-3xl bg-cover bg-[url('../assets/grid2.jpg')]"></div>
      <div className="rounded-3xl bg-cover bg-[url('../assets/grid2.jpg')]"></div>

      <div className="rounded-3xl bg-cover bg-[url('../assets/grid1.jpg')]"></div>
      <div className="rounded-3xl bg-cover bg-[url('../assets/grid2.jpg')]"></div>
      <div className="rounded-3xl bg-cover col-span-2 bg-[url('../assets/grid2.jpg')]"></div>
    </div>
  );
};

export default ImageGallery;
