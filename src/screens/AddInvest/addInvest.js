import { Text, Center, Button, View, VStack, HStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function AddInvestScreen({ navigation }) {
  return (
    <VStack h={"full"}>
      <View h={"full"} borderRadius={5} bg={"white"} m={2} p={2}>
        <TouchableOpacity onPress={() => navigation.navigate("loan")}>
          <HStack
            borderRadius={5}
            alignItems={"center"}
            h={"82"}
            bg={"#f8f7ff"}
            p={3}
            justifyContent={"space-between"}
          >
            <Text fontSize={24} fontWeight={"medium"}>
              Thêm quỹ vay và cho vay
            </Text>
            <AntDesign name="pluscircleo" size={30} color="#adb5bd" />
          </HStack>
        </TouchableOpacity>

        <HStack
          borderRadius={5}
          alignItems={"center"}
          h={"82"}
          mt={3}
          bg={"#f8f7ff"}
          p={3}
          justifyContent={"space-between"}
        >
          <Text fontSize={24} fontWeight={"medium"}>
            Thêm sổ tiết kiệm
          </Text>
          <AntDesign name="pluscircleo" size={30} color="#adb5bd" />
        </HStack>
        <HStack
          borderRadius={5}
          alignItems={"center"}
          h={"82"}
          mt={3}
          bg={"#f8f7ff"}
          p={3}
          justifyContent={"space-between"}
        >
          <Text fontSize={24} fontWeight={"medium"}>
            Thêm quỹ hụi
          </Text>
          <AntDesign name="pluscircleo" size={30} color="#adb5bd" />
        </HStack>
        <HStack
          borderRadius={5}
          alignItems={"center"}
          h={"82"}
          mt={3}
          bg={"#f8f7ff"}
          p={3}
          justifyContent={"space-between"}
        >
          <Text fontSize={24} fontWeight={"medium"}>
            Thêm các khoản cố định
          </Text>
          <AntDesign name="pluscircleo" size={30} color="#adb5bd" />
        </HStack>
      </View>
    </VStack>
  );
}
