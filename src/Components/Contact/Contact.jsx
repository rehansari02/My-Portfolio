import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(() => {
        form.current.reset();
        toast.success("Message sent successfully!", { position: "top-right", autoClose: 3000, theme: "dark" });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        toast.error("Failed to send message. Please try again.", { position: "top-right", autoClose: 3000, theme: "dark" });
      })
      .finally(() => setIsSending(false));
  };

  const inputClass = "w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-white outline-none transition placeholder:text-gray-500 focus:border-violet-400/70 focus:bg-white/[0.07]";

  return (
    <section id="contact" className="section-shell">
      <ToastContainer />
      <div className="section-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">Let us build something clean and useful</h2>
          <p className="section-copy max-w-xl">Reach out for internship opportunities, freelance work, collaborations, or full stack projects. I keep communication simple and focused.</p>
          <div className="mt-8 grid gap-3 text-sm text-gray-300">
            <a href="https://www.linkedin.com/in/rehan-ansari-5a49b1316" target="_blank" rel="noopener noreferrer" className="glass-card rounded-2xl p-4 transition hover:-translate-y-1 hover:border-violet-400/40">LinkedIn: rehan-ansari</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65 }} className="glass-card rounded-[1.75rem] p-5 md:p-8">
          <h3 className="text-2xl font-black text-white">Connect With Me</h3>
          <form ref={form} onSubmit={sendEmail} className="mt-6 grid gap-4">
            <input type="email" name="user_email" placeholder="Your Email" required className={inputClass} />
            <input type="text" name="user_name" placeholder="Your Name" required className={inputClass} />
            <input type="text" name="subject" placeholder="Subject" required className={inputClass} />
            <textarea name="message" placeholder="Message" rows="5" required className={inputClass} />
            <button type="submit" disabled={isSending} className="rounded-full bg-white px-6 py-4 font-extrabold text-[#080719] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(168,85,247,0.35)] disabled:cursor-not-allowed disabled:opacity-60">
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;

