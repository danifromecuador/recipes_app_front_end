export const Welcome = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
  }



  return (
    <div>
      <h1>Welcome to Recipes App</h1>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" name="name" onChange={handleSubmit} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}