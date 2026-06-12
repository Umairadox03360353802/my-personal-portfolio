import { useState } from "react";



const Contact = () => {
  const contactLinks = [
  {
    icon: "✉",
    label: "Email",
    value: "umairadox033@gmail.com",
    href: "umairadox033@gmail.com",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/muhammad-umair-mahmood-436aa9227/",
    href: "https://www.linkedin.com/in/muhammad-umair-mahmood-436aa9227/",
  },
  {
    icon: "⌥",
    label: "GitHub",
    value: "github.com/umairmahmood",
    href: "https://github.com/Umairadox03360353802",
  },
];
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="Contacts"
      className=" px-6 py-24 md:px-16 lg:px-28 relative overflow-hidden"
    >
     

     

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
        Have an idea? <br /> Let's talk.
      </h2>
      <p className="text-white text-sm mb-14 max-w-md">
        Open to freelance work, collaborations, and interesting conversations.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* Left — contact links */}
        <div className="flex flex-col divide-y divide-white/10 border-t border-white/10">
          {contactLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 py-5 group transition-all duration-200 hover:pl-3"
            >
              {/* Icon box */}
              <div
                className="w-10 h-10 border border-white/10 flex items-center justify-center 
                           text-white/50 text-sm font-mono shrink-0
                           group-hover:border-white/40 group-hover:bg-white/5 
                           group-hover:text-white transition-all duration-200"
              >
                {link.icon}
              </div>

              {/* Text */}
              <div>
                <div className="text-[10px] font-mono tracking-[2px] uppercase text-white/30 mb-0.5">
                  {link.label}
                </div>
                <div className="text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-200">
                  {link.value}
                </div>
              </div>

              {/* Arrow */}
              <span className="ml-auto text-white/20 group-hover:text-white/60 transition-all duration-200 group-hover:translate-x-1 inline-block">
                →
              </span>
            </a>
          ))}
        </div>

        {/* Right — form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono tracking-[2px] uppercase text-white/30">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
              required
              className="bg-white/5 border border-white/10 text-white placeholder-white/20 
                         px-4 py-3 text-sm outline-none 
                         focus:border-white/40 focus:bg-white/[0.07]
                         transition-all duration-200"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono tracking-[2px] uppercase text-white/30">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="bg-white/5 border border-white/10 text-white placeholder-white/20 
                         px-4 py-3 text-sm outline-none 
                         focus:border-white/40 focus:bg-white/[0.07]
                         transition-all duration-200"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono tracking-[2px] uppercase text-white/30">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              rows={5}
              className="bg-white/5 border border-white/10 text-white placeholder-white/20 
                         px-4 py-3 text-sm outline-none resize-none
                         focus:border-white/40 focus:bg-white/[0.07]
                         transition-all duration-200"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3.5 border border-white/20 text-white/70 text-sm 
                       font-mono tracking-[2.5px] uppercase
                       hover:border-white/50 hover:text-white hover:bg-white/5
                       active:scale-[0.98] transition-all duration-200"
          >
            {sent ? "Message Sent ✓" : "Send Message →"}
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;