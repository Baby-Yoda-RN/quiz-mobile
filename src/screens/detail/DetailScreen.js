import React from 'react';
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
          placeholder="Answer"
          placeholderTextColor={color.placeHolderGray}
          style={{marginVertical: size.sm, marginTop: size.rg}}
        />
        <Button
          buttonStyle={{
            paddingVertical: size.sm,
          }}
          isDisabled
          title="Next"
        />
      </Container>
    </>
  );
};
