import React from "react";

const FooterButtons = () => {
  return (
    <div className="flex w-full justify-end gap-4">
      <button className="rounded-md border-2 border-slate-500 px-8 py-1 tracking-widest">
        VERSION
      </button>
      <button className="rounded-md border-2 border-slate-500 px-8 py-1 tracking-widest">
        RULES
      </button>
    </div>
  );
};

export default FooterButtons;
