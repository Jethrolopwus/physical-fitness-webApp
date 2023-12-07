
import "./About.css";
import Header from "../../Components/Header";
import HeaderImage from "../../images/basketBaller.jpg";
import storyImage from "../../images/threegirls.jpg"
import visionImage from "../../images/fivegirls.jpg"
import misionImage from "../../images/two-girls.jpg"


const About =() =>{
    return (
        <>
            <Header title="About Us" image={HeaderImage}>
                We are a global and stanndard fitness platform to cut accross every culture and ages. with our professional instructors and mentors.
            </Header>
            <div className="about">
              <section className="about__story">
                <div className="about__story-container">
                    <div className="about__section-image">
                        <img src={storyImage} alt="about story images" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Story</h1>
                        <p>We started way back as young dreamers who have a clear vission and determination even when it seems unrealistic.</p>
                        <p>We started way back as young dreamers who have a clear vission and determination even when it seems unrealistic.</p>
                        <p>We started way back as young dreamers who have a clear vission and determination even when it seems unrealistic.</p>
                    </div>
                </div>
            </section>

             <section className="about__vision">
                <div className="about__vision-container">  
                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        <p>We envision global fitness attend through our reburst and engaging instructors who are commited to this course.</p>
                        <p>We envision global fitness attend through our reburst and engaging instructors who are commited to this course.</p>
                    </div>
                    <div className="about__section-image">
                        <img src={visionImage} alt="about vision images" />
                    </div>
                </div>
            </section>

            <section className="about__mision">
                <div className="about__mision-container">
                    <div className="about__section-image">
                        <img src={misionImage} alt="about mision images" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Mision</h1>
                        <p>Our Mision is to reached out to as manyacross the globe with the cutting edge fitness skills.</p>
                        <p>Our Mision is to reached out to as manyacross the globe with the cutting edge fitness skills.</p>
                        <p>Our Mision is to reached out to as manyacross the globe with the cutting edge fitness skills.</p>
                        
                    </div>
                </div>
            </section>
            </div>
          
        </>
    )

}
export default About;