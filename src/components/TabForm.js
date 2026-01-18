import { useEffect, useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";
import "./tabsform.css";


export default function TabForm() {
  const [selected, setSelected] = useState(0);
  const [canSubmit, setCanSubmit] = useState(false);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Settings",
      component: Settings,
    },
    {
      name: "Interests",
      component: Interests,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
  });

  const ActiveTabComponent = tabs[selected].component;

  const validateProfile = () => {
    return formData.name && formData.email && formData.gender;
  };

  const handleNext = () => {
    if (selected === 0 && !validateProfile()) {
      alert("Complete the profile section");
      return;
    }

    setSelected((prev) => prev + 1);
  };

  const handleBack = () => {
    setSelected((prev) => prev - 1);
  };

  const handleSubmit = () => {
    alert("submitted");
  };

  const formProps = {
    formData,
    setFormData,
  };

  return (
    <>
      <div className="tabs-container">
        {tabs.map((tab, index) => {
          return (
            <>
              <div
                className={`tabs ${index === selected && "active"}`}
                // className={`tabs ${index === selected ? "active" : ""}`}
                key={index}
                onClick={() => setSelected(index)}
              >
                {tab.name}
              </div>
            </>
          );
        })}
      </div>
      <div className="selected-tab">
        {/* <ActiveTabComponent formData={formData} setFormData={setFormData} /> */}
        <ActiveTabComponent {...formProps} />
      </div>
      {selected > 0 && <button onClick={handleBack}>Back</button>}
      {!(selected === tabs.length - 1) && (
        <button onClick={handleNext}>Next</button>
      )}
      {selected === tabs.length - 1 && (
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      )}
      {true && <p>Hello</p>}
    </>
  );
}



