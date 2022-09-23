import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXing } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

function Footer() {
  return (
    <div className="fixed bottom-0 flex w-">
    <div className="flex justify-between text-2xl">
        <a
            className="github flex items-end  py-4 px-2"
            href="https://github.com/zubia77"
            target="_blank"
            rel="noreferrer"
        >
            <FaGithub />
        </a>
        <a
            className="linkedIn flex items-end  py-4 px-2"
            href="https://www.linkedin.com/in/zubia-rashid-05ba3621b/"
            target="_blank"
            rel="noreferrer"
        >
            <FaLinkedinIn />
        </a>
        <a
            className="xing flex items-end  py-4 px-2"
            href="https://www.xing.com/profile/Zubia_Rashid"
            target="_blank"
            rel="noreferrer"
        >
            <FaXing />
        </a>
        <a
            className="whatsapp flex items-end  py-4 px-2"
            href="https://wa.me/4917670172303"
            target="_blank"
            rel=" noopener noreferrer"
        >
            <FaWhatsapp />
        </a>
    </div>
    {/* <div className="top">
    <a  href="#oben"
                ><FaRegArrowAltCircleUp />Go Up!</a
            >

    </div> */}
    <div className="copyrights  flex items-center justify-end">
        <img className="logo" src="../../images/logoZubiRemoveBg.png" width="50px"/>
       <FaRegCopyright />2022
    </div>
</div>
  )
}

export default Footer