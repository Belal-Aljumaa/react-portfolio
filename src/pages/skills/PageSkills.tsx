import  Skillbars  from 'react-skillbars';
import './PageSkills.scss'

const skills = [
  { type: 'HTML', level: 100 },
  { type: 'CSS', level: 85 },
  { type: 'Javascript', level: 75 },
  { type: 'Sass', level: 90 },
  { type: 'Bootstrap', level: 95 },
  { type: 'React', level: 60 },
  { type: 'Redux', level: 30 },
  { type: 'Vue', level: 10 },
];

const colors = {
  bar: "var(--accent-color)",
  title: {
    text: "#fff",
    background: "var(--title-skills)"
  }
};

const PageSkills = () => {
  return (
    <div className="skills">
      <Skillbars skills={skills} colors={colors} />
    </div>
  )
}

export default PageSkills