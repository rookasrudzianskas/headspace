//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Meditation} from "@/types";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const MeditationListItem = ({meditation}: {meditation: Meditation}) => {
  return (
    <View className="p-5 border-2 border-gray-300 rounded-2xl">
      <View className="flex-row items-center gap-5">
        <View className="bg-green-700 p-2 rounded-full">
          <FontAwesome name="check" size={16} color="white" />
        </View>
        <View className="flex-1 p-5 py-8 border-2 border-gray-300 rounded-2xl">
          <Text className="font-semibold text-2xl mb-2">{meditation.title}</Text>
          <View className="flex-row items-center gap-1">
            <FontAwesome6 name="clock" size={16} color="#6B7280" />
            <Text className="text-gray-600">{meditation.duration} min</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MeditationListItem;
