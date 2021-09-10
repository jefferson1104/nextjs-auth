import { GetServerSideProps } from 'next';

interface Props {
  name: string;
  age: number;
  email: string;
}

export default function page1({email, name, age}: Props) {
  return (
    <div>
      <h1>{email}</h1>
      <p><strong>Nome:</strong> {name}</p>
      <p><strong>Idade:</strong> {age}</p>
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