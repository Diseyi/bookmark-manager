import "./index.css";

interface FAQProps {
    id: number;
    question: string;
    answer: string;
}

const FAQ = ({ id, question, answer }: FAQProps) => {
    return (
        <div key={id} className="border-t text-dark-blue">
            <details className="border-b">
                <summary className="py-5 text-base flex items-center justify-between cursor-pointer ">
                    <h3 className="hover:text-soft-red ">{question}</h3>
                    <div className=" ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" className="arrow-up" ><path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" className="arrow-down" ><path fill="none" stroke="#FA5959" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
                    </div>
                </summary>
                <p className="text-left opacity-70 text-sm py-5" >{answer} </p>
            </details>
        </div >
    )
}

export default FAQ