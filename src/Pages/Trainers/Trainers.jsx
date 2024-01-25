import Header from "../../Components/Header";
import HeaderImage from "../../images/threegirls.jpg";
import { trainers } from "../../Data";
import {BsInstagram} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {FaFacebook} from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import Trainer from "../../Components/Trainer"
import "./Trainers.css";

const Trainers = () =>{
    return (
        <>
            <Header title="Out Trainers" image={HeaderImage}>
                OurTrainers are experts and well experienced and with vast knowledge.
            </Header>
            <section className="trainers">
                <div className="container trainers__container">
                    {
                        trainers.map(({ id, image, name, job, socials }) => {
                            return <Trainer key={id} image={image} name={name} job={job} socials={
                                [
                                    { icon: <BsInstagram/>, link: socials[0]},
                                    { icon: <AiOutlineTwitter/>, link: socials[1]},
                                    { icon: <FaFacebook/>, link: socials[2]},
                                    { icon: <FaLinkedinIn/>, link: socials[3]}  
                                ]
                            }/>
                        })
                    }
                </div>
            </section>
        </>
    )
}
export default Trainers;