import BGHeroPage from "../../assets/bg-hero-page.jpg";
import './HeroPageOne.css';

function HeroPageOne() {
    return (
        <section className="hero-page__one">
            <img
                className="hero-page__background__one"
                alt="background de la hero page"
                src={BGHeroPage}
            />
            <label className="hero-page__introduction__one">Un mundo para crear</label>
        </section>
    );
}

export default HeroPageOne;
