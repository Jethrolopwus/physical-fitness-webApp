import Header from "../../Components/Header";
import HeaderImage from "../../images/shotgirls.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Contact.css";

const Contact = () => {
return (
    <>
        <Header title="Get In Touch" image={HeaderImage}>
            For your amazing and fulfilling experience, just give yourself some cool and precious treat by hiting the contact.
        </Header>
        <section className="contact">
            <div className="container contact__container">
                <div className="contact__wrapper">
                <a href="mailto:lopwusjethro9@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
                <a href="https://web.facebook.com/jethro.lopwus" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
                <a href="https://wa.me/+2348163758050" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
                </div>
            </div>
        </section>
    </>
)
}
export default Contact;