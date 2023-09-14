/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Categories.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectedCategory } from "../../Store/actions";

const Categories = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="catagoriesCont">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={20}>
          {props.myCategories.category.map((item, idx) => {
            return (
              <Grid item xs={4} key={idx}>
                <Link to="/products" className="link">
                  <Item onClick={() => props.selectedCategory(item.name)}>
                    <div className="imgContain">
                      <img src={item.image} alt="" />
                    </div>
                    <h3>{item.displayName}</h3>
                    <p>{item.description}</p>
                  </Item>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};
const mapStateToProps = (state) => ({
  myCategories: state.myCategoriesReducer,
});
const mapDispatchToProps = { selectedCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
