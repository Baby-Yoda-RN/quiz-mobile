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
  const [answer, setAnswer] = useState('');
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
          value={answer}
          setValue={setAnswer}
        />
        <Button title="Next" onPress={onPress} disabled={!answer.length} />
      </Container>
    </>
  );
};
