import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const FloatingEmoji = ({ emoji, position, onAnimationComplete }) => {
    const [animation] = useState({
        translateY: new Animated.Value(0),
        opacity: new Animated.Value(1),
    });

    useEffect(() => {
        const floatAnimation = () => {
            Animated.parallel([
                Animated.timing(animation.translateY, {
                    toValue: -100, // Adjust the height for the floating effect
                    duration: 1500, // Adjust the duration
                    useNativeDriver: true,
                }),
                Animated.timing(animation.opacity, {
                    toValue: 0, // Fade out
                    duration: 1500,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                onAnimationComplete(); // Notify when the animation is complete
            });
        };

        floatAnimation();
    }, [animation, onAnimationComplete]);

    const floatingStyle = {
        transform: [{ translateY: animation.translateY }],
        opacity: animation.opacity,
    };

    return (
        <Animated.View style={[styles.emoji, floatingStyle, position]}>
            <Text style={styles.emojiText}>{emoji}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    emoji: {
        position: 'absolute',
    },
    emojiText: {
        fontSize: 30, // Size of the emoji
    },
});

export default FloatingEmoji;
