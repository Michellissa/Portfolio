import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import testEmailJS from "../utils/emailjsTest";

//hzX7dHRJD9jfmThVw
//template_r58mw28
//service_n3708ws
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Vänligen fyll i alla fält.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_n3708ws",
        "template_b48b0th",
        {
          name: form.name,
          email: form.email, // 👈 matches {{email}} in template
          title: form.message, // 👈 matches {{title}} if you use it
        },
        "srdqiHI-KyDc7--tJ"
      )

      .then(
        (result) => {
          console.log("EmailJS Success:", result);
          setLoading(false);
          alert("Tack, jag hör av mig så snart som möjligt");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error Details:", error);
          console.error("Error status:", error.status);
          console.error("Error text:", error.text);

          if (error.status === 422) {
            alert(
              "Email-konfigurationen är felaktig. Kontrollera EmailJS-inställningarna."
            );
          } else {
            alert("Något gick fel, försök igen senare.");
          }
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Ta kontakt</p>
        <h3 className={styles.sectionHeadText}>Kontakt</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Namn</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Vad heter du?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Meddelande</span>
            <textarea
              rows={7}
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder=""
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Skickas..." : "Skicka"}
          </button>
        </form>

        {/* Temporary debug button - remove after testing */}
       {/* <button
          onClick={async () => {
            console.log("Testing EmailJS...");
            const success = await testEmailJS();
            if (success) {
              alert("EmailJS test lyckades!");
            } else {
              alert("EmailJS test misslyckades - kontrollera konfigurationen");
            }
          }}
          className="bg-red-500 py-2 px-4 mt-4 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
        > 
          Testa EmailJS
        </button>
        */}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
