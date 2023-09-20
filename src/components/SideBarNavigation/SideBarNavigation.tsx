import Navigation from 'components/Navigation';
import Box from 'components/Box';
import companyLogo from 'assets/company-logo.svg';

export default function SideBarNavigation() {
  return (
    <Box
      position="relative"
      display={['none', 'block']}
      bg="primaryBackground"
      as="aside"
    >
      <Box
        position="sticky"
        top={0}
        display="flex"
        flexDirection="column"
        gridGap={4}
        height="100vh"
        px={2}
        py={4}
      >
        <img src={companyLogo} alt="Логотип компанії" />
        <Box py={4} borderY="light">
          <Navigation />
        </Box>
      </Box>
    </Box>
  );
}
