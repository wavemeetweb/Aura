import axios from "axios";

// convert displayName → safe filename
const formatName = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "_")  // remove emojis/special chars
    .slice(0, 30); // limit length
};

export const uploadImage = async (file, user) => {
  const form = new FormData();

  const safeName = formatName(user.displayName || "user");

  // unique filename (VERY IMPORTANT)
  const fileName = `${safeName}_${Date.now()}`;

  form.append("file", file);
  form.append("upload_preset", "aura_unsigned");

  // 👇 THIS sets filename
  form.append("public_id", `aura_posts/${fileName}`);

  const res = await axios.post(
    "https://api.cloudinary.com/v1_1/dx7tyxquo/image/upload",
    form
  );

  return res.data.secure_url;
};
