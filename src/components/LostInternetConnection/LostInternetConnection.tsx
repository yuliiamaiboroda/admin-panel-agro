import Box from 'components/Box';
import brokenTractor from 'assets/broken-tractor.svg';
import { List } from './LostInternetConnection.styled'

export default function LostInternetConnection() {
  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      bg="primaryBackground"
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={8}
      >
        <img src={brokenTractor} alt="Зламаний трактор" width={200}/>
        <Box textAlign="center" py={8} borderY="light">
          <h1>Немає підключення до інтернету</h1>
        </Box>
        <Box
          textAlign="left"
          pt={8}
        >
          <h3>Спробуйте зробити наступне:</h3>
          <List>
            <li>&#10143; Перевірте мережевий кабель, модем або маршрутизатор.</li>
            <li>&#10143; Під'єднайтесь до мережі Wi-Fi ще раз.</li>
            <li>&#10143; Зверніться до вашого провайдера.</li>
          </List>
        </Box>
      </Box>
    </Box>
  );
}
