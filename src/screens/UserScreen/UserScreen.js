import { Text, Center, Button } from "native-base";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {  LogoutAccount } from "../../../firebase";
import { Logout } from "../../store/actions";
import { useDispatch } from "react-redux";
const auth = getAuth();

export default function UserScreen({navigation}) {
  const dispatch = useDispatch();
  const handleSigout = async () => {
    try {
      await LogoutAccount();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("user login : ", user.email);
        } else {
          dispatch(Logout());
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
