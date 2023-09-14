/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import "./Products.scss";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {addProduct} from "../../Store/Actions";
import {increaseProduct} from "../../Store/Actions";

const Products = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  console.log(props.myProducts.products);

  return (
    <div className="productContain">
      <h1>{props.myProducts.products[0].category}</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={20}>
          {props.myProducts.products.map((item, idx) => {
            return (
              <Grid item xs={4} key={idx}>
                <Item>
                  <div className="imgContain">
                    <img src={item.image} alt="" />
                  </div>
                  <h3>{item.name}</h3>
                  <div className="price">{item.price}$</div>
                  <p>{item.description}</p>
                  <div className="quantityCont">
                    <label>Quantity</label>
                    <input type="number" placeholder="1" onChange={(e)=>props.increaseProduct(e.target.value)}/>
                  </div>
                  <button onClick={() => props.addProduct(item)}>
                    Add To Cart
                  </button>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};
const mapStateToProps = (state) => ({
  myProducts: state.myProductsReducer,
});
const mapDispatchToProps = { addProduct,increaseProduct };
export default connect(mapStateToProps, mapDispatchToProps)(Products);
