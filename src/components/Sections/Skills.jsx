import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics",
  progressData: [
    {
      id: 1,
      name: "HTML & CSS",
      percentage: 90,
    },
    {
      id: 2,
      name: "Bootstrap",
      percentage: 60,
    },
    {
      id: 3,
      name: "JavaScript",
      percentage: 90,
    },
    {
      id: 4,
      name: "php",
      percentage: 70,
    },
    {
      id: 5,
      name: "Wordpress",
      percentage: 85,
    },
    {
      id: 6,
      name: "React js",
      percentage: 70,
    },
    {
      id: 7,
      name: "Expressjs",
      percentage: 70,
    },
    
   
    
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
