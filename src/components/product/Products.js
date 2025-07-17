import React, { useEffect, useState, useCallback } from "react";
import instance from "../../api/api";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(false);

  const productsPerPage = 10;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const fetchCategoryList = useCallback(() => {
    instance
      .get("products/category-list")
      .then((res) => setCategoryList(res?.data || []))
      .catch((err) => console.error("Category fetch error:", err));
  }, []);

  const fetchProducts = useCallback((page = 1) => {
    setSelectedCategory("");
    setCurrentPage(page);
    const skip = (page - 1) * productsPerPage;
    setLoading(true);

    instance
      .get(`products?limit=${productsPerPage}&skip=${skip}`)
      .then((res) => {
        setProducts(res?.data?.products || []);
        setTotalProducts(res?.data?.total || 0);
      })
      .catch((err) => console.error("Products fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  const getProductByCategory = useCallback((category, page = 1) => {
    setSelectedCategory(category);
    setCurrentPage(page);
    const skip = (page - 1) * productsPerPage;
    setLoading(true);

    instance
      .get(
        `products/category/${category}?limit=${productsPerPage}&skip=${skip}`
      )
      .then((res) => {
        setProducts(res?.data?.products || []);
        setTotalProducts(res?.data?.total || 0);
      })
      .catch((err) => console.error("Category products fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  const handlePageChange = (page) => {
    if (selectedCategory) {
      getProductByCategory(selectedCategory, page);
    } else {
      fetchProducts(page);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategoryList();
  }, [fetchProducts, fetchCategoryList]);

  return loading ? (
    <div className="flex justify-center items-center min-h-screen gap-3 p-5">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="p-3 h-12 w-12 rounded-3xl bg-gray-200 animate-pulse"></div>
      ))}
    </div>
  ) : (
    <>
      {/* Category Buttons */}
      <div className="flex items-center justify-center gap-3 flex-wrap my-5">
        <button
          onClick={() => fetchProducts()}
          className={`p-3 border border-black rounded-xl hover:bg-black hover:text-white ${
            selectedCategory === "" ? "bg-black text-white" : "text-black"
          } font-bold`}>
          All
        </button>
        {categoryList.map((category, index) => (
          <button
            key={index}
            onClick={() => getProductByCategory(category)}
            className={`p-3 border border-black rounded-xl hover:bg-black hover:text-white ${
              category === selectedCategory
                ? "bg-black text-white"
                : "text-black"
            } font-bold`}>
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 place-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center my-8">
          <div className="flex gap-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-4 py-2 border rounded-md ${
                    currentPage === pageNum ? "bg-black text-white" : ""
                  }`}>
                  {pageNum}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
