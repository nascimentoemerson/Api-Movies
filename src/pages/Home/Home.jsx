import { Container } from "./Styles";

export function Home(params) {
  return (
    <Container>
      <h1>Mega Movies</h1>
      <ul>
        <li>
          <img
            src="https://s2.glbimg.com/TxQm7TbPjtdv99GcVGFgroItgxU=/e.glbimg.com/og/ed/f/original/2021/11/16/hasvc_cartaz.posted_1080x1350px_data.jpg"
            alt="Spider Man"
          />
          <span>Spider Man</span>
        </li>

        <li>
          <img
            src="https://s2.glbimg.com/TxQm7TbPjtdv99GcVGFgroItgxU=/e.glbimg.com/og/ed/f/original/2021/11/16/hasvc_cartaz.posted_1080x1350px_data.jpg"
            alt=""
          />
          <span>Spider Man</span>
        </li>

        <li>
          <img
            src="https://s2.glbimg.com/TxQm7TbPjtdv99GcVGFgroItgxU=/e.glbimg.com/og/ed/f/original/2021/11/16/hasvc_cartaz.posted_1080x1350px_data.jpg"
            alt=""
          />
          <span>Spider Man</span>
        </li>
      </ul>
    </Container>
  );
}
