import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Camp {
  campId: string;
  campName: string;
  campCapacity: string;
  campLocation: string;
  campCurrentOccupancy: string;
  campFacilities: {
    campFacilityID: string;
    campFacilityName: string;
    _id: string;
  }[];
  campServices: {
    campServiceID: string;
    campServiceName: string;
    _id: string;
  }[];
  campManagementName: string;
  campSecurityLevel: string;
  supportingOrganizations: {
    supportingOrganizationID: string;
    SupportingOrganizationName: string;
    _id: string;
  }[];
  infrastructure: string;
  personId: string;
  donationId: string;
  donationAmount: string;
}

export interface CampState {
  camps: Camp[];
}

const initialState: CampState = {
  camps: [],
};

const campSlice = createSlice({
  name: 'camps',
  initialState,
  reducers: {
    addCamp: (state, action: PayloadAction<Camp>) => {
      state.camps.push(action.payload);
    },
    removeCamp: (state, action) => {
      state.camps = state.camps.filter(camp => camp.campId !== action.payload.id);
    },
    updateCamp: (state, action: PayloadAction<Camp>) => {
      const index = state.camps.findIndex(camp => camp.campName === action.payload.campName);
      if (index !== -1) {
        state.camps[index] = action.payload;
      }
    },
    getAllCamps: (state, action: PayloadAction<Camp[]>) => {
      state.camps = action.payload;
    },
  },
});

export const { addCamp, removeCamp, updateCamp, getAllCamps } = campSlice.actions;
export default campSlice.reducer;
