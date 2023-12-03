import {useRef} from "react";
import {SubmitBtn} from "@/components/form";
import {sendEmail} from "@/actions/sendEmail";
import toast from "react-hot-toast";

const Form = () => {
  const ref = useRef<HTMLFormElement>(null);
  const generic =
    "border-[1px] border-gray-200 rounded-md px-4 h-14 outline-none";

  return (
    <form
      ref={ref}
      className="flex flex-col space-y-2 w-full mb-20 mt-10"
      action={async (formData) => {
        const {error} = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Email sent successfully!");

        ref.current?.reset();
      }}
    >
      <input
        type="text"
        name="name"
        className={generic}
        placeholder="Your Name *"
        maxLength={50}
        required
      />

      <input
        type="email"
        name="mailer"
        className={generic}
        placeholder="Your Email *"
        maxLength={254}
        required
      />

      <input
        type="text"
        name="subject"
        className={generic}
        placeholder="Subject *"
        maxLength={55}
        required
      />

      <textarea
        name="message"
        className="border-[1px] border-gray-200 rounded-md h-52 p-4 outline-none"
        placeholder="Message *"
        maxLength={5000}
        required
      />

      <SubmitBtn />
    </form>
  );
};

export default Form;
