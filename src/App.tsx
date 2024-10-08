import { InfoSection } from './Layout/Info';
import { Body } from './Layout/Body';
import { Resume } from './Layout/Resume';
import PersonalInfo from './Components/Personal-info';
import EducationField from './Components/Education';
import ExperienceField from './Components/Experience';
import SkillsField from './Components/Skills';
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
  location: string;
  startDate: string;
  endDate: string;
  isCollapsed: boolean;
}[];

export type ExperienceData = {
  id: string;
  companyName: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  isCollapsed: boolean;
}[];

export type SkillsData = {
  id: string;
  skills: string;
  description: string;
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

  // EDUCATION:
  const [educationData, setEducationData] = useState<EducationData>([
    {
      id: uuidv4(),
      schoolName: '',
      title: '',
      location: '',
      startDate: '',
      endDate: '',
      isCollapsed: true,
    },
  ]);

  function addEducationField() {
    setEducationData((prev) => [
      ...prev,
      {
        id: uuidv4(),
        schoolName: '',
        title: '',
        field: '',
        location: '',
        startDate: '',
        endDate: '',
        isCollapsed: true,
      },
    ]);
  }

  // EXPERIENCE:
  const [experienceData, setExperienceData] = useState<ExperienceData>([
    {
      id: uuidv4(),
      companyName: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
      isCollapsed: true,
    },
  ]);

  function addExperienceField() {
    setExperienceData((prev) => [
      ...prev,
      {
        id: uuidv4(),
        companyName: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
        isCollapsed: true,
      },
    ]);
  }

  //  SKILLS:
  const [skillsData, setSkillsData] = useState([
    {
      id: uuidv4(),
      skills: '',
      description: '',
    },
  ]);

  function addSkillsField() {
    setSkillsData([
      ...skillsData,
      {
        id: uuidv4(),
        skills: '',
        description: '',
      },
    ]);
  }

  // handleChange for all states:
  function handleChange<T extends { id?: string }>(
    index: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    // setState is a parameter that takes all of the set*  of states I need to change:
    setState: React.Dispatch<React.SetStateAction<T[]>>,
  ) {
    const { name, value } = e.target;
    setState((prev) =>
      prev.map((item) =>
        item.id === index ? { ...item, [name]: value } : item,
      ),
    );
  }

  return (
    <Body>
      <InfoSection>
        <PersonalInfo
          personalData={personalData}
          handlePersonalData={handlePersonalData}
        />
        <ExperienceField
          addExperienceField={addExperienceField}
          experienceData={experienceData}
          handleChange={handleChange}
          setExperienceData={setExperienceData}
        />
        <EducationField
          setEducationData={setEducationData}
          educationData={educationData}
          addEducationField={addEducationField}
          handleChange={handleChange}
        />
        <SkillsField
          addSkillsField={addSkillsField}
          handleChange={handleChange}
          setSkillsData={setSkillsData}
          skillsData={skillsData}
        />
      </InfoSection>
      <Resume>
        <CurriculumView
          personalData={personalData}
          educationData={educationData}
          experienceData={experienceData}
          skillsData={skillsData}
        />
      </Resume>
    </Body>
  );
}

export default App;
