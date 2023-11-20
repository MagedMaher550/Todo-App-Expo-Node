export const formContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& > *": {
    width: "fill-content",
  },
};

export const formStyle = {
  "& > .inputField": {
    margin: "0.5rem 0rem",
  },
};

export const textFieldStyle = {
  width: "30rem",
};

export const tableStyle = {
  minWidth: {
    xs: 300,
    sm: 500,
    md: 670,
    lg: 992,
    xl: 1200,
  },
  marginTop: "2rem",
};

export const tableRowStyle = {
  "&:last-child td, &:last-child th": { border: 0 },
};

export const tableCellStyle = {
  whiteSpace: "normal",
  maxWidth: 200,
  overflowWrap: "break-word", //
};
