import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { AxiosInstance } from "../routes/axiosInstance";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditModal(props) {
  // console.log(props.editBlog);

  const [editBlog, setEditBlog] = React.useState({
    category: "",
    title: "",
    description: "",
  });

  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setEditBlog({ ...editBlog, [name]: value });
  };

  React.useEffect(() => {
    setEditBlog(props.editBlog);
  }, [props.getAllBlogs]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    handleClose();
    let res = await AxiosInstance.put(`/blogs/${editBlog.id}`, editBlog);
    if (res.status === 200) {
      toast.success("Blog Updated");
      props.getAllBlogs()
    } else {
      toast.error("Update Failed");
    }
  };


  return (
    <div>
      <button onClick={handleOpen}>Edit</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="text-center font-bold text-2xl mb-5">Edit Blog</h1>
          <div className="flex flex-col gap-3">
            <TextField
              value={editBlog.category}
              onChange={handleChange}
              className="w-full"
              name="category"
              id="outlined-basic"
              label="Category"
              variant="outlined"
            />
            <TextField
              value={editBlog.title}
              onChange={handleChange}
              className="w-full"
              name="title"
              id="outlined-basic"
              label="Title"
              variant="outlined"
            />
            <TextField
              value={editBlog.description}
              onChange={handleChange}
              className="w-full"
              name="description"
              id="outlined-basic"
              label="Description"
              variant="outlined"
            />
          </div>

          <button
            onClick={handleUpdate}
            className="bg-blue-400 text-white font-bold py-1 px-4 block mx-auto mt-5 rounded"
          >
            Update
          </button>
        </Box>
      </Modal>
    </div>
  );
}
