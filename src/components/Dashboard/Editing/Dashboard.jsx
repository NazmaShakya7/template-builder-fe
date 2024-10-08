import Header from "./Header";
import Form from "./Form";
import Design from "./Design";
import Scroll from "../../Shared/ScrollArea";
export default function Dashboard({openTab}) {
    const formData = [
        {
          id: 1,
          label: 'Heading',
          description: 'Save hours for a better website build',
        },
        {
          id: 2,
          label: 'Sub Heading',
          description: 'Flow UI webflow system',
        },
        {
          id: 3,
          label: 'Description',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 4,
          label: 'Primary Button Text',
          description: 'Get Started',
        },
        {
          id: 5,
          label: 'Secondary Button Text',
          description: 'Learn More',
        },
        {
          id: 6,
          label: 'Secondary Button Text',
          description: 'Learn More',
        },
      ]
    return(
        <div className="flex ">
            <div className="w-2/3 ">
                <Header/>
                <div className=" py-5 px-11 ">
                      {/* <Image/> */}
                      <Form formData={formData}/>
                </div>
            </div>
            <div className="w-1/3">
                <Design/>
            </div>
        </div>
    )
}