import {FlatList, Text} from 'react-native';
import {meditations} from "@/data";
import MeditationListItem from "@/components/meditation-list-item";
export default function HomeScreen() {
  return (
    <FlatList
      data={meditations}
      className="bg-white"
      contentContainerClassName="gap-8 p-3"
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <MeditationListItem meditation={item} />}
    />
  );
}
