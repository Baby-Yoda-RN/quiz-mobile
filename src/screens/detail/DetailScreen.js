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
        <ProgressBar style={{marginVertical: size.rg}} />
        <Highlighter />
        <TextInput
          customStyles={{marginTop: size.lg, height: size.xl}}
          placeholder="Answer"
          placeholderTextColor={color.placeHolderGray}
        />
        <Button
          isDisabled
          buttonStyle={{
            marginVertical: size.rg,
            height: size.xl,
          }}
          title="Next"
        />
      </Container>
    </>
  );
};
