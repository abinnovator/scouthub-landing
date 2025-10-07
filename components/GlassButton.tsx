function ButtonDesktop({ text }: { text: string }) {
  return (
    <button
      className="cursor-pointer relative rounded-[100px] size-full"
      data-name="button"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[24px] py-[16px] relative size-full">
          <div className="absolute backdrop-blur-[3px] backdrop-filter bg-[rgba(255,255,255,0.01)] h-[67px] left-0 top-[-8px] w-[207px]" />
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#040404] text-[16px] text-nowrap whitespace-pre">
            Sign In
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[1px_1px_1px_0px_inset_rgba(255,255,255,0.4),-1px_-1px_1px_0px_inset_rgba(255,255,255,0.25),-1px_-1px_1px_0px_inset_rgba(161,161,161,0.4),1px_1px_4px_0px_inset_rgba(255,255,255,0.6)]" />
    </button>
  );
}

function ButtonMobile({ text }: { text: string }) {
  return (
    <button
      className="cursor-pointer relative rounded-[100px] size-full"
      data-name="button"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[24px] py-[16px] relative size-full">
          <div className="absolute backdrop-blur-[3px] backdrop-filter bg-[rgba(255,255,255,0.01)] h-[67px] left-0 top-[-8px] w-[207px]" />
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#040404] text-[16px] text-nowrap whitespace-pre">
            Sign In
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[1px_1px_1px_0px_inset_rgba(255,255,255,0.4),-1px_-1px_1px_0px_inset_rgba(255,255,255,0.25),-1px_-1px_1px_0px_inset_rgba(161,161,161,0.4),1px_1px_4px_0px_inset_rgba(255,255,255,0.6)]" />
    </button>
  );
}

function Button(text: string) {
  return (
    <>
      <div className="hidden md:flex">
        <ButtonMobile text={text} />
      </div>
      <div className="flex md:hidden">
        <ButtonDesktop text={text} />
      </div>
    </>
  );
}

export default Button;
