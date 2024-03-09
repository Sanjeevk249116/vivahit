import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  selectbutton: {
    display: "flex",
    justifyContent: "center",
    border: "1px solid gold",
    borderRadius: 5,
    padding: 10,

    fontFamily: "Montserrat",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "gold",
      color: "black",
    },
    width: "22%",
  },
});
const SelectButton = ({ children, selected, onClick }) => {
  const classes = useStyles();

  return (
    <span
      onClick={onClick}
      className={classes.selectbutton}
      style={{
        backgroundColor: selected ? "gold" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 700 : 500,
      }}
    >
      {children}
    </span>
  );
};

export default SelectButton;