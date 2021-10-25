import React, { ReactChild } from 'react';
import { StyleSheet, Animated, ViewStyle } from 'react-native';

// FadeLoading Props Types
interface Props {
  style: ViewStyle;
  children: ReactChild;
  primaryColor: string;
  secondaryColor: string;
  duration: number;
}

// FadeLoading State Types
interface State {
  cardAnimation: Animated.Value;
}

// FadeLoading Default Props Values

export class FadeLoading extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cardAnimation: new Animated.Value(0),
    };
  }

  componentDidMount = async () => {
    this.handleAnimation();
  };

  handleAnimation = () => {
    const { cardAnimation } = this.state;
    const { duration = 2000 } = this.props;

    Animated.timing(cardAnimation, {
      toValue: 1,
      duration: duration / 2,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(cardAnimation, {
        toValue: 0,
        duration: duration / 2,
        useNativeDriver: false,
      }).start(() => this.handleAnimation());
    });
  };

  render() {
    const { cardAnimation } = this.state;
    const {
      primaryColor = 'whitesmoke',
      secondaryColor = 'lightgray',
      style = {},
      children,
    } = this.props;

    const backgroundColor = cardAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [primaryColor, secondaryColor],
    });

    return (
      <Animated.View style={[styles.fadeLoading, { backgroundColor }, style]}>
        {children}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  fadeLoading: {
    padding: 5,
    borderRadius: 4,
  },
});
