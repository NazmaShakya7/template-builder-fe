import TemplateCard from "../components/Template/TemplateCard";
import FileInput from "../components/UI/FileInput";
import Button from "../components/UI/Button";
import template1 from ".././assets/template1.png"
import Scroll from "../components/Shared/ScrollArea";
const template = [
    { id: 1, title: "Template A", image: template1 },
  ];
export default function CreateTemplate() {
    return(
        <Scroll className={"py-14 md:px-28 px-16"}>
                <form action="">
                    <div className="flex flex-col items-center md:flex-row md:gap-7 lg:gap-12">
                            <div className="md:w-2/5">
                                <TemplateCard template={template[0]} className={'lg:w-[400px]'}/>
                            </div>
                            <div className="md:w-3/5 flex flex-col items-center justify-center">
                                <FileInput/>
                                <Button type="submit" className="w-3/4 mt-16">
                                    Create With CMS
                                </Button>
                            </div>
                    </div>
                </form>
        </Scroll>
    )
}