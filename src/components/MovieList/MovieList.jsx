import { MovieList } from "./Styles";

const movies = [
  {
    title: "Spider Man 1",
    image_url:
      "https://s2.glbimg.com/TxQm7TbPjtdv99GcVGFgroItgxU=/e.glbimg.com/og/ed/f/original/2021/11/16/hasvc_cartaz.posted_1080x1350px_data.jpg",
  },

  {
    title: "Spider Man 2",
    image_url:
      "https://s2.glbimg.com/TxQm7TbPjtdv99GcVGFgroItgxU=/e.glbimg.com/og/ed/f/original/2021/11/16/hasvc_cartaz.posted_1080x1350px_data.jpg",
  },

  {
    title: "Spider Man 3",
    image_url:
      "https://s2.glbimg.com/TxQm7TbPjtdv99GcVGFgroItgxU=/e.glbimg.com/og/ed/f/original/2021/11/16/hasvc_cartaz.posted_1080x1350px_data.jpg",
  },
];

export function ListaFilmes(params) {
  return (
    <div>
      <MovieList></MovieList>
    </div>
  );
}

console.log("Lista:", ListaFilmes);
