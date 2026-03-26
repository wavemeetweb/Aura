import axios from "axios";

export const uploadImage = async (file) => {
  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", "YOUR_UNSIGNED_PRESET");

  const res = await axios.post(
    "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
    form
  );

  return res.data.secure_url;
};
