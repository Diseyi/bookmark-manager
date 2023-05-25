
import dots from "../../assets/images/bg-dots.svg";

interface BroswerModalProps {
    imgsrc: string;
    title: string;
    version: string;
}

const BroswerModal = ({imgsrc, title, version}: BroswerModalProps) => {
    return (
        <div className="shadowbox py-10 rounded-2xl relative flex items-center flex-col">
            <div className="flex flex-col gap-6 py-4">
                <div className="w-32 h-32">
                    <img src={imgsrc} alt="" className=" w-32 h-32" /> 
                </div>
                <div className="text-dark-blue">
                    <div className=" font-bold">{title} </div>
                    <div className="font-light text-sm opacity-50 py-1">{version} </div>
                </div>
            </div>
            <div className="py-6 w-full">
                <img src={dots} alt="" className="w-full" />
            </div>
            <div className="w-full px-4 ">
                <button className="w-full text-white border-2 border-soft-blue bg-soft-blue hover:bg-white hover:text-soft-blue  px-6 py-3 rounded ">  Add & Install Extension</button>
            </div>
        </div>
    )
}

export default BroswerModal