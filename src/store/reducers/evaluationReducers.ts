import {createAsyncThunk, createReducer} from '@reduxjs/toolkit';

export const sendEvaluationAction = createAsyncThunk(
  'evaluation/send',
  async (params: {employee: any; evaluation: any}) => {
    // Mock API call
    setTimeout(() => {
      return params;
    }, 1000);
  },
);

const initialState: {pendingEvaluations?: any[]} = {};

const evaluationReducer = createReducer(initialState, builder => {
  builder.addCase(sendEvaluationAction.fulfilled, (state, action) => {
    const pendingEvaluations = state.pendingEvaluations?.filter(
      evaluation => evaluation.employee.id !== action.payload.employee.id,
    );
    state.pendingEvaluations = pendingEvaluations;
  });
});

export default evaluationReducer;
