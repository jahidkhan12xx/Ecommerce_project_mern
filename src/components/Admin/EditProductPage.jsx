import { useState } from "react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    category: "",
    sku: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/150?random=1",
      },
      {
        url: "https://picsum.photos/150?random=2",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const files = e.target.files[0];
    console.log(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            required
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            required
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2"
            name="description"
            value={productData.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Price</label>
          <input
            required
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Count in Stock</label>
          <input
            required
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">SKU</label>
          <input
            required
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Sizes (comma-separated)
          </label>
          <input
            required
            type="text"
            name="sizes"
            value={productData.sizes.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Colors (comma-separated)
          </label>
          <input
            required
            type="text"
            name="colors"
            value={productData.colors.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Upload Image</label>
          <input className="" type="file" onChange={handleImageUpload} />
          <div className="flex gap-4 mt-4">
            {productData.images?.length > 0 ? (
              productData.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image.url}
                    className="w-20 h-20 object-cover rounded-md shadow"
                    alt={`Product Image ${index + 1}`}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500">No images uploaded</p>
            )}
          </div>
        </div>

        <button
          className="w-full bg-green-500 text-main-bg py-2 rounded-md hover:bg-green-600 transition-colors duration-200  cursor-pointer"
          type="submit"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
