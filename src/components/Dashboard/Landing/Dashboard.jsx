import Header from "./Header";
import LandingCard from "./LandingCard";

export default function Dashboard({openTab}) {
    return(
        <div>
            <Header/>
            <div className="bg-gray-100 ">
                    {
                        (openTab === 'All'? 
                        (
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 py-8 px-4 gap-7">
                                <LandingCard/>
                                <LandingCard/>
                                <LandingCard/>
                                <LandingCard/>
                                <LandingCard/>
                                <LandingCard/>
                                <LandingCard/>
                                <LandingCard/>
                            </div>
                        ): 
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 py-8 px-4 gap-7">
                            <LandingCard/>
                            <LandingCard/>
                        </div>
                    )
                    }
            </div>
        </div>
    )
}