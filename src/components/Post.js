import React, { useEffect, useState } from "react";
import { AddStudentAction, EditStudentAction } from "../Action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const Post = () => {
  // Data and Hooks
  const { students } = useSelector((state) => state);
  const [firstname, setFirstname] = useState("");
  const [age, setAge] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  // functions

  const Submit = async () => {
    try {
      let payload = {
        firstname: firstname,
        age: age,
        // id: new Date().valueOf().toString(),
      };
      dispatch(AddStudentAction(payload));
      if (payload.firstname && payload.age !== undefined) {
        setAge("");
        setFirstname("");
      }
      // AddStudent(payload);
    } catch (e) {
      console.log(e);
    }
  };
  const onUpdate = async () => {
    try {
      let payload = {
        firstname: firstname,
        age: age,
        id: location.state.id,
      };
      dispatch(EditStudentAction(payload));
      if (payload.firstname && payload.age !== undefined) {
        setAge("");
        setFirstname("");
      }
      // AddStudent(payload);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (location.state) {
      const { firstname, age } = location.state;
      setFirstname(firstname);
      setAge(age);
      setIsEdit(true);
      return;
    }
    setIsEdit(false);
    return console.log("Hey we mounted");
    return () => {
      console.log("Hey we unmonted");
    };
  }, []);
  return (
    <div>
      <label for="fname">First name:</label>
      <input
        type="text"
        id="fname"
        name="fname"
        value={firstname}
        onChange={(e) => {
          setFirstname(e.target.value);
        }}
      ></input>
      <label for="lname">Last name:</label>
      <input
        type="text"
        id="age"
        name="age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      ></input>
      {!isEdit && (
        <input
          type="submit"
          value="Submit"
          onClick={(e) => {
            Submit();
          }}
        ></input>
      )}
      {isEdit && (
        <input
          type="submit"
          value="update"
          onClick={(e) => {
            onUpdate();
          }}
        ></input>
      )}
    </div>
  );
};
