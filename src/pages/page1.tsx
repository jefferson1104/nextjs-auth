import { GetServerSideProps } from 'next';

export default function page1(props: {name: string}) {
  const name = props.name;
  return (
    <div>
      <h1>Página 1</h1>
      <p><strong>Nome:</strong> {name}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      name: 'Jefferson Soares',
      age: 27,
      email: 'jefferson1104junior@gmail.com'
    }
  }
}