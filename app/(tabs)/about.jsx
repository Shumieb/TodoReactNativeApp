import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const About = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.pageHeadingContainer}>
                <Text style={styles.pageHeading}>
                    This is the About page
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 4,
    },
    pageHeadingContainer: {
        padding: 4,
        marginHorizontal: "auto",
        marginVertical: 6,
    },
    pageHeading: {
        fontSize: 18,
        padding: 4,
        textAlign: 'center',
        marginVertical: 8,
        marginHorizontal: 'auto',
    }
});

export default About