import { createSlice } from "@reduxjs/toolkit";
const actionSlice = createSlice({
  name: "data",
  initialState: {
    students: [],
  },
  reducers: {
    changeState(state, action) {
      const { payload } = action;
      state.data = [state, payload];
    },
    addStudentReducer(state, action) {
      const { payload } = action;
      // payload = {
      //   firstname: "mark",
      //   age: 21,
      // };
      state.students = [
        ...state.students,
        { ...payload, id: state.students.length + 1 },
      ];
    },
    deleteState(state, action) {
      const { id } = action.payload;
      state.students = state.students.filter((item) => item.id !== id);
    },
    editState(state, action) {
      const { id, firstname, age } = action.payload;
      state.students = state.students.map((el) => {
        if (el.id == id) return { firstname: firstname, age: age, id: id };
        return el;
      });
      // state.students = state.students.findIndex((obj) => obj.id == id);
      console.log(state.students);
    },
  },
});
export default actionSlice.reducer;
const { changeState, addStudentReducer, deleteState, editState } =
  actionSlice.actions;
export const DELStudentAction = (payload) => async (dispatch) => {
  try {
    await dispatch(deleteState(payload));
    return;
  } catch (error) {
    return console.error(error);
  }
};

export const AddStudentAction = (payload) => async (dispatch) => {
  try {
    await dispatch(addStudentReducer(payload));
    return;
  } catch (error) {
    return console.error(error);
  }
};

export const EditStudentAction = (payload) => async (dispatch) => {
  try {
    await dispatch(editState(payload));
    return;
  } catch (error) {
    return console.error(error);
  }
};
