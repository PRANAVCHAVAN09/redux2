import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Post } from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { DELStudentAction, EditStudentAction } from "../Action";
import { useNavigate } from "react-router-dom";

export const Get = () => {
  const { students } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onUpdate = (el) => {
    try {
      // dispatch(EditStudentAction(payload));
      navigate("/Post", { state: el });
    } catch (e) {
      console.log(e);
    }
  };

  const onDelete = async (id) => {
    try {
      let payload = {
        id: id,
      };
      dispatch(DELStudentAction(payload));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div></div>
      {students?.map((el, index) => {
        return (
          <div key={el.id}>
            <label>
              {`${index + 1}` +
                ") " +
                "name: " +
                el.firstname +
                "  age: " +
                el.age +
                "     "}
            </label>
            <u
              href="http://localhost:3000/Post"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                onUpdate(el);
              }}
            >
              {"     "}Edit {"     "}
            </u>
            <u
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                onDelete(el.id);
              }}
            >
              {"     "}Delete{"     "}
            </u>
          </div>
        );
      })}
    </div>
  );
};
