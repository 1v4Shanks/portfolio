import React, { useRef } from "react";
import Title from "../components/Title";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const service_id = "service_ec5i51b";
  const template_id = "template_lk9begm";
  const public_key = "X5mus349aItuGe_Uj";

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(service_id, template_id, form.current, public_key);
      alert("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
    }
  };
  return (
    <div className="xl:ml-[350px] flex-1 h-screen overflow-y-auto hide-scrollbar">
      <div className="page-animation min-h-[100vh] w-full px-[2rem] py-[2rem] sm:px-[4rem] sm:py-[5rem] xl:px-[9rem] xl:py-[7rem]">
        <div className="mb-[3rem]">
          <Title text={"Contact"} />
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-[2rem] sm:gap-[3rem]"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="border border-black/20 h-[3.5rem] pl-[1rem] placeholder:text-lg focus:outline focus:outline-1 focus:outline-black-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="border border-black/20 h-[3.5rem] pl-[1rem] placeholder:text-lg focus:outline focus:outline-1 focus:outline-black-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className=" border border-black/20 h-[10rem] p-[1rem] placeholder:text-lg resize-none focus:outline focus:outline-1 focus:outline-black-500"
          ></textarea>
          <button
            type="submit"
            className="inline-block self-start bg-black text-white py-[1rem] px-[2rem] text-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
