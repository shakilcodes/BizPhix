import Header from "../Shared/Header/Header";
import SectionOne from "./SectionOne/SectionOne";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <section className="bg-[#FAFAFD]">
                <SectionOne></SectionOne>
            </section>
        </div>
    );
};

export default Home;