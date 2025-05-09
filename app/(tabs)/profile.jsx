import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, FlatList, TouchableOpacity } from "react-native";

import { icons } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import {
  getFollowers,
  getFollowing,
  getUserPosts,
  signOut,
} from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import { EmptyState, InfoBox, VideoCard } from "../../components";
import { useEffect, useState } from "react";

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();
  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);

    router.replace("/sign-in");
  };

  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    const fetchFollowersAndFollowings = async () => {
      const followersData = await getFollowers(user.$id);
      const followingsData = await getFollowing(user.$id);
      setFollowers(followersData);
      setFollowings(followingsData);
    };

    fetchFollowersAndFollowings();
  }, [user.$id]);

  console.log(followers, followings);

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this profile"
          />
        )}
        ListHeaderComponent={() => (
          <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              onPress={logout}
              className="flex w-full items-end mb-10"
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>

            <View className="w-16 h-16 border border-secondary rounded-lg flex justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>

            <InfoBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />

            <View className="mt-5 flex flex-row">
              <InfoBox
                title={posts.length || 0}
                subtitle="Posts"
                titleStyles="text-xl"
                containerStyles="mr-10"
              />
              <InfoBox
                title={followers.length || 0}
                subtitle="Followers"
                titleStyles="text-xl"
                containerStyles="mr-10"
              />
              <InfoBox
                title={followings.length || 0}
                subtitle="Followings"
                titleStyles="text-xl"
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
