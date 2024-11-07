//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Meditation} from "@/types";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {useRouter} from "expo-router";
import { Link, router } from 'expo-router';
import Paywall, { PAYWALL_RESULT } from 'react-native-purchases-ui';

const MeditationListItem = ({meditation}: {meditation: Meditation}) => {
  const router = useRouter();

  const onPress = async () => {
    if (!meditation.pro) {
      router.push(`/meditation/${meditation.id}`);
    } else {
      // verify subscription
      const paywallResult: PAYWALL_RESULT =
        await Paywall.presentPaywallIfNeeded({
          requiredEntitlementIdentifier: 'Pro',
        });
      switch (paywallResult) {
        case PAYWALL_RESULT.ERROR:
        case PAYWALL_RESULT.CANCELLED:
          return false;
        case PAYWALL_RESULT.NOT_PRESENTED:
        case PAYWALL_RESULT.PURCHASED:
        case PAYWALL_RESULT.RESTORED:
          return router.push(`/meditation/${meditation.id}`);
        default:
          return false;
      }
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onPress()} className="p-5 border-2 border-gray-300 rounded-2xl">
      <View className="flex-row items-center gap-5">
        <View className="bg-green-700 p-2 rounded-full">
          <FontAwesome name="check" size={16} color="white" />
        </View>
        <View className="flex flex-row items-center px-4 rounded-2xl overflow-hidden">
          <View className="flex-1 pr-4 border-r border-gray-300">
            <Text className="font-semibold text-2xl mb-2">{meditation.title}</Text>
            <View className="flex-row items-center gap-1">
              <FontAwesome6 name="clock" size={16} color="#6B7280" />
              <Text className="text-gray-600">{meditation.duration} min</Text>
            </View>
          </View>
          <View className="flex-1">
            <Image
              source={{ uri: 'https://picsum.photos/200' }}
              style={{ width: 120, height: 120 }}
              className="rounded-2xl"
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MeditationListItem;
