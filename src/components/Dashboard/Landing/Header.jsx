import Search from "../../UI/Search";
import SelectField from "../../UI/SelectField";

const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'published', label: 'Published' },
    { value: 'not-published', label: 'Not Published' },
  ];
  const sortOptions = [
    { value: '', label: 'Sort' },
    { value: 'ascending', label: 'ascending' },
    { value: 'descending', label: 'descending' },
  ];
export default function Header() {
    return (
        <div className="bg-white py-7 px-6 border border-formBorder flex gap-5 items-center">
            <div className="w-4/5">
                <Search placeholder={'Search'}/>
            </div>
            <div className="w-1/5 flex gap-4">
                <SelectField label={'Filter'} selectOptions={filterOptions}  className={'border border-formBorder rounded-lg py-1 px-2 w-24'}/>
                <SelectField label={'Sort'} selectOptions={sortOptions}  className={'border border-formBorder rounded-lg py-1 px-2  w-24'}/>
            </div>
        </div>
    )
}