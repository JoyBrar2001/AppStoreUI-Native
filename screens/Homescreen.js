import { ImageBackground, SafeAreaView, ScrollView, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'
import { categories, featured, games } from '../constants/data';

Feather.loadFont();
FontAwesome.loadFont();
AntDesign.loadFont();

const Homescreen = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <LinearGradient
      colors={['rgba(58,131,244,0.4)', 'rgba(9,181,221,0.4)']}
      className='flex-1 w-full'
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar />
      <ScrollView vertical showsVerticalScrollIndicator={false} className='mt-14'>
        <View className='flex-row justify-between items-center px-4'>
          <Feather name="menu" size={28} color="black" />
          <FontAwesome name="bell" size={24} color="black" />
        </View>

        <Text className='text-3xl font-bold px-4 mt-4'>Browse Games</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='flex flex-row gap-2 mx-2 mt-1'>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveCategory(category)}
            >
              <LinearGradient
                colors={category == activeCategory ? ['rgba(0,181,211,0.9)', 'rgba(58,131,244,0.8)'] : ['rgba(255,255,255,0.4)', 'rgba(255,255,255,0.5)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className='flex justify-center items-center px-4 py-3 rounded-full'
              >
                <Text
                  className={`text-sm font-medium ${category == activeCategory ? 'text-white' : 'text-black'}`}
                >
                  {category}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text className='text-xl font-semibold mx-4 mt-4'>Featured Games</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className='px-4 gap-6'
        >
          {featured.map((game, index) => (
            <View key={index} className='overflow-hidden rounded-3xl'>
              <ImageBackground source={game.image} className='w-80 h-60'>
                <LinearGradient
                  className='w-80 h-60 flex-col justify-end p-4'
                  colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0)']}
                  start={{ x: 0.5, y: 1 }}
                  end={{ x: 0.5, y: 0.5 }}
                >
                  <View className='flex-row'>
                    {Array(game.stars).fill().map((_, index) => (
                      <AntDesign key={index} name="star" size={24} color="yellow" />
                    ))}
                  </View>
                  <Text className='font-semibold text-xl text-white my-1'>{game.title}</Text>
                  <Text className='text-base text-white'>
                    <AntDesign name="download" size={16} color="white" /> {game.downloads} Downloads
                  </Text>
                </LinearGradient>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>

        <Text className='text-xl font-semibold mx-4 my-4'>Featured Games</Text>
        <View className='px-4 gap-4 pb-4'>
          {games.map((game, index) => (
            <LinearGradient
              colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.2)']} 
              start={{ x: 0, y: 0}}
              end={{x: 1, y: 1}}
              key={index}
              className='rounded-2xl flex-row justify-between items-center pr-2 overflow-hidden'
            >
              <Image source={game.image} className='h-24 w-24 rounded-2xl' />
              <View className='flex-1 p-4 flex-col'>
                <Text className='text-lg font-semibold'>{game.title}</Text>
                <View className='flex-row gap-2'>
                  <Text className='flex justify-center items-center'><AntDesign key={index} name="star" size={16} color="yellow" /> {game.stars}</Text>
                  <Text className='flex justify-center items-center'><AntDesign name="download" size={16} color="black" /> {game.downloads}</Text>
                </View>
              </View>

              <LinearGradient 
                colors={['rgba(0,181,211,0.9)', 'rgba(58,131,244,0.8)']}
                className='px-4 rounded-full h-10 justify-center items-center'
              >
                <Text className='text-white text-sm font-semibold'>Play Now</Text>
              </LinearGradient>
            </LinearGradient>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export default Homescreen;