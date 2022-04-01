import React, {useState} from 'react';
import {View, Text} from 'react-native';
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

  const onPress = () => {};

  return (
    <>
      <Header
        leftElement={<Icon iconSet={'AntDesign'} iconName={'arrowleft'} />}
        headerTitle={<StepsProgress />}
        rightElement={
          <Icon
            iconSet={'MaterialCommunityIcons'}
            iconName={'account-circle-outline'}
          />
        }
      />
      <Container>
        <ProgressBar />
        <Highlighter />
        <TextInput
          placeholder="Email"
          placeholderTextColor={color.placeHolderGray}
          value={text}
          onChangeText={onChangeText}
        />

        <Button
          title={'Next'}
          onPress={onPress}
          buttonStyle={{paddingVertical: size.sm, marginVertical: size.rg}}
          isDisabled={!text.length}
        />
      </Container>
    </>
  );
};
