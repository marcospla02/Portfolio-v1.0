const regExpEmail =
  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

const regExpName = /^[A-Za-z0-9\s]+$/g;

const validate = (input) => {
  let error = {};
  if (!input.name.trim()) {
    error.name = "The name is required";
  } else error.name = "";

  if (!input.email.trim()) {
    error.email = "The email is required";
  } else if (!regExpEmail.test(input.email)) {
    error.email = "The email is not valid";
  } else error.email = "";

  if (!input.message) {
    error.message = "The message is required";
  } else error.message = "";

  return error;
};

export default validate;
