import emailjs from "emailjs-com";
import { useState } from "react";
import ContactPopup from "./ContactPopup";
import "../App.css";

const ContactUs = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_4r7vkah",
                "template_frrjkep",
                e.target,
                "3odoJyRZO0aka8ePv"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        togglePopup();
    }

    return (
        <div className="">
            <h1 className="px-20 py-10 text-3xl text-color-10 font-style1 ">
                Ich freue mich von Ihnen zu hören!
            </h1>
          
            <div className="m-6">
                <form
                    onSubmit={sendEmail}
                    className="bg-color-10 border-4 border-color-10 md:w-2/6 md:h-full md:p-10 flex justify-center rounded-2xl shadow-outer"
                >
                    <div className="">
                        <div className="m-6 ">
                            <input
                                type="text"
                                required
                                className="w-96 h-10 p-4 rounded-full bg-color-20 border-4 border-color-10 shadow-inner placeholder:text-color-10 shadow-inner outline-none"
                                placeholder="Name..."
                                name="from_name"
                            />
                        </div>
                        <div className="m-6">
                            <input
                                type="email"
                                required
                                className="w-96 h-10 p-4 rounded-full bg-color-20 border-4 border-color-10 placeholder:text-color-10 shadow-inner outline-none"
                                placeholder="Email Adresse..."
                                name="reply_to"
                            />
                        </div>
                        <div className="m-6">
                            <textarea
                                type="text"
                                required
                                className="w-96 h-60 p-4 rounded-2xl bg-color-20 border-4 border-color-10 text-color-10 placeholder:text-color-10 shadow-inner outline-none"
                                name="message"
                                id=""
                                cols={3}
                                rows={10}
                                placeholder="Ihre Nachricht..."
                            ></textarea>
                        </div>
                        <div className="m-6 relative">
                            <input
                                type="submit"
                                className="submitBtn w-96 h-10 p-2 rounded-full bg-color-10 text-color-20"
                                value="absenden"
                            />
                            <div className="absolute bottom-40">
                                {isOpen && (
                                    <ContactPopup
                                        content={
                                            <>
                                                <b className="text-3xl">
                                                    Danke für Ihre Nachricht!
                                                </b>
                                                <p className="text-2xl mt-10">
                                                    Ich werde mich schnellstmöglich bei Ihnen melden.
                                                </p>
                                            </>
                                        }
                                        handleClose={togglePopup}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
