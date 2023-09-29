import { Text, Center, Button } from "native-base";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Logout } from "../../../firebase";
import NAVIGATION_KEY from "../../constants/NavigationKey";
const auth = getAuth();
export default function UserScreen({navigation}) {
  const handleSigout = async () => {
    try {
      await Logout();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("user login : ", user.email);
        } else {
          navigation.navigate(NAVIGATION_KEY.auth);
          console.log("logout");
        }
      });
    } catch (error) {
      console.log("Error login user:", error);
    }
  };
  return (
    <Center>
      <Button onPress={handleSigout}>Logout</Button>
    </Center>
  );
}
