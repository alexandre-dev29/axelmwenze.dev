import { useLoginMutation } from '@next-template-nx/data';

export function Index() {
  const [loginMutation] = useLoginMutation({
    errorPolicy: 'all',
    fetchPolicy: 'network-only',
  });
  const handleLogin = async () => {
    const { data, errors } = await loginMutation({
      variables: { input: { password: '', identifier: 'alexandre' } },
    });
  };

  return (
    <div className={'text-green-800 font-bold text-4xl'}>
      <button onClick={handleLogin}>Click here for Graphql</button>
    </div>
  );
}

export default Index;
