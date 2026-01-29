import Fun4RajkotHero from '../Components/Fun4RajkotComponents/Fun4RajkotHero';
import Fun4RajkotWhatWeDo from '../Components/Fun4RajkotComponents/Fun4RajkotWhatWeDo';
import Fun4RajkotCreativeSlider from '../Components/Fun4RajkotComponents/Fun4RajkotCreativeSlider';
import Fun4RajkotPlatforms from '../Components/Fun4RajkotComponents/Fun4RajkotPlatforms';
import Fun4RajkotWhyChoose from '../Components/Fun4RajkotComponents/Fun4RajkotWhyChoose';
import Fun4RajkotBranches from '../Components/Fun4RajkotComponents/Fun4RajkotBranches';
import Fun4RajkotContact from '../Components/Fun4RajkotComponents/Fun4RajkotContact';

const Fun4RajkotPage = () => {
    return (
        <div className="bg-(--dark-black) text-white font-outfit">
            <Fun4RajkotHero />
            <Fun4RajkotWhatWeDo />
            <Fun4RajkotCreativeSlider />
            <Fun4RajkotWhyChoose />
            <Fun4RajkotPlatforms />

            <section className="container mx-auto border border-white/5 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <Fun4RajkotBranches />
                    <Fun4RajkotContact />
                </div>
            </section>
        </div>
    );
};

export default Fun4RajkotPage;
