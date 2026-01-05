import React, { useEffect, useState } from "react";
import PencilIcon from "@/assets/Icons/PencilIcon";
import TrashIcon from "@/assets/Icons/TrashIcon";
import axios from "axios";
import { BASE_URL } from "@/constants/appConstants";

interface ImportantDate {
  id_id: number;
  id_title: string;
  id_date: string;
  id_description: string;
  id_icon: string;
}

const ImportantDatePage: React.FC = () => {
  const [dates, setDates] = useState<ImportantDate[]>([]);
  const [formData, setFormData] = useState<Omit<ImportantDate, "id_id">>({
    id_title: "",
    id_date: "",
    id_description: "",
    id_icon: "",
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const API_URL = BASE_URL + "user/importantdates"; // Need to change

  // Fetch all records
  const fetchDates = async () => {
    try {
      const res = await axios.get(API_URL);
      setDates(res.data);
    } catch (err) {
      console.error("Error fetching important dates:", err);
    }
  };

  useEffect(() => {
    fetchDates();
  }, []);

  console.log(dates);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId !== null) {
        await axios.put(`${API_URL}/${editingId}`, formData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, formData);
      }
      setFormData({
        id_title: "",
        id_date: "",
        id_description: "",
        id_icon: "",
      });
      fetchDates();
    } catch (err) {
      console.error("Error saving data:", err);
    }
  };

  const handleEdit = (date: ImportantDate) => {
    setEditingId(date.id_id);
    setFormData({
      id_title: date.id_title,
      id_date: date.id_date,
      id_description: date.id_description,
      id_icon: date.id_icon,
    });
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchDates();
    } catch (err) {
      console.error("Error deleting data:", err);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Important Dates</h1>

      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input
          type="text"
          name="id_title"
          placeholder="Title"
          value={formData.id_title}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="date"
          name="id_date"
          value={formData.id_date}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <textarea
          name="id_description"
          placeholder="Description"
          value={formData.id_description}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="text"
          name="id_icon"
          placeholder="Icon"
          value={formData.id_icon}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editingId ? "Update" : "Add"} Date
        </button>
      </form>

      {/* List */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Title</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Actions</th>
            <th className="border p-2">Icon</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((date) => (
            <tr key={date.id_id}>
              <td className="border p-2">{date.id_title}</td>
              <td className="border p-2">{date.id_date}</td>
              <td className="border p-2">{date.id_description}</td>
              <td className="border p-2">{date.id_icon}</td>
              <td className="border p-2 flex justify-center gap-4">
                <button
                  onClick={() => handleEdit(date)}
                  className="bg-yellow-400 text-black rounded"
                >
                  <PencilIcon />
                </button>
                <button
                  onClick={() => handleDelete(date.id_id)}
                  className="bg-red-500 text-black rounded"
                >
                  <TrashIcon />
                </button>
              </td>
            </tr>
          ))}
          {dates.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center p-4 text-gray-500">
                No records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ImportantDatePage;
