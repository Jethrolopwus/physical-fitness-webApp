import Header from "../../Components/Header";
import HeaderImage from "../../images/two-girls.jpg";
import Card from "../../Ui/Card";
import { plans } from "../../Data";
import "./Plans.css";

const Plans = () => {
  return (
    <>
      <Header title="Membership plans" image={HeaderImage}>
        Our Plans for your absolute choice and based on your individual level and capacity
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h4>{name}</h4>
                <small>{desc}</small>
                    <h1>{`$${price}`}</h1>
                    <h2>/mo</h2>
                <h4>{features.title}</h4>
                {features.items.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                    <button className="btn lg">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
