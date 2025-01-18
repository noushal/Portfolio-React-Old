// import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
// import { Toaster, toast } from "sonner";
// import { EarthCanvas } from "../canvas";
// import { SectionWrapper } from "../../hoc";
// import { slideIn } from "../../utils/motion";
// import { config } from "../../constants/config";
// import { Header } from "../atoms/Header";

// const INITIAL_STATE = Object.fromEntries(
//   Object.keys(config.contact.form).map((input) => [input, ""])
// );

// const emailjsConfig = {
//   serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
//   templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//   accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
// };

// const Contact = () => {
//   const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
//   const [form, setForm] = useState(INITIAL_STATE);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
//   ) => {
//     if (e === undefined) return;
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
//     if (e === undefined) return;
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         emailjsConfig.serviceId,
//         emailjsConfig.templateId,
//         {
//           form_name: form.name,
//           to_name: config.html.fullName,
//           from_email: form.email,
//           to_email: config.html.email,
//           message: form.message,
//         },
//         emailjsConfig.accessToken
//       )
//       .then(
//         () => {
//           setLoading(false);
//           toast.success("Thank you. I will get back to you as soon as possible.");

//           setForm(INITIAL_STATE);
//         },
//         (error) => {
//           setLoading(false);

//           console.log(error);
//           alert("Something went wrong.");
//         }
//       );
//   };

//   return (
//     <div
//       className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
//     >
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className="bg-black-100 flex-[0.75] rounded-2xl p-8"
//       >
//         <Header useMotion={false} {...config.contact} />

//         <form
//           // @ts-expect-error
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="mt-12 flex flex-col gap-8"
//         >
//           {Object.keys(config.contact.form).map((input) => {
//             const { span, placeholder } =
//               config.contact.form[input as keyof typeof config.contact.form];
//             const Component = input === "message" ? "textarea" : "input";

//             return (
//               <label key={input} className="flex flex-col">
//                 <span className="mb-4 font-medium text-white">{span}</span>
//                 <Component
//                   type={input === "email" ? "email" : "text"}
//                   name={input}
//                   value={form[`${input}`]}
//                   onChange={handleChange}
//                   placeholder={placeholder}
//                   className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
//                   {...(input === "message" && { rows: 7 })}
//                 />
//               </label>
//             );
//           })}
//           <button
//             type="submit"
//             className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
//       >
//         <EarthCanvas />
//       </motion.div>
//       <Toaster position="bottom-right" />
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");


import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN as string,
};

const validationSchema = Yup.object(
  Object.keys(config.contact.form).reduce((acc, key) => {
    acc[key] =
      key === "email"
        ? Yup.string()
            .email("Invalid email address")
            .required("Email is required")
        : key === "message"
        ? Yup.string()
            .min(10, "Message must be at least 10 characters")
            .matches(/^\S[\s\S]*\S$/, "Message cannot be empty")
            .required("Message is required")
        : Yup.string()
            .trim()
            .matches(/^\S[\s\S]*\S$/, "Name cannot be empty")
            .required("Name is required");
    return acc;
  }, {} as Record<string, Yup.AnySchema>)  
);

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

const Contact: React.FC = () => {
  const handleSubmit = (
    values: FormValues,
    { resetForm, setSubmitting }: { resetForm: () => void; setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setSubmitting(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: values.name,
          to_name: config.html.fullName,
          from_email: values.email,
          to_email: config.html.email,
          message: values.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setSubmitting(false);
          toast.success("Thank you. I will get back to you as soon as possible.");
          resetForm();
        },
        (error) => {
          setSubmitting(false);
          console.error(error);
          toast.error("Something went wrong.");
        }
      );
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <h3 className="text-3xl font-bold text-white">{config.contact.p}</h3>
        <p className="text-secondary mt-2">{config.contact.h2}</p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-12 flex flex-col gap-8">
              {Object.keys(config.contact.form).map((input) => {
                const { span, placeholder } =
                  config.contact.form[input as keyof typeof config.contact.form];
                const isTextarea = input === "message";

                return (
                  <label key={input} className="flex flex-col">
                    <span className="mb-4 font-medium text-white">{span}</span>
                    <Field
                      as={isTextarea ? "textarea" : "input"}
                      type={input === "email" ? "email" : "text"}
                      name={input}
                      placeholder={placeholder}
                      className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                      {...(isTextarea && { rows: 7 })}
                    />
                    <ErrorMessage
                      name={input}
                      component="span"
                      className="mt-2 text-sm text-red-500"
                    />
                  </label>
                );
              })}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </Form>
          )}
        </Formik>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
