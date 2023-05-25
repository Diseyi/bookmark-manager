import Container from "../container";
import illustration from "../../assets/images/illustration-features-tab-3.svg";


const FeatureTabThree = () => {
    return (
        <Container>
            <div className="flex flex-col items-center py-10 lg:flex-row relative gap-8 md:gap-24 lg:gap-24">
                <div className="w-full lg:w-1/2 relative ">
                    <div className="w-full relative z-20 ">
                        <img src={illustration} alt="" className="w-full" />
                    </div>
                    <div className="w-full lg:w-[690px] rounded-r-full bg-soft-blue h-[190px] md:h-[400px] lg:h-[300px] absolute -bottom-8 md:-bottom-16 -left-12 md:-left-28 lg:-left-60 "></div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-left text-dark-blue mt-20 md:mt-0">
                    <h2 className="text-xl font-bold md:text-2xl"> Share your bookmarks</h2>
                    <p className="font-light md:w-2/3 mx-auto lg:w-full opacity-50 py-4"> Easily share your bookmarks and collections with others. Create a shareable
                        link that you can send at the click of a button.</p>
                    <button className=" text-white border-2 border-soft-blue bg-soft-blue hover:bg-white hover:text-soft-blue px-2 md:px-6 py-3 rounded my-4 "> More Info</button>

                </div>
            </div>
        </Container>
    )
}

export default FeatureTabThree