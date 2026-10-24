import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [notice, setNotice] = useState("");

    function handleLogin() {
        if (!email.trim() || !password) {
            setNotice("Preencha seu e-mail e sua senha para continuar.");
            return;
        }

        setNotice("A autenticação ainda não está conectada.");
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.flex}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.container}>
                        <View style={styles.brand}>
                            <View style={styles.brandIcon}>
                                <MaterialIcons name="auto-awesome" size={0} color="#f7ef0b" />
                            </View>
                            <Text style={styles.brandName}>Oreas</Text>
                        </View>

                        <View style={styles.heading}>
                            <Text style={styles.eyebrow}></Text>
                            <Text style={styles.title}>BEM-VINDO DE VOLTA!{`\n`}</Text>
                            <Text style={styles.subtitle}>
                                Entre com seus dados para continuar.
                            </Text>
                        </View>

                        <View style={styles.form}>
                            <Text style={styles.label}>E-mail</Text>
                            <View style={styles.inputWrapper}>
                                <MaterialIcons
                                    name="mail-outline"
                                    size={21}
                                    color="#858BA0"
                                />
                                <TextInput
                                    accessibilityLabel="E-mail"
                                    style={styles.input}
                                    placeholder="voce@exemplo.com"
                                    placeholderTextColor="#A5A9B7"
                                    value={email}
                                    onChangeText={(value) => {
                                        setEmail(value);
                                        setNotice("");
                                    }}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="emailAddress"
                                    returnKeyType="next"
                                />
                            </View>

                            <View style={styles.passwordLabelRow}>
                                <Text style={styles.label}>Senha</Text>
                                <Pressable
                                    accessibilityRole="button"
                                    onPress={() =>
                                        setNotice("A recuperação de senha ainda não está configurada.")
                                    }
                                >
                                    <Text style={styles.textLink}>Esqueceu a senha?</Text>
                                </Pressable>
                            </View>
                            <View style={styles.inputWrapper}>
                                <MaterialIcons
                                    name="lock-outline"
                                    size={21}
                                    color="#858BA0"
                                />
                                <TextInput
                                    accessibilityLabel="Senha"
                                    style={styles.input}
                                    placeholder="Digite sua senha"
                                    placeholderTextColor="#A5A9B7"
                                    value={password}
                                    onChangeText={(value) => {
                                        setPassword(value);
                                        setNotice("");
                                    }}
                                    secureTextEntry={!showPassword}
                                    textContentType="password"
                                    returnKeyType="done"
                                    onSubmitEditing={handleLogin}
                                />
                                <Pressable
                                    accessibilityRole="button"
                                    accessibilityLabel={showPassword ? "Ocultar senha" : "Mostrar senha"}
                                    hitSlop={10}
                                    onPress={() => setShowPassword((visible) => !visible)}
                                >
                                    <MaterialIcons
                                        name={showPassword ? "visibility-off" : "visibility"}
                                        size={21}
                                        color="#858BA0"
                                    />
                                </Pressable>
                            </View>

                            {notice ? (
                                <Text accessibilityLiveRegion="polite" style={styles.notice}>
                                    {notice}
                                </Text>
                            ) : null}

                            <Pressable
                                accessibilityRole="button"
                                style={({ pressed }) => [
                                    styles.loginButton,
                                    pressed && styles.loginButtonPressed,
                                ]}
                                onPress={handleLogin}
                            >
                                <Text style={styles.loginButtonText}>Entrar</Text>
                                <MaterialIcons
                                    name="arrow-forward"
                                    size={20}
                                    color="#FFFFFF"
                                />
                            </Pressable>
                        </View>

                        <View style={styles.footer}>
                            <Text style={styles.footerText}>Ainda não tem uma conta? </Text>
                            <Pressable
                                accessibilityRole="button"
                                onPress={() =>
                                    setNotice("O cadastro ainda não está configurado.")
                                }
                            >
                                <Text style={styles.footerLink}>Criar conta</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#191539",
    },
    flex: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: "center",
        paddingVertical: 32,
    },
    container: {
        width: "100%",
        maxWidth: 440,
        alignSelf: "center",
        paddingHorizontal: 28,
    },
    brand: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 56,
    },
    brandIcon: {
        width: 38,
        height: 38,
        borderRadius: 13,
        backgroundColor: "#6257E8",
        alignItems: "center",
        justifyContent: "center",
    },
    brandName: {
        color: "#24243B",
        fontSize: 22,
        fontWeight: "700",
        letterSpacing: -0.7,
    },
    heading: {
        marginBottom: 34,
    },
    eyebrow: {
        color: "#6257E8",
        fontSize: 11,
        fontWeight: "700",
        letterSpacing: 1.8,
        marginBottom: 13,
    },
    title: {
        color: "#24243B",
        fontSize: 34,
        fontWeight: "700",
        letterSpacing: -1.2,
        lineHeight: 41,
    },
    subtitle: {
        color: "#777C90",
        fontSize: 15,
        lineHeight: 23,
        marginTop: 12,
    },
    form: {
        gap: 12,
    },
    label: {
        color: "#34364B",
        fontSize: 13,
        fontWeight: "600",
        marginBottom: 1,
    },
    passwordLabelRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 8,
    },
    textLink: {
        color: "#6257E8",
        fontSize: 12,
        fontWeight: "600",
    },
    inputWrapper: {
        minHeight: 56,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#E7E8EF",
        borderRadius: 14,
        backgroundColor: "#FFFFFF",
    },
    input: {
        flex: 1,
        minWidth: 0,
        color: "#24243B",
        fontSize: 14,
        paddingVertical: 15,
    },
    notice: {
        color: "#B44351",
        fontSize: 12,
        lineHeight: 18,
        marginTop: 1,
    },
    loginButton: {
        minHeight: 56,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 9,
        backgroundColor: "#11096a",
        borderRadius: 14,
        marginTop: 10,
    },
    loginButtonPressed: {
        backgroundColor: "#5146D2",
    },
    loginButtonText: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "700",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 30,
    },
    footerText: {
        color: "#777C90",
        fontSize: 13,
    },
    footerLink: {
        color: "#6257E8",
        fontSize: 13,
        fontWeight: "700",
    },
});