import Box from 'components/Box';
import LoginForm from 'components/LoginForm';
import { Image } from './LoginPage.styled';

export default function LoginPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxWidth={['480px', '768px', '1280px']}
      height="100vh"
      mx="auto"
      bg="primaryBackground"
    >
      <LoginForm />
      <Box display={['none', 'none', 'block']} width={600}>
        <Image />
      </Box>
    </Box>
  );
}
