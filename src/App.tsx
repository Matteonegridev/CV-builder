import { InfoSection } from './Layout/Info';
import { Body } from './Layout/Body';
import { Resume } from './Layout/Resume';
import PersonalInfo from './Components/Personal-info';
import EducationField from './Components/Education';
// import ExperienceField from './Components/Experience';
// import SkillsField from './Components/Skills';
import CurriculumView from './Components/CV';
import { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type PersonalData = {
  fullName: string;
  position: string;
  mobile: string;
  address: string;
  email: string;
};

export type EducationData = {
  id: string;
  schoolName: string;
  title: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
}[];

export type ExperienceData = {
  id: string;
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}[];

export type SkillsData = {
  id: string;
  skills: string;
}[];

function App() {
  const [personalData, setPersonalData] = useState({
    fullName: '',
    position: '',
    mobile: '',
    address: '',
    email: '',
  });

  function handlePersonalData(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPersonalData((prev) => ({ ...prev, [name]: value }));
  }

  const [educationData, setEducationData] = useState<EducationData>([
    {
      id: uuidv4(),
      schoolName: '',
      title: '',
      field: '',
      location: '',
      startDate: '',
      endDate: '',
    },
  ]);

  function handleEducationChange(
    index: string,
    e: ChangeEvent<HTMLInputElement>,
  ) {
    const { name, value } = e.target;
    setEducationData(
      educationData.map((education) =>
        education.id === index ? { ...education, [name]: value } : education,
      ),
    );
  }

  function addEducationField() {
    setEducationData([
      ...educationData,
      {
        id: uuidv4(),
        schoolName: '',
        title: '',
        field: '',
        location: '',
        startDate: '',
        endDate: '',
      },
    ]);
  }

  // const [experienceData, setExperienceData] = useState<ExperienceData>([]);

  // const [skillsData, setSkillsData] = useState([]);

  return (
    <Body>
      <InfoSection>
        <PersonalInfo
          personalData={personalData}
          handlePersonalData={handlePersonalData}
        />
        <EducationField
          educationData={educationData}
          handleEducationChange={handleEducationChange}
          addEducationField={addEducationField}
        />
      </InfoSection>
      <Resume>
        <CurriculumView
          personalData={personalData}
          educationData={educationData}
        />
      </Resume>
    </Body>
  );
}

export default App;
