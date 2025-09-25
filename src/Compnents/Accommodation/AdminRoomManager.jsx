import React, { useState } from "react";

// Initial sample data
const initialRooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: 220,
    description: "A luxury room with all modern facilities.",
    image: "https://i.pinimg.com/1200x/59/55/1e/59551e26574e326184d37f4ac02a07c8.jpg",
  },
  {
    id: 2,
    name: "Standard Room",
    price: 180,
    description: "Comfortable and budget-friendly.",
    image: "https://i.pinimg.com/736x/62/b7/e1/62b7e1aab433b1fb4cfc0b0cb0489370.jpg",
  },
];

const AdminRoomManager = () => {
  const [rooms, setRooms] = useState(initialRooms);
  const [form, setForm] = useState({ name: "", price: "", description: "", image: "" });
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddRoom = () => {
    if (!form.name || !form.price || !form.image) return alert("Please fill all fields!");
    const newRoom = {
      id: Date.now(),
      ...form,
      price: Number(form.price),
    };
    setRooms([newRoom, ...rooms]);
    setForm({ name: "", price: "", description: "", image: "" });
  };

  const handleDeleteRoom = (id) => {
    if (!window.confirm("Are you sure you want to delete this room?")) return;
    setRooms(rooms.filter((room) => room.id !== id));
  };

  const filteredRooms = rooms.filter((room) =>
    room.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">🛏️ Room Management</h1>

      {/* Filter/Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by room name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded-md shadow-sm w-full sm:w-1/3"
        />
      </div>

      {/* Add New Room */}
      <div className="bg-white p-6 rounded shadow-md mb-12">
        <h2 className="text-xl font-semibold mb-4">Add New Room</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Room Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="border p-2 rounded col-span-2"
          />
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="border p-2 rounded col-span-2"
            rows="3"
          />
          <button
            onClick={handleAddRoom}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded col-span-2"
          >
            ➕ Add Room
          </button>
        </div>
      </div>

      {/* Room List */}
      {filteredRooms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <div key={room.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{room.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{room.description}</p>
                <p className="font-bold text-yellow-600 mb-3">${room.price}</p>
                <button
                  onClick={() => handleDeleteRoom(room.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No rooms found.</p>
      )}
    </div>
  );
};

export default AdminRoomManager;
