import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate("/login");
  }
  return (
    <>
      <div>
        <h1>SignUp</h1>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="nome" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="senha" />
          <button>Entrar</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
