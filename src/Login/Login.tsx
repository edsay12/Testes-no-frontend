import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handdleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={handdleSubmit}>
        <input type="text" name="email" placeholder="Insira seu email" />
        <input type="text" name="senha" placeholder="Insira sua senha" />
        <button>Enviar</button>
      </form>
    </div>
  );
}
