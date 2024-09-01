import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filters/selectors.js";

export const selectAllCampers = (state) => state.campers.items;

export const selectFilteredCampers = createSelector(
  [selectAllCampers, selectFilters],
  (campers, filters) => {
    return campers.filter((camper) => {
      const matchesLocation =
        !filters.location ||
        camper.location.toLowerCase().includes(filters.location.toLowerCase());

      const matchesVehicleEquipment = Object.keys(
        filters.vehicleEquipment
      ).every((key) => {
        if (filters.vehicleEquipment[key]) {
          return camper[key] === true;
        }
        return true;
      });

      const matchesForm = !filters.form || camper.form === filters.form;

      return matchesLocation && matchesVehicleEquipment && matchesForm;
    });
  }
);
export const selectCurrentPage = (state) => state.campers.page;

export const selectLimit = (state) => state.campers.limit;

export const selectTotalCount = (state) => state.campers.totalCount;

export const selectIsLoading = (state) => state.campers.loading;

export const selectError = (state) => state.campers.error;
