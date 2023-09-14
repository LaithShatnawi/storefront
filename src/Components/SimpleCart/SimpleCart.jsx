/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "./SimpleCart.scss";
import { connect } from "react-redux";

function SimpleCart(props) {
  let counter = 0;
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {props.myCart.order.map((item, idx) => {
          counter = counter + item.price;
          return (
            <>
              <ListItem alignItems="flex-start" key={idx}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={item.image} />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.name}
                      </Typography>
                      <div className="price">{item.price}$</div>
                      <p>Quantity: {item.count}</p>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          );
        })}
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "block" }}
                component="span"
                variant="body2"
                color="text.primary"
                className="total"
              >
                <b>Total:</b>
                <span className="price"> {Math.ceil(counter)}$</span>
              </Typography>
            </React.Fragment>
          }
        />
      </List>
    </>
  );
}
const mapStateToProps = (state) => ({
  myCart: state.myCartReducer,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
