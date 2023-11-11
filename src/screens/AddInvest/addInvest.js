import { Text, Center, Button, View, VStack, HStack } from "native-base";
import { TouchableOpacity } from "react-native";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
export default function AddInvestScreen({ navigation }) {
  return (
    <VStack h={"full"}>
      <View h={"full"} borderRadius={5} bg={"white"} m={2} p={2}>
        <TouchableOpacity onPress={() => navigation.navigate("loan")}>
          <HStack
            borderRadius={10}
            alignItems={"center"}
            h={"82"}
            bg={"blue.100"}
            p={3}
            justifyContent={"space-between"}
          >
            <HStack alignItems={"center"}>
              <View
                mr={2}
                justifyContent={"center"}
                alignItems={"center"}
                w={12}
                h={12}
                bg={"white"}
                borderRadius={50}
              >
                <FontAwesome name="bank" size={24} color="#4895ef" />
              </View>
              <Text fontSize={20} fontWeight={"medium"}>
                Thêm quỹ vay và cho vay
              </Text>
            </HStack>
            <AntDesign name="pluscircleo" size={30} color="#adb5bd" />
          </HStack>
        </TouchableOpacity>

        <HStack
          borderRadius={10}
          alignItems={"center"}
          h={"82"}
          bg={"blue.100"}
          p={3}
          justifyContent={"space-between"}
          mt={3}
        >
          <HStack alignItems={"center"}>
            <View
              mr={2}
              justifyContent={"center"}
              alignItems={"center"}
              w={12}
              h={12}
              bg={"white"}
              borderRadius={50}
            >
              <FontAwesome5 name="piggy-bank" size={26} color="#4895ef" />
            </View>
            <Text fontSize={20} fontWeight={"medium"}>
              Thêm sổ tiết kiệm
            </Text>
          </HStack>
          <AntDesign name="pluscircleo" size={30} color="#adb5bd" />
        </HStack>
        <HStack
          borderRadius={10}
          alignItems={"center"}
          h={"82"}
          bg={"blue.100"}
          p={3}
          justifyContent={"space-between"}
          mt={3}
        >
          <HStack alignItems={"center"}>
            <View
              mr={2}
              justifyContent={"center"}
              alignItems={"center"}
              w={12}
              h={12}
              bg={"white"}
              borderRadius={50}
            >
              <Ionicons name="md-people-sharp" size={28} color="#4895ef" />
            </View>
            <Text fontSize={20} fontWeight={"medium"}>
              Thêm quỹ hụi
            </Text>
          </HStack>

          <AntDesign name="pluscircleo" size={30} color="#adb5bd" />
        </HStack>
        <HStack
          borderRadius={10}
          alignItems={"center"}
          h={"82"}
          bg={"blue.100"}
          p={3}
          justifyContent={"space-between"}
          mt={3}
        >
           <HStack alignItems={"center"}>
                    <View
                    mr={2}
                      justifyContent={"center"}
                      alignItems={"center"}
                      w={12}
                      h={12}
                      bg={"white"}
                      borderRadius={50}
                    >
                      <FontAwesome5
                        name="file-invoice-dollar"
                        size={24}
                        color="#4895ef"
                      />
                    </View>
          <Text fontSize={20} fontWeight={"medium"}>
            Thêm các khoản cố định
          </Text>
          </HStack>
          <AntDesign name="pluscircleo" size={30} color="#adb5bd" />
        </HStack>
      </View>
    </VStack>
  );
}
