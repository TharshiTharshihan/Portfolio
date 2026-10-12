import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaExclamationCircle,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "tharshihan2000@gmail.com",
    href: "mailto:tharshihan2000@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+94 75 844 3025",
    href: "tel:+94758443025",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Chat with me",
    href: "https://wa.me/94758443025",
    external: true,
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Kalmunai, Sri Lanka",
  },
];

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-white/10 dark:bg-slate-900/60 dark:text-white dark:placeholder:text-white/40";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    emailjs
      .sendForm("service_fys2epl", "template_j2gsmbi", form.current, {
        publicKey: "GluRFGpYsQKALbD9v",
      })
      .then(
        () => {
          form.current.reset();
          setStatus({
            type: "success",
            message: "Message sent successfully! I'll get back to you soon.",
          });
          setTimeout(() => setStatus({ type: null, message: "" }), 6000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus({
            type: "error",
            message:
              "Something went wrong. Please try again or email me directly.",
          });
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#fbf7f0] py-20 text-slate-900 dark:bg-slate-800 dark:text-white sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-slate-400/10 blur-3xl" />
      </div>

      <div className="container relative">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur dark:bg-white/5">
            <FaEnvelope />
            Get In Touch
          </p>
          <h2 className="mt-5 text-3xl font-bold text-black/85 dark:text-white sm:text-5xl">
            Let&apos;s build <span className="text-primary">something great</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-500 dark:text-white/70 sm:text-lg">
            Have a project, role or idea in mind? I&apos;d love to hear about
            it. Send me a message and let&apos;s discuss how we can work
            together.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Form */}
          <motion.div
            className="flex flex-col rounded-3xl border border-primary/25 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-1 flex-col gap-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-white/80"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-white/80"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  className={inputClasses}
                  required
                />
              </div>

              <div className="flex flex-1 flex-col">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-white/80"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClasses} min-h-[140px] flex-1 resize-none`}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="text-sm" />
                  </>
                )}
              </button>

              {status.type && (
                <div
                  role="status"
                  className={`flex items-center gap-3 rounded-xl border p-4 text-sm ${
                    status.type === "success"
                      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                      : "border-red-500/20 bg-red-500/10 text-red-700 dark:text-red-400"
                  }`}
                >
                  {status.type === "success" ? (
                    <FaCheckCircle className="shrink-0 text-base" />
                  ) : (
                    <FaExclamationCircle className="shrink-0 text-base" />
                  )}
                  <p>{status.message}</p>
                </div>
              )}
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
              <h3 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <div className="space-y-2">
                {contactInfo.map(({ icon: Icon, label, value, href, external }) => {
                  const content = (
                    <>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                        <Icon className="text-lg" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm text-slate-500 dark:text-white/60">
                          {label}
                        </span>
                        <span className="block break-words font-semibold text-slate-800 dark:text-white">
                          {value}
                        </span>
                      </span>
                    </>
                  );

                  return href ? (
                    <a
                      key={label}
                      href={href}
                      {...(external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className="group flex items-center gap-4 rounded-2xl p-3 transition-colors duration-200 hover:bg-primary/5 dark:hover:bg-white/5"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={label}
                      className="group flex items-center gap-4 rounded-2xl p-3"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-primary/25 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-white/65">
                I&apos;m open to software engineering roles, freelance work and
                exciting projects. Feel free to reach out - I&apos;d love to
                have a conversation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
