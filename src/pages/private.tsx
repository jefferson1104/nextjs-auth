import { GetServerSideProps } from "next";
import { parseCookies } from "../util/cookies";

export default function PrivatePage() {
  return (
    <div>
      <h1>Página privada.</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx.req);

  // verifica se não tiver token salvo nos cookies redireciona para login
  if (!cookies.token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  return {
    props: {}
  }
}