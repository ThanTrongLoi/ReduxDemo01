import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { DimensionApp } from '../../unit/Dimension'
import Icon from 'react-native-vector-icons/Ionicons'
const SigninScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box_input}>
                <TextInput
                    style={styles.input}
                    placeholder={'Username'}
                    placeholderTextColor={'rgba(255,255,255,0.7)'}
                    underlineColorAndroid={true}
                />
                <Icon
                    style={styles.icon}
                    name={'person-outline'}
                    size={26}
                    color={'#fff'}
                />
            </View>
            <View style={styles.box_input}>
                <TextInput
                    style={styles.input}
                    placeholder={'Password'}
                    placeholderTextColor={'rgba(255,255,255,0.7)'}
                    underlineColorAndroid={true}
                    secureTextEntry={true}
                />
                <Icon
                    style={styles.icon}
                    name={'ios-lock-closed-outline'}
                    size={26}
                    color={'#fff'}
                />
                <TouchableOpacity style={styles.icon_eye}>
                    <Icon
                        name={'eye-off-outline'}
                        size={26}
                        color={'#fff'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SigninScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box_input: {
        marginVertical: 10,
    },
    input: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        width: DimensionApp.getWIDTH() - 55,
        height: 45,
        paddingLeft: 45,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
    },
    icon: {
        position: 'absolute',
        top: 8,
        left: 12
    },
    icon_eye: {
        position: 'absolute',
        top: 8,
        right: 12
    }
})