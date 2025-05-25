let data = [], id = 1;

// Get all data
const getAllUsers = (req, res) => {
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new data
const createItem = (req, res) => {
  try {
    const {name, email, age, phone} = req.body
    const item = { id: id++, name, email, age, phone };
    data.push(item);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update data
const updateItem = (req, res) => {
  try {
    const itemId = Number(req.params.id);
    const { name, email, age, phone } = req.body;
    data = data.map(item =>
      item.id === itemId ? { ...item, name, email, age, phone } : item
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete data
const deleteItem = (req, res) => {
  try {
    const itemId = Number(req.params.id);
    data = data.filter(item => item.id !== itemId);
    res.json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  createItem,
  updateItem,
  deleteItem,
};