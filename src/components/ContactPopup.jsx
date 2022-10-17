import "../App.css";

const ContactPopup = (props) => {
    return (
        <div className="contactPopup h-80  w-full z-10 flex justify-center items-center ">
            <div
                className="w-11/12 h-72 text-color-10 text-4xl text-center p-8 rounded-xl"
                onClick={props.handleClose}
            >
                {props.content}
            </div>
        </div>
    );
};

export default ContactPopup;
