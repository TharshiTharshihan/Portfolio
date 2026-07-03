import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [showNotification, setShowNotification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_fys2epl", "template_j2gsmbi", form.current, {
        publicKey: "GluRFGpYsQKALbD9v",
      })
      .then(
        () => {
          form.current.reset();

          setShowNotification(true);
          setTimeout(() => {
            setShowNotification(false);
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#faf6ef] text-slate-900 dark:bg-slate-900 dark:text-white"
    >
      <div className="relative flex min-h-screen items-top justify-center bg-[#faf6ef] sm:items-center sm:pt-0 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 sm:p-10 md:mr-2 md:border-r md:border-slate-200/70 dark:md:border-white/10">
                <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  <FaEnvelope />
                  Contact
                </p>
                <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                  Get in touch
                </h1>
                <p className="mt-3 text-lg font-medium text-slate-500 dark:text-white/70 sm:text-xl">
                  Fill in the form to start a conversation.
                </p>

                <div className="mt-10 space-y-4 text-slate-600 dark:text-white/70">
                  <div className="flex items-center gap-4 rounded-2xl bg-slate-50 px-4 py-4 dark:bg-white/5">
                    <FaMapMarkerAlt className="text-xl text-primary" />
                    <div className="text-md font-semibold">
                      168, Kovil Road, Kalmunai-02.
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-slate-50 px-4 py-4 dark:bg-white/5">
                    <FaPhoneAlt className="text-xl text-primary" />
                    <div className="text-md font-semibold">
                      <a href="tel:+94758443025">+94 758443025</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-slate-50 px-4 py-4 dark:bg-white/5">
                    <FaEnvelope className="text-xl text-primary" />
                    <div className="text-md font-semibold">
                      <a href="mailto:tharshihan2000@gmail.com">
                        tharshihan2000@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col justify-center p-6 sm:p-10">
                {/* Success Notification */}
                {showNotification && (
                  <div className="absolute left-0 right-0 top-0 flex items-center justify-between rounded-2xl bg-emerald-500 p-4 text-white shadow-md">
                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="font-medium">
                        Message sent successfully!
                      </span>
                    </div>
                    <button
                      onClick={() => setShowNotification(false)}
                      className="text-white"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                )}

                <form
                  className="flex flex-col justify-center"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-primary"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="mt-2 w-100 rounded-2xl border border-slate-200 bg-white/90 px-3 py-3 font-semibold text-slate-800 outline-none transition focus:border-primary dark:border-white/10 dark:bg-slate-800 dark:text-white"
                      required
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-primary"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="mt-2 w-100 rounded-2xl border border-slate-200 bg-white/90 px-3 py-3 font-semibold text-slate-800 outline-none transition focus:border-primary dark:border-white/10 dark:bg-slate-800 dark:text-white"
                      required
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-primary"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      className="mt-2 w-100 rounded-2xl border border-slate-200 bg-white/90 px-3 py-3 font-semibold text-slate-800 outline-none transition focus:border-primary dark:border-white/10 dark:bg-slate-800 dark:text-white"
                      rows="4"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    value="Send"
                    disabled={isSubmitting}
                    className="mt-3 rounded-2xl bg-primary px-6 py-3 font-bold text-white transition duration-300 ease-in-out hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-50 md:w-36"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
