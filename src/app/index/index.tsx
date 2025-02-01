import { View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { Category } from "@/components/category";

export default function Index() {
  return (
    <View style={styles.constainer}>
      <View style={styles.header}>
        <Image source={require("@/app/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.3}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Category name="Projetos" icon="code" isSelected />
      <Category name="Site" icon="language" isSelected={false} />
      <Category name="Video" icon="movie" isSelected={false} />
    </View>
  );
}
