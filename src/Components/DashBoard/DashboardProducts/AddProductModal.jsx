import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import axios from "axios";

const image_hosting_key = "80a9482b5717dd4635ebdf8dbbd94b0b"; 
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProductModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data) => axiosPublic.post('/api/products', data),
    onSuccess: () => {
      queryClient.invalidateQueries(['AllProducts']);
      reset();
      onClose();
    }
  });

  const onSubmit = async (data) => {
    setLoading(true);
    
    const files = Array.from(data.thumbnails);
    const imageUrls = [];

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append("image", file);

        const res = await axios.post(image_hosting_api, formData, {
          headers: { 'content-type': 'multipart/form-data' }
        });

        if (res.data.success) {
          imageUrls.push(res.data.data.display_url);
        }
      }

      const formattedData = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        costPrice: parseFloat(data.costPrice),
        stock: parseInt(data.stock),
        details: data.details,
        images: imageUrls 
      };
      
      mutate(formattedData);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-3xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Add New Product</h2>
          <button type="button" onClick={onClose} className="text-2xl">&times;</button>
        </div>

        {/* Form Fields */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input {...register("name")} className="w-full border p-3 rounded-xl" required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Category</label>
          <select {...register("category")} className="w-full border p-3 rounded-xl">
            <option value="Serums">Serums</option>
            <option value="Sun Care">Sun Care</option>
            <option value="Cleansers">Cleansers</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Price ($)</label>
            <input {...register("price")} className="w-full border p-3 rounded-xl" type="number" step="0.01" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Cost Price ($)</label>
            <input {...register("costPrice")} className="w-full border p-3 rounded-xl" type="number" step="0.01" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Stock Quantity</label>
          <input {...register("stock")} className="w-full border p-3 rounded-xl" type="number" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea {...register("details")} className="w-full border p-3 rounded-xl" rows="3" />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Upload 4 Thumbnails</label>
          <input type="file" multiple {...register("thumbnails", { required: true })} className="w-full border p-3 rounded-xl" />
        </div>

        <div className="flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-8 py-3 border rounded-xl font-bold">Cancel</button>
          <button type="submit" disabled={loading} className="bg-black text-white px-8 py-3 rounded-xl font-bold">
            {loading ? "Saving..." : "Save Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductModal;