import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LogoutAccount } from "../../../firebase";
import { Logout } from "../../store/actions";
import { useDispatch } from "react-redux";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { View, Text, Divider, Button } from "native-base";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from 'native-base';

const auth = getAuth();

export default function UserScreen({ navigation }) {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const getCurrentUser = onAuthStateChanged(auth, (user) => {
    if (user) {
      return user.email;
    } else {
    }
  });
  const handleSigout = async () => {
    try {
      
          dispatch(Logout());
          console.log("logout");
        
    } catch (error) {
      console.log("Error login user:", error);
    }
  };
  return (
    <View bg={'#a2d2ff'} style={{ flex: 1 }}>
      <View
        borderBottomLeftRadius={35}
        borderBottomRightRadius={30}
        style={{ paddingBottom: 10, paddingTop: 10, alignItems: "center" }}
      >
        <View
          justifyContent={"center"}
          alignItems={"center"}
          w={24}
          h={24}
          bg={"white"}
          borderRadius={50}
        >
        
          <Entypo name="user" size={60} color="#a2d2ff" />
        </View>
        <Text fontWeight={"semibold"} fontSize={20} mt={2}>
          Nguyễn Đình Thi
        </Text>
      </View>
      <View>
        <View
          justifyContent={"start"}
          p={4}
          h={'full'}
          bg={"white"}
          borderTopRadius={20}   
        >
           <Text
         
          fontSize={18}
          fontWeight={"bold"}
        >
          Cài đặt
        </Text>
          <TouchableOpacity
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View  height={"12"} alignItems={"center"} flexDirection={"row"}>
              <MaterialCommunityIcons
                name="account-key-outline"
                size={24}
                color="#a2d2ff"
              />
              <Text fontSize={15} style={{ marginLeft: 20 }}>
                Tài khoản
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View height={"12"} alignItems={"center"}  flexDirection={"row"}>
              <MaterialCommunityIcons
                name="lock-reset"
                size={24}
                color="#a2d2ff"
              />
              <Text fontSize={15} style={{ marginLeft: 20 }}>
                Đổi mật khẩu
              </Text>
            </View>
          </TouchableOpacity>

          
          <Divider></Divider>

          <TouchableOpacity
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={handleSigout}
          >
            <View height={"12"} alignItems={"center"}  flexDirection={"row"}>
              <MaterialCommunityIcons name="logout" size={24} color="#a2d2ff" />
              <Text fontSize={15} style={{ marginLeft: 20 }}>
                Đăng xuất
              </Text>
            </View>
            <AntDesign name="right" size={18} color="#767676" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    /*<Center>
      <Button onPress={handleSigout}>Logout</Button>
    </Center>*/
  );
}
