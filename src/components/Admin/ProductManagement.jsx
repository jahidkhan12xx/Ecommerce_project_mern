import { Link } from "react-router-dom";

const ProductManagement = () => {
  const products = [
    {
      _id: 12332,
      name: "Shirts",
      price: 110,
      sku: "121234545",
    },
    {
      _id: 12332,
      name: "Shirts",
      price: 110,
      sku: "121234545",
    },
    {
      _id: 12332,
      name: "Shirts",
      price: 110,
      sku: "121234545",
    },
    {
      _id: 12332,
      name: "Shirts",
      price: 110,
      sku: "121234545",
    },
  ];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log(` Deleting product with id: ${id}...`);
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Product Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">SKU</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  className="border-b border-text-secondary hover:shadow-xl hover:bg-gray-100 cursor-pointer"
                  key={product._id}
                >
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="p-4">${product.price}</td>
                  <td className="p-4">{product.sku}</td>
                  <td className="p-4">
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="bg-text-secondary text-white px-2 py-1 rounded mr-2 hover:bg-top"
                    >
                      Edit
                    </Link>
                    <button
                      className=" bg-red-500 text-white px-2 py-1 rounded cursor-pointer hover:bg-red-700"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
