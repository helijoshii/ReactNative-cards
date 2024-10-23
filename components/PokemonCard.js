import { Image, StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import React, { useRef } from 'react';

const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡️" };
        case "water":
            return { borderColor: "#6493EA", emoji: "💧" };
        case "fire":
            return { borderColor: "#FF5733", emoji: "🔥" };
        case "grass":
            return { borderColor: "#66CC66", emoji: "🌿" };
        default:
            return { borderColor: "#A0A0A0", emoji: "❓" };
    }
};

const EmojiAnimation = ({ emoji, x, y }) => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    const float = () => {
        animatedValue.setValue(0);
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 2000, // Animation duration
            useNativeDriver: true,
        }).start();
    };

    // Start the floating animation when the component mounts
    React.useEffect(() => {
        float();
    }, []);

    // Calculate the floating position based on the animated value
    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -100], // Adjust how high the emoji floats
    });

    return (
        <Animated.Text
            style={{
                position: 'absolute',
                left: x,
                top: y,
                transform: [{ translateY }],
                fontSize: 30, // Adjust the size of the emoji
            }}
        >
            {emoji}
        </Animated.Text>
    );
};

const PokemonCard = ({
    name,
    image,
    type,
    hp,
    moves = [],
    weaknesses = [],
}) => {
    const { borderColor, emoji } = getTypeDetails(type);
    const [emojiPosition, setEmojiPosition] = React.useState({ x: 0, y: 0 });
    const [showEmoji, setShowEmoji] = React.useState(false);

    const handleEmojiClick = (event) => {
        const { locationX, locationY } = event.nativeEvent;
        setEmojiPosition({ x: locationX, y: locationY });
        setShowEmoji(true);
        // Hide emoji after some time
        setTimeout(() => setShowEmoji(false), 2000);
    };

    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}> ❤️{hp} </Text>
            </View>

            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} resizeMode='contain' accessibilityLabel={`${name} pokemon`} />
               
            </View>



                <View style={styles.badgeContainer}>

                <View style={[styles.badge, { borderColor }]}>
                    <View>
                    <TouchableOpacity onPress={handleEmojiClick} style={styles.typeContainer}>
                    <Text style={styles.typeEmoji}> {emoji} </Text>
                    {showEmoji && <EmojiAnimation emoji={emoji} x={emojiPosition.x} y={emojiPosition.y} />}
                    </TouchableOpacity>
                    </View>  
                    <Text style={styles.typeText}> {type} </Text>
                </View>
                </View>
                

            <View style={styles.movesContainer}>
                <Text style={styles.movesText}> Moves: {moves.join(",")} </Text>
            </View>

            <View style={styles.weaknessesContainer}>
                <Text style={styles.weaknessesText}> Weakness: {weaknesses.join(",")} </Text>
            </View>
        </View>
    );
};

export default PokemonCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        color: "black",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        elevation: 5,
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32,
        color: "black",
    },
    name: {
        fontSize: 38,
        fontWeight: "bold",
        color: "black",
    },
    hp: {
        fontSize: 22,
        color: "black",
    },
    imageContainer: {
        position: 'relative', // Make it relative to position the emoji correctly
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16,
    },

    badge: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4,
    },
    badgeContainer: {
        alignItems: 'center', // Center the badge horizontally
        marginVertical: 16,   // Space from the top and bottom
    },
    typeEmoji: {
        fontSize: 30,
        marginRight: 12
    },
    typeText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black",
    },
    movesContainer: {
        marginBottom: 16,
    },
    movesText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black",
    },
    weaknessesContainer: {
        marginBottom: 8,
    },
    weaknessesText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black",
    }
});
