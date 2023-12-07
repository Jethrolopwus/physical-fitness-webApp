import Header from "../../Components/Header";
import HeaderImage from "../../images/girl-robSkip.jpg"
import "./Gallery.css"

const Gallery = () => {
    const galleryLength = 11;
    const images = []
    for (let i = 1; i <= galleryLength; i++){
        images.push(require(`../../images/gallery${i}.jpg`))
    }
    // console.log(images);
    return (
        <>
            <Header title="Our Gallery" image={HeaderImage}>
                Fit your eyes with our amazing figures of the state of art instructors and participants.
            </Header>
            <div className="gallery">
                <div className="container gallery__container">
                    {
                        images.map((image, index) => {
                            return <article key={index}>
                                <img src={image} alt={`Gallery fiqure ${index + 1}`}/>
                            </article>
                        })
                    }
                </div>

            </div>
        </>
    )
}
export default Gallery;