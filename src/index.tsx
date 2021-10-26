import React, { ReactChild } from 'react';
import { StyleSheet, Animated, ViewStyle, StyleProp } from 'react-native';

// FadeLoading Props Types
interface Props {
  /** Outer container style. */
  style: StyleProp<ViewStyle>;

  /** Compoenent children. */
  children: ReactChild;

  /** Fade effect main color. */
  primaryColor: string;

  /** Fade effect second color. */
  secondaryColor: string;

  /** Fade effect fading duration. */
  duration: number;

  /** Visible value for component. */
  visible: boolean;

  /** Animation enable value for component. */
  animated: boolean;
}

// FadeLoading State Types
interface State {
  cardAnimation: Animated.Value;
  style: StyleProp<ViewStyle>;
  primaryColor: string;
  secondaryColor: string;
  duration: number;
  visible: boolean;
  animated: boolean;
}

export class FadeLoading extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cardAnimation: new Animated.Value(0),
      style: props.style || {},
      primaryColor: props.primaryColor || 'lightgray',
      secondaryColor: props.secondaryColor || 'whitesmoke',
      duration: props.duration || 2000,
      visible: typeof props.visible === 'undefined' ? true : props.visible,
      animated: typeof props.animated === 'undefined' ? true : props.animated,
    };
  }

  componentDidMount = () => {
    this.handleAnimation();
  };

  handleAnimation = () => {
    const { cardAnimation, duration, animated, visible } = this.state;

    if (!animated || !visible) {
      return;
    }

    Animated.loop(
      Animated.timing(cardAnimation, {
        toValue: 2,
        duration: duration,
        useNativeDriver: false,
      })
    ).start();
  };

  render() {
    const { cardAnimation, primaryColor, secondaryColor, style, visible } =
      this.state;
    const { children } = this.props;

    const backgroundColor = cardAnimation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [primaryColor, secondaryColor, primaryColor],
    });

    if (!visible) {
      return null;
    }

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
