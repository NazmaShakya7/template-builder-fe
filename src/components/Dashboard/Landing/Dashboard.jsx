import { useCompanyDeleteMutation } from "../../../hooks/useMutateData";
import { useCompanyFeedData } from "../../../hooks/useQueryData";
import Header from "./Header";
import LandingCard from "./LandingCard";
export default function Dashboard({ openTab }) {
    const {
        data,
        isLoading,
        isError,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useCompanyFeedData({ pageSize: 10 });

    return (
        <div>
            <Header />
            <div className="bg-gray-100 w-full grid ">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 py-8 px-4 gap-7">
                    { isLoading ?
                        <div className="flex items-center justify-center">Loading...</div>
                        : (
                            data?.pages?.map((page) => (
                                page.items?.map((company) => (
                                    <LandingCard company={company} key={company._id} />
                                ))
                            ))
                    )
                    }
                    {/* {
                        (openTab === 'All' ?
                            (
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 py-8 px-4 gap-7">
                                    <LandingCard />
                                    <LandingCard />
                                    <LandingCard />
                                    <LandingCard />
                                    <LandingCard />
                                    <LandingCard />
                                    <LandingCard />
                                    <LandingCard />
                                </div>
                            ) :
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 py-8 px-4 gap-7">
                                <LandingCard />
                                <LandingCard />
                            </div>
                        )
                    } */}
                </div>
            </div>
        </div>
    )
}