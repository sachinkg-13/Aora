import { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";
import EditIcon from "./EditIcon";
import HeartIcon from "./HeartIcon";
import { useGlobalContext } from "../context/GlobalProvider";

const VideoCard = ({
  title,
  creator,
  avatar,
  thumbnail,
  video,
  likedBy,
  creatorId,
}) => {
  const [play, setPlay] = useState(false);
  const { user } = useGlobalContext();
  const userId=user.accountId

  const [isLiked, setIsLiked] = useState(likedBy.includes(userId));

  const handleLike = () => {
    if (isLiked) {
      // Remove like
      setIsLiked(false);
      // Update likedBy array accordingly
    } else {
      // Add like
      setIsLiked(true);
      // Update likedBy array accordingly
    }
  };

  return (
    <View
      className="flex flex-col items-center px-4 mb-6"
      style={{ borderWidth: 0 }}
    >
      <View className="flex flex-row gap-3 items-start">
        <View className="flex justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>

          <View className="flex justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="font-psemibold text-sm text-white"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-pregular"
              numberOfLines={1}
            >
              {creator}
            </Text>
          </View>
        </View>

        <TouchableOpacity className="pt-2">
          {<EditIcon size={20} color="#FFA001" />}
        </TouchableOpacity>
      </View>

      {play ? (
        <Video
          source={{ uri: video }}
          className="w-full h-60 rounded-xl mt-3"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />

          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
      <View
        className="flex flex-row justify-between items-center w-full mt-3"
        style={{ borderWidth: 0 }}
      >
        <TouchableOpacity
          className="p- flex flex-row "
          style={{ borderWidth: 0 }}
        >
          <View className="flex flex-row items-center ">
            <HeartIcon
              size={20}
              color={creatorId === userId ? "red" : "gray"}
            />
          </View>
          <Text className="text-lg ml-1 text-white">{likedBy.length}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoCard;
