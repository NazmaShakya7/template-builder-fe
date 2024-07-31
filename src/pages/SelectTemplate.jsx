import Template from "../components/Template/Template"
export default function SelectTemplate() {
    return(
        <section className="py-14 md:px-28 px-16  h-screen overflow-y-scroll">
            <h2 className="text-center text-primary text-4xl font-bold mb-16">Select Your Template</h2>
            <Template/>
        </section>
    )
}