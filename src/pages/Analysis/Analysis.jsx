import "./Analysis.css";

import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";

function Analysis() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <DashboardLayout>
        <div className="analysis-empty">
          <h2>No analysis available.</h2>

          <button
            className="analysis-btn"
            onClick={() => navigate("/upload")}
          >
            Upload Resume
          </button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="analysis-page">

        <h1>Resume Analysis</h1>

        <div className="ats-card">
          <h2>ATS Score</h2>

          <div className="ats-score">
            {state.ats_score}%
          </div>
        </div>

        <div className="analysis-grid">

          <div className="analysis-card">

            <h2>Matched Skills</h2>

            <div className="skills">
              {state.matched_skills?.map((skill, index) => (
                <span
                  className="skill matched"
                  key={index}
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

          <div className="analysis-card">

            <h2>Missing Skills</h2>

            <div className="skills">
              {state.missing_skills?.map((skill, index) => (
                <span
                  className="skill missing"
                  key={index}
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

        </div>

        <div className="analysis-card">
          <h2>Strengths</h2>

          <ul>
            {state.analysis?.strengths?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="analysis-card">
          <h2>Weaknesses</h2>

          <ul>
            {state.analysis?.weaknesses?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="analysis-card">
          <h2>Suggestions</h2>

          <ul>
            {state.analysis?.suggestions?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="analysis-card">
          <h2>Interview Questions</h2>

          <ol>
            {state.analysis?.interview_questions?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>

        <h2 className="roadmap-title">
          Learning Roadmap
        </h2>

        <div className="roadmap-container">

          {state.roadmap?.map((item, index) => (

            <div
              className="roadmap-card"
              key={index}
            >

              <h3>{item.skill}</h3>

              {["beginner","intermediate","advanced"].map(level=>(

                <div
                  className="roadmap-level"
                  key={level}
                >

                  <h4>
                    {level.charAt(0).toUpperCase()+level.slice(1)}
                    {" "}
                    ({item[level].days} Days)
                  </h4>

                  <strong>Topics</strong>

                  <ul>
                    {item[level].topics?.map((topic,i)=>(
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>

                  {item[level].courses && (
                    <>
                      <strong>Courses</strong>

                      <ul>
                        {item[level].courses.map((course,i)=>(
                          <li key={i}>{course}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  <strong>Project</strong>

                  <p>{item[level].project}</p>

                </div>

              ))}

            </div>

          ))}

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Analysis;