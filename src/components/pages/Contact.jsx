export const Contact = () => {
  return (
    <div className=" text-white mb-10 mt-19 md:mt-20 p-20 rounded-xl backdrop-blur-2xl bg-gray-50/30">
      <h2 className="text-center text-2xl font-semibold">Have a Project ?</h2>
      <p className="text-center text-amber-200/80 mb-5">
        Send a Message so we can get to work
      </p>

      <form>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Full Name</label>
          <div className=" flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className=" w-1/2 border  p-4 border-white rounded-lg bg-transparent"
            />
            <input
              type="text"
              placeholder="Second Name"
              className=" w-1/2 border p-4 border-white rounded-lg bg-transparent"
            />
          </div>

          <div className="mb-4 mt-4">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="example.gmail.com"
              className=" w-full border p-4 border-white rounded-lg bg-transparent"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea className=" w-full border  border-white rounded-lg bg-transparent h-40 resize-none" />
          </div>

          <button className="w-full p-3 mt-1 bg-green-500 text-white rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
