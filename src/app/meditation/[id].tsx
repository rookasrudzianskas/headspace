import { Link, router, useLocalSearchParams } from 'expo-router';
import {Text, TouchableOpacity, View} from 'react-native';
import { meditations } from '@/data';
import AntDesign from '@expo/vector-icons/AntDesign';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function MeditationDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const meditation = meditations.find((m) => m.id === Number(id));

  if (!meditation) {
    return <Text>Meditation not found!</Text>;
  }

  return (
    <SafeAreaView className={'bg-orange-400 flex-1'}>
      {/* Header */}
      <View className={'flex-row items-center justify-between p-10'}>
        <AntDesign name="infocirlceo" size={24} color="black" />
        <View className="bg-zinc-800 p-2 rounded-md">
          <Text className="text-zinc-100 font-semibold">
            Today's meditation
          </Text>
        </View>
        <AntDesign
          onPress={() => router.back()}
          name="close"
          size={24}
          color="black"
        />
      </View>
      <Text className="text-3xl mt-20 text-center text-zinc-800 font-semibold">
        {meditation?.title}
      </Text>

    {/*  Play pause button */}
      <TouchableOpacity className="bg-zinc-800 self-center w-20 aspect-square rounded-full items-center justify-center">
        <FontAwesome6 name="play" size={24} color="snow" />
      </TouchableOpacity>

    {/*  Player */}
      {/* Times */}
      <View className="flex-row justify-between">
        <Text>03:24</Text>
        <Text>13:14</Text>
      </View>

    </SafeAreaView>
  );
}
