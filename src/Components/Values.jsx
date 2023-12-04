import Image from "../images/gymgirl4.jpg";
import SectionHead from "./SectionHead";
import {GiCutDiamond} from "react-icons/gi";
import {values} from "../Data";
import Card from "../Ui/Card";

const Values = () => {
  return (
    <section className="values">
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="values description" />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond/>} title="Values" />
                <p>Our Values span across the globe such that because of the global standard we have here.</p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc}) =>{
                            return <Card className="values__value" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values