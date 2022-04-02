import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Button,
  Header,
  ListView,
  ProgressBar,
  Container,
  Highlighter,
  StepsProgress,
  Icon,
  TextInput,
} from '../../components';
import {color, size} from '../../theme';

export const DetailScreen = () => {
  const [text, onChangeText] = useState('');
  const navigation = useNavigation();

  return (
    <>
      <Header
        leftElement={
        <TouchableOpacity onPress={() => {navigation.push('Dashboard')}}>
          <Icon iconSet={'AntDesign'} iconName={'arrowleft'} />
        </TouchableOpacity>
        }
        headerTitle={<StepsProgress />}
        rightElement={
          <Icon iconSet={'MaterialCommunityIcons'} iconName={'account-circle-outline'}/>
        }
      />
      <Container>
        <ProgressBar style={{marginVertical: size.rg}} />
        <Highlighter />
        <TextInput
          customStyles={{marginTop: size.lg, height: size.xl}}
          placeholder="Answer"
          placeholderTextColor={color.placeHolderGray}
          value={text}
          onChangeText={onChangeText}
        />

        <Button
          title={'Next'}
          onPress={onPress}
          buttonStyle={{
            marginVertical: size.rg,
            height: size.xl,
          }}
          isDisabled={!text.length}
        />
      </Container>
    </>
  );
};
