// src/styles/dashboardStyles.ts
import type { SxProps, Theme } from "@mui/material";

export const mainContainer: SxProps<Theme> = {
  scrollbarGutter: "stable both-edges",
};

export const loadingContainer: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "200px",
  flexDirection: "column",
  gap: 2,
};

export const errorContainer: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "200px",
  flexDirection: "column",
  gap: 2,
};

export const noResultsContainer: SxProps<Theme> = {
  textAlign: "center",
  py: 4,
  color: "text.secondary",
};

export const incidentsSection: SxProps<Theme> = {
         width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "background.default",
          gap: "3px",
          overflowX: "hidden",
          boxSizing: "border-box",
          paddingTop:6
};