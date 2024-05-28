import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData.js";

const categories = [
  "Laptop",
  "Gaming",
  "Accessories",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];

const Products = ({ match }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  //for Price filter
  const [tempPrice, setTempPrice] = useState([0, 99999]);
  const [price, setPrice] = useState([0, 99999]);
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const tempPriceHandler = (event, newPrice) => {
    setTempPrice(newPrice);
  };
  //for Category Filter
  const [category, setCategory] = useState("");
  //for Ratings Above filter
  const [ratings, setRatings] = useState(0);
  const [tempRatings, setTempRatings] = useState(0);

  const keyword = match.params.keyword;
  const { loading, error, products, resultPerPage, filteredProductsCount } =
    useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          {/* Actual products per page */}
          <h2 className="productsHeading">PRODUCTS</h2>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          {/* Price Filters */}
          <div className="filterBox">
              <Typography component="legend">Price</Typography>
              <Slider
                value={tempPrice}
                onChange={tempPriceHandler}
                onChangeCommitted={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={99999}
              />
            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={tempRatings}
                onChange={(e, newRating) => {
                  setTempRatings(newRating);
                }}
                onChangeCommitted={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continous-slider"
                min={0}
                max={5}
                valueLabelDisplay="auto"
              />
            </fieldset>
          </div>

          {/* Pagination */}
          {resultPerPage < filteredProductsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={filteredProductsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
