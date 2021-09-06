function RegisterForm() {
  return (
    <>
      <h1 className="regTitle">Register Page </h1>

      <form className="regForm" autoComplete="off">
        <input
          type="text"
          name="name"
          //value={name}
          //onChange={handleChange}
          //className={classes.textField}
          size="small"
          label="Name"
          variant="outlined"
        />

        <input
          type="email"
          name="email"
          // value={email}
          //onChange={handleChange}
          // className={classes.textField}
          size="small"
          label="E-mail"
          variant="outlined"
        />
        <input
          type="password"
          name="password"
          //value={password}
          //onChange={handleChange}
          //className={classes.textField}
          size="small"
          label="Password"
          variant="outlined"
        />
        <button
          //className={classes.button}
          size="small"
          variant="contained"
          color="primary"
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
}
export default RegisterForm;
