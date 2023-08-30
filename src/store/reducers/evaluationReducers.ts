import {createAction, createAsyncThunk, createReducer} from '@reduxjs/toolkit';

interface IEvaluation {
  employee: any;
  evaluation: any;
}

export const sendEvaluationAction = createAsyncThunk(
  'evaluation/send',
  async (params: IEvaluation): Promise<IEvaluation> => {
    // Mock API call
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(params);
      }, 200);
    });
  },
);

export const saveEvaluationAction =
  createAction<IEvaluation>('evaluation/update');

const initialState: {pendingEvaluations: any[]} = {
  pendingEvaluations: [],
};

const evaluationReducer = createReducer(initialState, builder => {
  builder
    .addCase(sendEvaluationAction.fulfilled, (state, action) => {
      const pendingEvaluations = state.pendingEvaluations?.filter(
        item => item.employee.id !== action.payload.employee.id,
      );
      state.pendingEvaluations = pendingEvaluations;
    })
    .addCase(saveEvaluationAction, (state, action) => {
      const evalIndex = state.pendingEvaluations?.findIndex(
        item => item.employee.id === action.payload.employee.id,
      );
      if (evalIndex === -1) {
        state.pendingEvaluations.push(action.payload);
      } else {
        let evaluations = [...state.pendingEvaluations];
        evaluations[evalIndex] = action.payload;
        state.pendingEvaluations = evaluations;
      }
    });
});

export default evaluationReducer;
