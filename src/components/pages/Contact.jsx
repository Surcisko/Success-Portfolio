import { useState } from "react";

export const Contact = () => {
  const [open, setOpen]=useState(true)

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "364ed670-e136-45d0-a46e-0afddaa82a73");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    };
    return(
      <div>
        <h1 className="text-2xl font-bold p-6">Successful ✅</h1>
        {open && (
          <div className=" fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg "></div>

          </div>
        )}
      </div>
    );
  };

  return (
    <section className="absolute mb-30  bottom-0 top-0 right-0 left-0  mx-auto size-120 md:size-180 xl:size-300">
      <div className="text-white px-20 py-15 rounded-2xl bg-gray-50/30 shadow-[0px_10px_30px_rgba(79,172,254,0.3)] mt-30">
        <h2 className="text-center text-2xl font-semibold">Have a Project ?</h2>
        <p className="text-center text-amber-200/80 mb-5">
          Send a Message so we can get to work
        </p>

        <form onSubmit={onSubmit}>
          <div className="">
            <label className="block mb-1 font-semibold">Full Name</label>
            <div className=" flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                name=" FirstName"
                className=" w-1/2 border  p-4 border-white rounded-lg bg-transparent"
              />
              <input
                type="text"
                placeholder="Second Name"
                name=" SecondName"
                className=" w-1/2 border p-4 border-white rounded-lg bg-transparent"
              />
            </div>

            <div className="mb-4 mt-4">
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                placeholder="example.gmail.com"
                name=" Email"
                className=" w-full border p-4 border-white rounded-lg bg-transparent"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                name="message"
                className=" w-full border  border-white rounded-lg bg-transparent h-40 resize-none"
              />
            </div>

            <button className="w-full p-3 mt-1 bg-green-500 text-white rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
