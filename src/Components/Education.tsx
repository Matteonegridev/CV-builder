import { type EducationData } from '../App';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';
import { AddButton } from '../Utils/Buttons';
import { IsCollapsedButton } from '../Utils/Buttons';
import { RemoveButton } from '../Utils/Buttons';

type T = {
  id: string;
  schoolName: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  isCollapsed: boolean;
};

type EducationFieldProp = {
  educationData: EducationData;
  setEducationData: React.Dispatch<React.SetStateAction<T[]>>;
  addEducationField: () => void;
  handleChange: (
    index: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<T[]>>,
  ) => void;
};

function EducationField({
  educationData,
  setEducationData,
  handleChange,
  addEducationField,
}: EducationFieldProp) {
  const className =
    'rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 ~text-xs/lg';

  return (
    <Form>
      <h3 className="mb-4 text-xl font-semibold">Education</h3>
      {/*Render div with inputs that takes id for each different entry we add */}
      {educationData.map((edu) => (
        <div key={edu.id} className="mb-4">
          <div className="flex items-center justify-between">
            <IsCollapsedButton
              id={edu.id}
              text={edu.isCollapsed ? 'Edit' : 'Save'}
              setAll={setEducationData}
              className={
                edu.isCollapsed
                  ? `${className} + bg-red-500 hover:bg-red-700`
                  : className
              }
            />
            <RemoveButton
              id={edu.id}
              text="Remove Education"
              setAll={setEducationData}
            />
          </div>
          {/* Shows input if condition id true */}
          {!edu.isCollapsed && (
            <>
              <Input
                label="Title or Degree"
                name="title"
                onChange={(e) => handleChange(edu.id, e, setEducationData)}
                text="Enter title"
                value={edu.title}
              />
              <Input
                label="School Name"
                name="schoolName"
                onChange={(e) => handleChange(edu.id, e, setEducationData)}
                text="Enter school"
                value={edu.schoolName}
              />
              <Input
                label="Location"
                name="location"
                onChange={(e) => handleChange(edu.id, e, setEducationData)}
                text="Enter location"
                value={edu.location}
              />
              <Input
                label="Start Date"
                name="startDate"
                onChange={(e) => handleChange(edu.id, e, setEducationData)}
                text="Start date"
                value={edu.startDate}
              />
              <Input
                label="End Date"
                name="endDate"
                onChange={(e) => handleChange(edu.id, e, setEducationData)}
                text="End date"
                value={edu.endDate}
              />
            </>
          )}
        </div>
      ))}
      <AddButton onClick={addEducationField} text="Education" />
    </Form>
  );
}
export default EducationField;
