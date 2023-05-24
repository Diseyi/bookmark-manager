import Container from "../container";
import illustration from "../../assets/images/illistration-features-tab-1.svg";


const FeatureTabOne = () => {
    return (
        <Container>
            <div className="flex flex-col items-center py-10 lg:flex-row relative gap-8 lg:gap-24">
                <div className="w-full lg:w-1/2 relative ">
                    <div className="w-full relative z-20 ">
                        <img src={illustration} alt="" className="w-full" />
                    </div>
                    <div className=" h-[190px] w-80 lg:w-[700px] md:h-[350px] bg-soft-blue rounded-r-full absolute -bottom-20 -left-16 lg:-left-48 "></div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-left text-dark-blue mt-20 md:mt-0">
                    <h2 className="text-xl font-bold md:text-2xl">Bookmark in one click</h2>
                    <p className="font-light opacity-50 py-4"> Organize your bookmarks however you like. Our simple drag-and-drop interface
                        gives you complete control over how you manage your favourite sites.</p>
                    <button className=" text-white bg-soft-blue px-2 md:px-6 py-3 rounded my-4 "> More Info</button>

                </div>
            </div>
        </Container>
    )
}

export default FeatureTabOne