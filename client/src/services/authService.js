export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Fill all the fields");
    } else {
      console.log("Login =>", email, password, role);
    }
  } catch (error) {
    console.error(error);
  }
};

export const handleRegister = (
  e,
  email,
  password,
  role,
  name,
  organisationName,
  hospitalName,
  address,
  website,
  phone
) => {
  e.preventDefault();
  try {
    console.log(
      "Register =>",
      email,
      password,
      role,
      name,
      organisationName,
      hospitalName,
      address,
      website,
      phone
    );
  } catch (error) {
    console.log(error);
  }
};
