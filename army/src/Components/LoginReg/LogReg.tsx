import React from "react";

interface LogResProp {
  openLogin: () => void;
}

const LogReg: React.FC<LogResProp> = ({ openLogin }) => {
  return (
    <div
      className={`"absolute lg:mt-16 left-0 w-full  lg:h-[100vh] flex justify-center items-center z-20 bg-black"`}
    >
      <div
        className="text-white cursor-pointer lg:flex hidden absolute lg:top-20  left-[70%] text-2xl"
        onClick={openLogin}
      >
        <p className="hover:text-red-500">X</p>
      </div>
      <div className="lg:w-4/10 bg-gray-700 mb-20 py-[30px]">
        <div className="lg:w-[70%] m-auto text-center">
          <div className="w-full my-4">
            <img
              src="/src/assets/Imgs/logo.wbpt.webp"
              alt=""
              className="m-auto w-[150px]"
            />
          </div>
          <hr className="mx-auto h-[3px] w-[200px] bg-[#3cbc1b]" />
          <div className="my-4 text-xl font-bold text-[#3cbc1b]">
            Great Have to You Back
          </div>
          <div>
            <div className="h-[50px] bg-white">
              <input
                type="text"
                title="text"
                className="w-full h-full bg-transparent px-3"
              />
            </div>
            <div className="h-[50px] bg-white mt-5">
              <input
                type="text"
                title="text"
                className="w-full h-full bg-transparent px-3"
              />
            </div>
          </div>
          <div className="my-4">
            <p className="font-bold text-start  text-[#3cbc1b]">
              Forgot Your Password ?
            </p>
          </div>
          <div className="my-4">
            <button
              title="submit"
              className="w-full  bg-[#3cbc1c] p-3 text-white font-bold"
            >
              LOG IN
            </button>
          </div>
          <div className="bg-white my-4 h-[40px] flex justify-center items-center font-bold">
            Dont Have An Account
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogReg;
