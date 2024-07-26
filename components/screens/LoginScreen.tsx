import React from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Checkbox from 'expo-checkbox';
import { Formik } from "formik";
import * as Yup from 'yup';

const LoginScreen = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Định dạng email không hợp lệ!').required('Required'),
        password: Yup.string().min(6, 'Mật khẩu quá ngắn!').required('Required')
    });

    const handleLogin = async (values) => {
        try {
            const response = await fetch('https://asms-americanstudy.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                    rememberMe: values.rememberMe
                })
            });
    
            const text = await response.text(); // Get the raw response text
            console.log('Raw Response:', text);
    
            try {
                const data = JSON.parse(text); // Attempt to parse the response as JSON
                if (response.ok) {
                    // Handle successful login
                    console.log(data);
                    // Redirect or navigate to the next screen
                } else {
                    // Handle errors
                    if (data.errors && data.errors.email) {
                        Alert.alert('Login Failed', data.errors.email);
                    } else {
                        Alert.alert('Login Failed', 'An error occurred during login.');
                    }
                }
            } catch (jsonError) {
                console.error('JSON Parse Error:', jsonError);
                Alert.alert('Login Failed', 'An unexpected error occurred.');
            }
    
        } catch (error) {
            console.error('Error during login:', error);
            Alert.alert('Login Failed', 'An unexpected error occurred.');
        }
    }
    

    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                <View style={styles.container}>
                    <Text style={styles.title}>ĐĂNG NHẬP</Text>
                    
                    <Text style={styles.label}>E-Mail</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    {touched.email && errors.email && (
                        <Text style={styles.error}>{errors.email}</Text>
                    )}

                    <Text style={styles.label}>Mật khẩu</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry
                    />
                    {touched.password && errors.password && (
                        <Text style={styles.error}>{errors.password}</Text>
                    )}

                    <View style={styles.checkboxContainer}>
                        <Checkbox
                            value={values.rememberMe}
                            onValueChange={(value) => setFieldValue('rememberMe', value)}
                            style={styles.checkbox}
                        />
                        <Text style={styles.checkboxLabel}>Ghi nhớ đăng nhập</Text>
                        <TouchableOpacity style={styles.forgotPassword}>
                            <Text style={styles.forgotPasswordText}>Quên Mật Khẩu?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={handleSubmit} style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Đăng Nhập ASMS</Text>
                    </TouchableOpacity>

                    <View style={styles.footer}>
                        <Text>Bạn là học viên AS vui lòng đăng nhập tại đây</Text>
                    </View>
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    error: {
        fontSize: 14,
        color: 'red',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    checkbox: {
        marginRight: 8,
    },
    checkboxLabel: {
        fontSize: 16,
    },
    forgotPassword: {
        marginLeft: 'auto',
    },
    forgotPasswordText: {
        color: 'blue',
    },
    loginButton: {
        backgroundColor: '#ff6f00',
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 24,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    footer: {
        alignItems: 'center',
        marginTop: 16,
    },
});

export default LoginScreen;
