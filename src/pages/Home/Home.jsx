import { ListaFilmes } from "../../components/MovieList/MovieList";
import { Container } from "./Styles";

export function Home(params) {
  return (
    <Container>
      <h1>Mega Movies</h1>
      <div>
        <ListaFilmes />
      </div>
    </Container>
  );
}
